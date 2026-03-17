// In DropdownPayroll.jsx
import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const DropdownPayroll = ({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  departments = [],
  selectedStatus,
  setSelectedStatus,
  statusOptions = [],
  dateRange,
  setDateRange
}) => {
  return (
    <div className="neu-card p-6 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Search */}
        <div className="md:col-span-2">
          <div className="neu-input p-4 rounded-2xl flex items-center">
            <Search className="text-[#666666] mr-3" size={20} />
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[#333333] placeholder-[#999999]"
            />
          </div>
        </div>

        {/* Department Filter */}
        <div>
          <div className="neu-input p-4 rounded-2xl relative">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333] appearance-none"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-4 h-4" />
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <div className="neu-input p-4 rounded-2xl relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333] appearance-none"
            >
              <option value="all">Downloads</option>
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-4 h-4" />
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default DropdownPayroll;