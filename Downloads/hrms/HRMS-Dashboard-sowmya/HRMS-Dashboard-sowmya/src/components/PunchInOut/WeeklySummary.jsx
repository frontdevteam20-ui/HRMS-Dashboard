import React from 'react';

export const WeeklySummary = () => {
  const summaryData = {
    totalHours: '42h 15m',
    daysPresent: '4/5',
    avgCheckIn: '9:22 AM',
    lateDays: '1'
  };

  return (
    <div className="neu-card p-8 rounded-3xl">
      <h3 className="text-xl font-bold text-[#333333] mb-6">This Week</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[#666666]">Total Hours</span>
          <span className="font-bold text-[#333333]">{summaryData.totalHours}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#666666]">Days Present</span>
          <span className="font-bold text-[#4CAF50]">{summaryData.daysPresent}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#666666]">Avg. Check-in</span>
          <span className="font-bold text-[#333333]">{summaryData.avgCheckIn}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#666666]">Late Days</span>
          <span className="font-bold text-[#FFC107]">{summaryData.lateDays}</span>
        </div>
      </div>
    </div>
  );
};
