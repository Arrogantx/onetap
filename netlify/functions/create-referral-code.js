const { createClient } = require('@supabase/supabase-js');
const { nanoid } = require('nanoid');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Parse the request body
    const { name, email } = JSON.parse(event.body);
    
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required' })
      };
    }
    
    // Initialize Supabase client
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('referral_users')
      .select('referral_code')
      .eq('email', email)
      .single();
    
    if (existingUser) {
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          referralCode: existingUser.referral_code,
          message: 'Existing referral code retrieved' 
        })
      };
    }
    
    // Generate a unique referral code
    const prefix = name.substring(0, 2).toUpperCase();
    const randomPart = nanoid(6).toUpperCase();
    const referralCode = `${prefix}${randomPart}`;
    
    // Create new user
    const { data, error } = await supabase
      .from('referral_users')
      .insert([
        { 
          name, 
          email, 
          referral_code: referralCode,
          username: `@${name.toLowerCase().replace(/\s+/g, '')}${Math.floor(Math.random() * 1000)}`
        }
      ])
      .select()
      .single();
    
    if (error) throw error;
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        referralCode: data.referral_code,
        message: 'Referral code generated successfully'
      })
    };
  } catch (error) {
    console.error('Error generating referral code:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate referral code' })
    };
  }
};