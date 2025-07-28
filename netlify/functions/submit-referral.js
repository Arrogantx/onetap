const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Parse the request body
    const { referralCode, businessName, contactName, email, phone, notes } = JSON.parse(event.body);
    
    if (!referralCode || !businessName || !contactName || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }
    
    // Initialize Supabase client
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Find the referrer
    const { data: referrer, error: referrerError } = await supabase
      .from('referral_users')
      .select('id')
      .eq('referral_code', referralCode)
      .single();
    
    if (referrerError) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid referral code' })
      };
    }
    
    // Create the referral
    const { data, error } = await supabase
      .from('referrals')
      .insert([
        {
          referrer_id: referrer.id,
          business_name: businessName,
          contact_name: contactName,
          email,
          phone,
          notes
        }
      ])
      .select()
      .single();
    
    if (error) throw error;
    
    // Award points to the referrer
    await supabase.rpc('award_points', {
      p_user_id: referrer.id,
      p_action: 'Referral Submitted',
      p_points: 100,
      p_description: `Referral submitted for ${businessName}`,
      p_reference_id: data.id
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        referralId: data.id,
        pointsAwarded: 100,
        message: 'Referral submitted successfully'
      })
    };
  } catch (error) {
    console.error('Error submitting referral:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit referral' })
    };
  }
};