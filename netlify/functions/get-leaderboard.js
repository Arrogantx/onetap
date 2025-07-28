const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // 1-12
    const currentYear = currentDate.getFullYear();
    
    // Get leaderboard data
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .eq('month', currentMonth)
      .eq('year', currentYear)
      .order('rank', { ascending: true })
      .limit(10);
    
    if (error) throw error;
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        leaderboard: data || []
      })
    };
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch leaderboard' })
    };
  }
};