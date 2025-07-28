const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { userId } = event.queryStringParameters;
    
    if (!userId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'User ID is required' })
      };
    }
    
    // Initialize Supabase client
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Get user data
    const { data: userData, error: userError } = await supabase
      .from('referral_users')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (userError) throw userError;
    
    // Get user's referrals
    const { data: referrals, error: referralsError } = await supabase
      .from('referrals')
      .select('*')
      .eq('referrer_id', userId)
      .order('created_at', { ascending: false });
    
    if (referralsError) throw referralsError;
    
    // Get user's points history
    const { data: pointsHistory, error: pointsError } = await supabase
      .from('points_history')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(10);
    
    if (pointsError) throw pointsError;
    
    // Get user's tier info
    const { data: tierInfo, error: tierError } = await supabase
      .from('tiers')
      .select('*')
      .eq('name', userData.tier)
      .single();
    
    if (tierError) throw tierError;
    
    // Get next tier info
    const { data: nextTier } = await supabase
      .from('tiers')
      .select('*')
      .gt('points_required', userData.points)
      .order('points_required', { ascending: true })
      .limit(1)
      .single();
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        dashboard: {
          user: userData,
          referrals: referrals || [],
          pointsHistory: pointsHistory || [],
          currentTier: tierInfo,
          nextTier: nextTier || null,
          pointsToNextTier: nextTier ? nextTier.points_required - userData.points : 0
        }
      })
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch dashboard data' })
    };
  }
};