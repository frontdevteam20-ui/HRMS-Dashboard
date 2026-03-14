import React from "react";

export const LeaveBalanceOverview = ({ leaveBalance }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h3 className="text-xl font-bold text-[#333333] mb-6">Leave Balance Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(leaveBalance).map(([leaveType, balance]) => (
          <div key={leaveType} className="neu-small p-4 rounded-xl text-center">
            <div className="font-semibold text-[#333333] mb-2 capitalize">
              {leaveType.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div className="text-2xl font-bold text-[#CA2030] mb-1">{balance.remaining}</div>
            <div className="text-[#666666] text-sm mb-3">Remaining</div>
            <div className="neu-card-inset rounded-lg p-1">
              <div
                className="h-2 neu-primary rounded-lg transition-all duration-300"
                style={{ width: `${(balance.used / balance.total) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-[#666666] mt-2">
              {balance.used} used of {balance.total}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
