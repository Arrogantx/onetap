'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  userId: string;
  username: string;
  points: number;
  prize: string;
  rank: number;
}

export function LeaderboardDisplay() {
  // Mock leaderboard data since we don't have a real API endpoint yet
  const mockLeaderboard = [
    { userId: '1', username: '@hustler_amy', points: 2500, prize: '$250', rank: 1 },
    { userId: '2', username: '@growthguru', points: 2200, prize: '$150', rank: 2 },
    { userId: '3', username: '@adsninja', points: 1950, prize: '$100', rank: 3 },
    { userId: '4', username: '@marketingpro', points: 1800, prize: '$25', rank: 4 },
    { userId: '5', username: '@leadgenmaster', points: 1650, prize: '$25', rank: 5 },
    { userId: '6', username: '@digitalwizard', points: 1500, prize: '$25', rank: 6 },
    { userId: '7', username: '@conversionking', points: 1350, prize: '$25', rank: 7 },
    { userId: '8', username: '@ppcqueen', points: 1200, prize: '$25', rank: 8 },
    { userId: '9', username: '@seoexpert', points: 1050, prize: '$25', rank: 9 },
    { userId: '10', username: '@socialstrategy', points: 900, prize: '$25', rank: 10 }
  ];

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(mockLeaderboard);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // In a real implementation, we would fetch from the API
  // This is a placeholder for when the API is available
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setIsLoading(true);
        // In a real implementation, we would fetch from the API
        // const response = await fetch('/api/referral/leaderboard');
        // const data = await response.json();
        // if (!response.ok) throw new Error(data.error || 'Failed to fetch leaderboard');
        // setLeaderboard(data.leaderboard);
        
        // For now, just use the mock data
        setLeaderboard(mockLeaderboard);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-gray-600">Loading leaderboard...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-red-500">Error: {error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-disruptive-black mb-6">Monthly Leaderboard</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-disruptive-red text-white">
              <tr>
                <th className="px-6 py-3 text-left">Rank</th>
                <th className="px-6 py-3 text-left">Username</th>
                <th className="px-6 py-3 text-right">Points</th>
                <th className="px-6 py-3 text-right">Prize</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leaderboard.map((entry) => (
                <tr 
                  key={entry.userId}
                  className={entry.rank % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-6 py-4">
                    {entry.rank === 1 ? (
                      <Trophy className="w-6 h-6 text-yellow-500" />
                    ) : entry.rank === 2 ? (
                      <Medal className="w-6 h-6 text-gray-400" />
                    ) : entry.rank === 3 ? (
                      <Award className="w-6 h-6 text-amber-700" />
                    ) : (
                      <div className="text-gray-700 font-medium">{entry.rank}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{entry.username}</td>
                  <td className="px-6 py-4 text-right font-bold text-disruptive-black">{entry.points.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-bold text-green-600">{entry.prize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          Leaderboard resets on the 1st of each month. All prizes are paid out by the 5th.
        </div>
      </CardContent>
    </Card>
  );
}