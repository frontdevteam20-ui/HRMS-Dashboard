import React from 'react';
import { Users } from 'lucide-react';

export const TodaysStats = ({ stats }) => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <h3 className="text-xl font-bold text-[#333333] mb-6">Today's Overview</h3>
      
      <div className="space-y-6">
        {/* Total Employees */}
        <div className="neu-small p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="neu-card-inset p-2 rounded-lg">
                <Users className="w-4 h-4 text-[#666666]" />
              </div>
              <span className="text-[#333333] font-medium">Total</span>
            </div>
            <span className="text-xl font-bold text-[#333333]">{stats.totalEmployees}</span>
          </div>
        </div>

        {/* Present */}
        <div className="neu-small p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-[#4CAF50] rounded-full"></div>
              <span className="text-[#333333] font-medium">Present</span>
            </div>
            <span className="text-xl font-bold text-[#4CAF50]">{stats.present}</span>
          </div>
        </div>

        {/* Late */}
        <div className="neu-small p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-[#FFC107] rounded-full"></div>
              <span className="text-[#333333] font-medium">Late</span>
            </div>
            <span className="text-xl font-bold text-[#FFC107]">{stats.late}</span>
          </div>
        </div>

        {/* Absent */}
        <div className="neu-small p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-[#CA2030] rounded-full"></div>
              <span className="text-[#333333] font-medium">Absent</span>
            </div>
            <span className="text-xl font-bold text-[#CA2030]">{stats.absent}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
