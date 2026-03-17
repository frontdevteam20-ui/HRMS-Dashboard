import React from "react";

const 


StatsCards = ({ employees, departments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="text-3xl font-bold text-[#333333] mb-2">{employees.length}</div>
        <div className="text-[#666666]">Total Employees</div>
      </div>

      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="text-3xl font-bold text-[#4CAF50] mb-2">
          {employees.filter(emp => emp.status === "active").length}
        </div>
        <div className="text-[#666666]">Active</div>
      </div>

      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="text-3xl font-bold text-[#FFC107] mb-2">
          {employees.filter(emp => emp.status === "on-leave").length}
        </div>
        <div className="text-[#666666]">On Leave</div>
      </div>

      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="text-3xl font-bold text-[#05A7CC] mb-2">
          {departments.length}
        </div>
        <div className="text-[#666666]">Departments</div>
      </div>
    </div>
  );
};

export default StatsCards;
