import React from 'react';

export const MeetingInsights = () => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <h3 className="text-xl font-bold text-[#333333] mb-6">Key Insights & Recommendations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="neu-small p-6 rounded-2xl">
          <h4 className="font-bold text-[#333333] mb-3">📈 Positive Trends</h4>
          <ul className="space-y-2 text-[#666666]">
            <li>• Attendance rate increased by 3% this period</li>
            <li>• HR department shows 96% participation rate</li>
            <li>• Average meeting duration decreased by 5 minutes</li>
            <li>• 15% more meetings scheduled than last period</li>
          </ul>
        </div>
        
        <div className="neu-small p-6 rounded-2xl">
          <h4 className="font-bold text-[#333333] mb-3">⚠️ Areas for Improvement</h4>
          <ul className="space-y-2 text-[#666666]">
            <li>• Sales department has lowest participation (85%)</li>
            <li>• 8% of meetings exceed 90 minutes</li>
            <li>• Follow up on missed meetings in Engineering</li>
            <li>• Consider reducing frequency of status meetings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
