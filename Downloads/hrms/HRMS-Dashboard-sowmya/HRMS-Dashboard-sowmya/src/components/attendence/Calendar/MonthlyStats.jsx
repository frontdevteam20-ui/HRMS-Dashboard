import React from 'react';

export const MonthlyStats = () => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-4">This Month</h3>

      <div className="space-y-3">
        <div className="neu-small p-3 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-[#666666] text-sm">Working Days</span>
            <span className="font-bold text-[#333333]">22</span>
          </div>
        </div>

        <div className="neu-small p-3 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-[#666666] text-sm">Holidays</span>
            <span className="font-bold text-[#05A7CC]">3</span>
          </div>
        </div>

        <div className="neu-small p-3 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-[#666666] text-sm">Avg Attendance</span>
            <span className="font-bold text-[#EF5226]">89.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
