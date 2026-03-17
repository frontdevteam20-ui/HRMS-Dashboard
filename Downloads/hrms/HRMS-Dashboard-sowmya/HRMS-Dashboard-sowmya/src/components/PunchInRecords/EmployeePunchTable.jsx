import React from "react";
import { Edit3, Eye, MoreHorizontal } from "lucide-react";
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

export const EmployeePunchTable = ({
  filteredRecords,
  selectedRecords,
  handleSelectRecord,
  handleSelectAll,
  onNavigate,
  showActions,
  setShowActions,
  punchRecords,
  getStatusBadge,
  getDepartmentColor
}) => {
  // Helper function to render status badge
  const renderStatusBadge = (status) => {
    return getStatusBadge(status);
  };

  return (
    <div className="neu-card rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-[#E8EBEF] bg-gradient-to-r from-[#ECF0F3] to-[#E8EBEF]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-[#333333]">Employee Punch Records</h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-[#666666] text-xs sm:text-sm">
              Showing {filteredRecords.length} of {punchRecords.length} records
            </span>
            <label className="flex items-center group cursor-pointer">
              <input
                type="checkbox"
                checked={selectedRecords.length === filteredRecords.length && filteredRecords.length > 0}
                onChange={handleSelectAll}
                className="mr-2 w-4 h-4 text-[#CA2030] bg-gray-100 border-gray-300 rounded focus:ring-[#CA2030] focus:ring-2"
              />
              <span className="text-xs sm:text-sm text-[#666666] group-hover:text-[#CA2030] transition-colors">
                Select All
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Table - Desktop View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#E8EBEF] to-[#ECF0F3]">
            <tr>
              <th className="px-4 sm:px-6 py-4 text-left">
                <input
                  type="checkbox"
                  checked={selectedRecords.length === filteredRecords.length && filteredRecords.length > 0}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-[#CA2030] bg-gray-100 border-gray-300 rounded focus:ring-[#CA2030] focus:ring-2"
                />
              </th>
              <th className="px-4 sm:px-6 py-4 text-left text-[#333333] font-semibold text-sm">Employee</th>
              <th className="px-4 sm:px-6 py-4 text-left text-[#333333] font-semibold text-sm">Date</th>
              <th className="px-4 sm:px-6 py-4 text-left text-[#333333] font-semibold text-sm">Punch In</th>
              <th className="px-4 sm:px-6 py-4 text-left text-[#333333] font-semibold text-sm">Punch Out</th>
              <th className="px-4 sm:px-6 py-4 text-left text-[#333333] font-semibold text-sm">Total Hours</th>
              <th className="px-4 sm:px-6 py-4 text-left text-[#333333] font-semibold text-sm">Overtime</th>
              <th className="px-4 sm:px-6 py-4 text-left text-[#333333] font-semibold text-sm">Status</th>
              <th className="px-4 sm:px-6 py-4 text-left text-[#333333] font-semibold text-sm">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRecords.map((record, index) => (
              <tr
                key={record.id}
                className={`border-b border-[#E8EBEF] hover:bg-gradient-to-r hover:from-[#ECF0F3] hover:to-[#E8EBEF] transition-all duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F8FAFB]"
                } ${selectedRecords.includes(record.id) ? "ring-2 ring-[#CA2030] bg-orange-50" : ""}`}
              >
                <td className="px-4 sm:px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRecords.includes(record.id)}
                    onChange={() => handleSelectRecord(record.id)}
                    className="w-4 h-4 text-[#CA2030] bg-gray-100 border-gray-300 rounded focus:ring-[#CA2030] focus:ring-2"
                  />
                </td>

                <td className="px-4 sm:px-6 py-4">
                  <div className="flex items-center">
                    <div className="neu-small w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-4 bg-gradient-to-br from-[#CA2030] to-[#d4471f] text-black font-semibold text-xs sm:text-sm">
                      {record.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-[#333333] text-sm truncate">{record.employee}</div>
                      <div className="text-[#666666] text-xs">{record.employeeId}</div>
                      <span
                        className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium mt-1 ${getDepartmentColor(
                          record.department
                        )}`}
                      >
                        {record.department}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="px-4 sm:px-6 py-4 text-[#333333] font-medium text-sm">{record.date}</td>
                <td className="px-4 sm:px-6 py-4 text-sm">{record.punchIn || "--"}</td>
                <td className="px-4 sm:px-6 py-4 text-sm">{record.punchOut || "--"}</td>
                <td className="px-4 sm:px-6 py-4 text-[#333333] font-bold text-sm">{record.totalHours}</td>
                <td className="px-4 sm:px-6 py-4">
                  <span
                    className={`font-bold text-sm ${record.overtime !== "0h" ? "text-[#2C318E]" : "text-[#666666]"}`}
                  >
                    {record.overtime}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4">{renderStatusBadge(record.status)}</td>
                <td className="px-4 sm:px-6 py-4">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <button className="neu-small p-1.5 sm:p-2 rounded-lg hover:text-[#CA2030] hover:shadow-md transition-all">
                      <Edit3 size={12} sm:size={14} />
                    </button>
                    <button
                      onClick={() => onNavigate("/employee-attendance-profile")}
                      className="neu-small p-1.5 sm:p-2 rounded-lg hover:text-[#2C318E] hover:shadow-md transition-all"
                    >
                      <Eye size={12} sm:size={14} />
                    </button>
                    <button
                      onClick={() => setShowActions(showActions === record.id ? null : record.id)}
                      className="neu-small p-1.5 sm:p-2 rounded-lg hover:text-[#333333] hover:shadow-md transition-all"
                    >
                      <MoreHorizontal size={12} sm:size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden p-4 space-y-3">
        {filteredRecords.map((record, index) => (
          <div
            key={record.id}
            className={`neu-card rounded-xl p-4 border transition-all duration-200 ${
              selectedRecords.includes(record.id) ? "ring-2 ring-[#CA2030] bg-orange-50 border-orange-200" : "border-[#E8EBEF]"
            } ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFB]"}`}
          >
            {/* Header with checkbox and employee info */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <input
                  type="checkbox"
                  checked={selectedRecords.includes(record.id)}
                  onChange={() => handleSelectRecord(record.id)}
                  className="w-4 h-4 text-[#CA2030] bg-gray-100 border-gray-300 rounded focus:ring-[#CA2030] focus:ring-2 flex-shrink-0"
                />
                <div className="flex items-center space-x-2 min-w-0 flex-1">
                  <div className="neu-small w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#CA2030] to-[#d4471f] text-black font-semibold text-xs flex-shrink-0">
                    {record.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[#333333] text-sm truncate">{record.employee}</div>
                    <div className="text-[#666666] text-xs">{record.employeeId}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1 flex-shrink-0">
                <button className="neu-small p-1.5 rounded-lg hover:text-[#CA2030] hover:shadow-md transition-all">
                  <Edit3 size={12} />
                </button>
                <button
                  onClick={() => onNavigate("/employee-attendance-profile")}
                  className="neu-small p-1.5 rounded-lg hover:text-[#2C318E] hover:shadow-md transition-all"
                >
                  <Eye size={12} />
                </button>
              </div>
            </div>

            {/* Status and Department */}
            <div className="flex items-center justify-between mb-3">
              {renderStatusBadge(record.status)}
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDepartmentColor(record.department)}`}>
                {record.department}
              </span>
            </div>

            {/* Time Details Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[#666666] block mb-1">Date</span>
                <span className="text-[#333333] font-medium">{record.date}</span>
              </div>
              <div>
                <span className="text-[#666666] block mb-1">Punch In</span>
                <span className="text-[#333333] font-medium">{record.punchIn || "--"}</span>
              </div>
              <div>
                <span className="text-[#666666] block mb-1">Punch Out</span>
                <span className="text-[#333333] font-medium">{record.punchOut || "--"}</span>
              </div>
              <div>
                <span className="text-[#666666] block mb-1">Total Hours</span>
                <span className="text-[#333333] font-bold">{record.totalHours}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[#666666] block mb-1">Overtime</span>
                <span className={`font-bold ${record.overtime !== "0h" ? "text-[#2C318E]" : "text-[#666666]"}`}>
                  {record.overtime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="p-4 sm:p-6 border-t border-[#E8EBEF] bg-gradient-to-r from-[#ECF0F3] to-[#E8EBEF]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-[#666666] text-xs sm:text-sm">
            Showing <span className="font-semibold text-[#333333]">1</span> to{" "}
            <span className="font-semibold text-[#333333]">{filteredRecords.length}</span> of{" "}
            <span className="font-semibold text-[#333333]">{punchRecords.length}</span> entries
          </div>

          <div className="flex items-center justify-center sm:justify-end space-x-1 sm:space-x-2">
            <button className="neu-button px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[#666666] hover:text-[#CA2030] transition-colors text-xs sm:text-sm">
              Previous
            </button>
            <button className="neu-primary px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-md text-xs sm:text-sm">1</button>
            <button className="neu-button px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[#666666] hover:text-[#CA2030] transition-colors text-xs sm:text-sm">
              2
            </button>
            <button className="neu-button px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[#666666] hover:text-[#CA2030] transition-colors text-xs sm:text-sm">
              3
            </button>
            <button className="neu-button px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[#666666] hover:text-[#CA2030] transition-colors text-xs sm:text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
