-- Schema for the referral system

-- Users table to store referral program participants
CREATE TABLE IF NOT EXISTS referral_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE,
  referral_code TEXT UNIQUE NOT NULL,
  points INT DEFAULT 0,
  tier TEXT DEFAULT 'Bronze',
  cash_earned DECIMAL(10, 2) DEFAULT 0.00
);

-- Points history to track all point transactions
CREATE TABLE IF NOT EXISTS points_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  user_id UUID REFERENCES referral_users(id) NOT NULL,
  action TEXT NOT NULL,
  points INT NOT NULL,
  description TEXT,
  reference_id UUID -- Optional reference to a referral or other entity
);

-- Referrals table to track all submitted referrals
CREATE TABLE IF NOT EXISTS referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  referrer_id UUID REFERENCES referral_users(id) NOT NULL,
  business_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  notes TEXT,
  status TEXT DEFAULT 'Submitted',
  points_awarded INT DEFAULT 100,
  converted_to_client BOOLEAN DEFAULT false,
  converted_at TIMESTAMPTZ
);

-- Leaderboard table (could be a view in production)
CREATE TABLE IF NOT EXISTS leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  month INT NOT NULL,
  year INT NOT NULL,
  user_id UUID REFERENCES referral_users(id) NOT NULL,
  username TEXT NOT NULL,
  points INT NOT NULL,
  rank INT NOT NULL,
  prize DECIMAL(10, 2),
  UNIQUE(month, year, user_id)
);

-- Tiers configuration
CREATE TABLE IF NOT EXISTS tiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  points_required INT NOT NULL,
  commission_percentage DECIMAL(5, 2) NOT NULL,
  benefits JSONB
);

-- Insert default tiers
INSERT INTO tiers (name, points_required, commission_percentage, benefits)
VALUES 
  ('Bronze', 0, 10.00, '["$100 per closed client", "Access to referral resources", "Basic training materials", "Personal referral code"]'),
  ('Silver', 1000, 15.00, '["$150 per closed client", "Priority support", "Advanced training materials", "Monthly strategy calls"]'),
  ('Gold', 3000, 20.00, '["$200 per closed client", "VIP support", "Exclusive resources", "Quarterly bonus opportunities", "Co-marketing opportunities"]'),
  ('Platinum', 10000, 25.00, '["$250 per closed client", "White-label options", "Executive strategy sessions", "Revenue sharing opportunities", "Early access to new features", "Custom marketing materials"]');

-- Enable Row Level Security
ALTER TABLE referral_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE points_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;
ALTER TABLE tiers ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Users can read their own data
CREATE POLICY "Users can read own data" ON referral_users
  FOR SELECT USING (auth.uid() = id);

-- Users can read their own points history
CREATE POLICY "Users can read own points history" ON points_history
  FOR SELECT USING (auth.uid() = user_id);

-- Users can read their own referrals
CREATE POLICY "Users can read own referrals" ON referrals
  FOR SELECT USING (auth.uid() = referrer_id);

-- Users can read the leaderboard
CREATE POLICY "Everyone can read leaderboard" ON leaderboard
  FOR SELECT USING (true);

-- Users can read tiers
CREATE POLICY "Everyone can read tiers" ON tiers
  FOR SELECT USING (true);

-- Create functions for updating user tier based on points
CREATE OR REPLACE FUNCTION update_user_tier()
RETURNS TRIGGER AS $$
BEGIN
  -- Update the user's tier based on their points
  UPDATE referral_users
  SET tier = (
    SELECT name
    FROM tiers
    WHERE points_required <= NEW.points
    ORDER BY points_required DESC
    LIMIT 1
  )
  WHERE id = NEW.id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update tier when points change
CREATE TRIGGER update_tier_on_points_change
AFTER UPDATE OF points ON referral_users
FOR EACH ROW
WHEN (OLD.points IS DISTINCT FROM NEW.points)
EXECUTE FUNCTION update_user_tier();

-- Create function to award points
CREATE OR REPLACE FUNCTION award_points(
  p_user_id UUID,
  p_action TEXT,
  p_points INT,
  p_description TEXT DEFAULT NULL,
  p_reference_id UUID DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
  -- Add points to user
  UPDATE referral_users
  SET points = points + p_points
  WHERE id = p_user_id;
  
  -- Record in points history
  INSERT INTO points_history (user_id, action, points, description, reference_id)
  VALUES (p_user_id, p_action, p_points, p_description, p_reference_id);
END;
$$ LANGUAGE plpgsql;