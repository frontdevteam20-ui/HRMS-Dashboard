import React from 'react';

export const EmployeeDetails = ({ employee }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-4">Employee Details</h3>
      <div className="space-y-4">
        <div className="neu-small p-3 rounded-xl">
          <div className="text-[#666666] text-sm">Department</div>
          <div className="font-semibold text-[#333333]">{employee.department}</div>
        </div>
        <div className="neu-small p-3 rounded-xl">
          <div className="text-[#666666] text-sm">Current Shift</div>
          <div className="font-semibold text-[#333333] text-sm">{employee.shift}</div>
        </div>
        <div className="neu-small p-3 rounded-xl">
          <div className="text-[#666666] text-sm">Manager</div>
          <div className="font-semibold text-[#333333]">{employee.manager}</div>
        </div>
        <div className="neu-small p-3 rounded-xl">
          <div className="text-[#666666] text-sm">Join Date</div>
          <div className="font-semibold text-[#333333]">{employee.joinDate}</div>
        </div>
      </div>
    </div>
  );
};
