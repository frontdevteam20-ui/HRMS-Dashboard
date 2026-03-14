import React from 'react';

export const DepartmentBreakdownChart = ({ departmentSummary }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-6">Department Breakdown</h3>
      <div className="space-y-4">
        {departmentSummary.map((dept) => (
          <div key={dept.department} className="neu-small p-4 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: dept.color }}
                ></div>
                <span className="font-medium text-[#333333]">{dept.department}</span>
              </div>
              <span className="text-xs text-green-600 font-medium">{dept.trend}</span>
            </div>
            <div className="neu-card-inset rounded-lg p-1">
              <div
                className="h-2 rounded-lg transition-all duration-300"
                style={{
                  width: `${(dept.totalOvertimeHours / 300) * 100}%`,
                  backgroundColor: dept.color
                }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-[#666666] mt-2">
              <span>{dept.totalOvertimeHours}h</span>
              <span>${dept.totalCost.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
