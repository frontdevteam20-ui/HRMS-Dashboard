import React from "react";
import { Edit3, Trash2, Plus } from "lucide-react";

export const ShiftAssignments = ({ shiftAssignments }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
        <h2 className="text-lg sm:text-xl font-bold text-[#333333]">Current Shift Assignments</h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
          <select className="neu-input px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base">
            <option>All Departments</option>
            <option>IT</option>
            <option>HR</option>
            <option>Support</option>
          </select>
          <button className="neu-primary px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center justify-center text-sm sm:text-base">
            <Plus size={14} className="sm:size-16 mr-2" />
            <span className="hidden sm:inline">Bulk Assign</span>
            <span className="sm:hidden">Assign</span>
          </button>
        </div>
      </div>

      <div className="neu-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#E8EBEF] to-[#ECF0F3]">
              <tr>
                <th className="px-6 py-4 text-left text-[#333333] font-medium">Employee</th>
                <th className="px-6 py-4 text-left text-[#333333] font-medium">Current Shift</th>
                <th className="px-6 py-4 text-left text-[#333333] font-medium">Department</th>
                <th className="px-6 py-4 text-left text-[#333333] font-medium">Start Date</th>
                <th className="px-6 py-4 text-left text-[#333333] font-medium">Status</th>
                <th className="px-6 py-4 text-left text-[#333333] font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {shiftAssignments.map((assignment, index) => (
                <tr 
                  key={assignment.employeeId} 
                  className={`border-b border-[#E8EBEF] hover:bg-gradient-to-r hover:from-[#ECF0F3] hover:to-[#E8EBEF] transition-all ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFB]'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="neu-small w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-gradient-to-br from-[#CA2030] to-[#d4471f] text-[#2C318E] font-semibold">
                        {assignment.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-[#333333]">{assignment.employee}</div>
                        <div className="text-[#666666] text-sm">{assignment.employeeId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-[#CA2030] to-[#d4471f] text-black text-sm rounded-full font-medium">
                      {assignment.currentShift}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#333333]">{assignment.department}</td>
                  <td className="px-6 py-4 text-[#333333]">{assignment.startDate}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                      {assignment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="neu-small p-2 rounded-lg hover:text-[#CA2030] transition-colors">
                        <Edit3 size={14} />
                      </button>
                      <button className="neu-small p-2 rounded-lg hover:text-red-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
