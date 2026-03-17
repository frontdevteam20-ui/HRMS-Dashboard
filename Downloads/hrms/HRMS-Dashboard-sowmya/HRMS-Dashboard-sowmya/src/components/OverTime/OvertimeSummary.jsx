// src/OverTime/OvertimeSummary.jsx
import React from 'react';

export const OvertimeSummary = ({ totalHours, totalCost, averagePerEmployee }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-6">Monthly Overview</h3>
      <div className="space-y-4">
        <div className="neu-small p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-[#CA2030] mb-1">{totalHours}h</div>
          <div className="text-[#666666] text-sm">Total Overtime</div>
        </div>
        <div className="neu-small p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">${totalCost.toLocaleString()}</div>
          <div className="text-[#666666] text-sm">Total Cost</div>
        </div>
        <div className="neu-small p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-[#2C318E] mb-1">{averagePerEmployee.toFixed(1)}h</div>
          <div className="text-[#666666] text-sm">Avg per Employee</div>
        </div>
      </div>
    </div>
  );
};
