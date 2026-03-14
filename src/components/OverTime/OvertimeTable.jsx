// src/Overtime/OvertimeTable.jsx
import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const OvertimeTable = ({ data, getDepartmentColor }) => {

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <ChevronUp size={16} className="text-[#CA2030]" />;
      case 'down': return <ChevronDown size={16} className="text-green-600" />;
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
    }
  };

  const totalOvertimeCost = data.reduce((sum, emp) => sum + emp.totalOvertimePay, 0);

  return (
    <div className="neu-card rounded-2xl overflow-hidden">
      {/* Table Header */}
      <div className="p-4 md:p-6 border-b border-[#E8EBEF] bg-gradient-to-r from-[#ECF0F3] to-[#E8EBEF]">
        <h2 className="text-lg md:text-xl font-bold text-[#333333]">Employee Overtime Details</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gradient-to-r from-[#E8EBEF] to-[#E8EBEF]">
            <tr>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[#333333] font-semibold text-xs md:text-sm">Employee</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[#333333] font-semibold text-xs md:text-sm">Department</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[#333333] font-semibold text-xs md:text-sm">Overtime Hours</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[#333333] font-semibold text-xs md:text-sm">Rate/Hour</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[#333333] font-semibold text-xs md:text-sm">Total Pay</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[#333333] font-semibold text-xs md:text-sm">Weekly Pattern</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[#333333] font-semibold text-xs md:text-sm">Trend</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[#333333] font-semibold text-xs md:text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <tr 
                key={employee.employeeId} 
                className={`border-b border-[#E8EBEF] hover:bg-gradient-to-r hover:from-[#ECF0F3] hover:to-[#E8EBEF] transition-all duration-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFB]'
                }`}
              >
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <div className="flex items-center">
                    <div className={`neu-small w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-2 md:mr-4 ${getDepartmentColor(employee.department)} text-white font-semibold text-xs md:text-sm`}>
                      {employee.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-[#333333] text-sm md:text-base">{employee.employee}</div>
                      <div className="text-[#666666] text-xs md:text-sm">{employee.employeeId}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-white text-xs md:text-sm font-medium ${getDepartmentColor(employee.department)}`}>
                    {employee.department}
                  </span>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <div className="text-[#333333] font-bold text-base md:text-lg">{employee.overtimeHours}h</div>
                  <div className="text-[#666666] text-xs md:text-sm">{employee.averageDaily}h/day avg</div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4 text-[#333333] font-semibold text-sm md:text-base">
                  ${employee.overtimeRate}
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <div className="text-[#CA2030] font-bold text-base md:text-lg">
                    ${employee.totalOvertimePay}
                  </div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <div className="flex space-x-1 overflow-x-auto">
                    {employee.weeklyBreakdown.map((hours, idx) => (
                      <div key={idx} className="neu-small p-1 md:p-2 rounded text-xs font-medium text-center min-w-6 md:min-w-8">
                        {hours}h
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <div className="flex items-center">
                    {getTrendIcon(employee.trend)}
                    <span className="ml-1 text-xs md:text-sm font-medium capitalize">{employee.trend}</span>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium border ${
                    employee.status === 'approved' 
                      ? 'bg-green-100 text-green-800 border-green-200' 
                      : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                  }`}>
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="p-4 md:p-6 border-t border-[#E8EBEF] bg-gradient-to-r from-[#ECF0F3] to-[#E8EBEF]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="text-[#666666] text-xs md:text-sm">
            Showing {data.length} employees with overtime this period
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs md:text-sm">
            <div className="text-[#666666]">
              Total Cost: <span className="font-bold text-[#CA2030]">${totalOvertimeCost.toLocaleString()}</span>
            </div>
            <div className="text-[#666666]">
              Avg Efficiency: <span className="font-bold text-[#2C318E]">76%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
