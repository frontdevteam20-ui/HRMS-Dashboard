// EmployeeStats.jsx
import React from 'react';
import { Users, UserCheck, Calendar, Building2 } from 'lucide-react';

const EmployeeStats = ({ employees = [], departments = [] }) => {
  // Calculate counts
  const activeCount = employees.filter(e => e.status === 'Active').length;
  const onLeaveCount = employees.filter(e => e.status === 'On Leave').length;
  const departmentCount = departments.length - 1; // Subtract 1 if 'All' is included

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Total Employees */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">{employees.length}</p>
            <p className="text-[#666666] text-sm mt-1">Total Employees</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#05A7CC]">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#fff]" />
          </div>
        </div>
      </div>

      {/* Active Employees */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">{activeCount}</p>
            <p className="text-[#666666] text-sm mt-1">Active</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#10B981]">
            <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#fff]" />
          </div>
        </div>
      </div>

      {/* On Leave */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">{onLeaveCount}</p>
            <p className="text-[#666666] text-sm mt-1">On Leave</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#996DFF]">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#fff]" />
          </div>
        </div>
      </div>

      {/* Total Departments */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">{departmentCount}</p>
            <p className="text-[#666666] text-sm mt-1">Departments</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#ef5226]">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStats;