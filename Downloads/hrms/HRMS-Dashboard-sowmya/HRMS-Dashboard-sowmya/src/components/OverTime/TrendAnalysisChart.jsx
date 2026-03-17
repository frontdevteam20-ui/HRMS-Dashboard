import React from 'react';

export const TrendAnalysisChart = ({ monthlyTrend }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-6">6-Month Trend</h3>
      <div className="space-y-3">
        {monthlyTrend.map((month) => (
          <div key={month.month} className="neu-small p-3 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#333333] font-medium text-sm">{month.month}</span>
              <div className="flex items-center space-x-2">
                <span className="text-[#666666] text-xs">{month.hours}h</span>
                <div
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    month.efficiency >= 80
                      ? 'bg-green-100 text-green-700'
                      : month.efficiency >= 70
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {month.efficiency}%
                </div>
              </div>
            </div>
            <div className="neu-card-inset rounded-lg p-1">
              <div
                className="h-2 neu-primary rounded-lg transition-all duration-300"
                style={{ width: `${(month.hours / 700) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-[#666666] mt-1">Cost: ${month.cost.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
