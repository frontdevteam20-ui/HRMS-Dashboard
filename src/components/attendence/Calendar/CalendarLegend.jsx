import React from 'react';

export const CalendarLegend = () => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-4">Color Legend</h3>

      <div className="space-y-3">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-green-500 mr-3"></div>
          <span className="text-sm text-[#666666]">Perfect Attendance</span>
        </div>

        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-yellow-700 mr-3"></div>
          <span className="text-sm text-[#666666]">Late Arrivals</span>
        </div>

        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-green-800 mr-3"></div>
          <span className="text-sm text-[#666666]">Company Holiday</span>
        </div>

        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-yellow-500 mr-3"></div>
          <span className="text-sm text-[#666666]">Mixed Attendance</span>
        </div>
      </div>
    </div>
  );
};
