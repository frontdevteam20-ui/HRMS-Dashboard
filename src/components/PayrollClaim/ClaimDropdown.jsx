import React, { useState } from 'react';
import { Search, ChevronDown, Calendar, Download, FileText, FileSpreadsheet, FileType } from 'lucide-react';
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);
const ClaimDropdown = ({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  departments = [],
  selectedStatus,
  setSelectedStatus,
  dateRange,
  setDateRange
}) => {
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleMonthSelect = (monthIndex) => {
    setSelectedMonth(monthIndex);
    setShowMonthPicker(false);
    // You can update the dateRange state with the selected month and year
    const startDate = new Date(selectedYear, monthIndex, 1);
    const endDate = new Date(selectedYear, monthIndex + 1, 0);
    setDateRange({ startDate, endDate });
  };
  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    setSelectedYear(year);
  };

  // Function to handle download option selection
  const handleDownload = (format) => {
    console.log(`Downloading in ${format} format`);
    // Add your download logic here
  };

  return (
    <div className="neu-card p-6 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
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
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Engineering">Engineering</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-4 h-4" />
          </div>
        </div>

        {/* Month Picker */}
        <div className="relative">
          <div
            className="neu-input p-4 rounded-2xl flex items-center justify-between cursor-pointer"
            onClick={() => setShowMonthPicker(!showMonthPicker)}
          >
            <div className="flex items-center gap-2">
              <Calendar className="text-[#666666]" size={18} />
              <span className="text-[#333333]">
                {months[selectedMonth]} {selectedYear}
              </span>
            </div>
            <ChevronDown className={`text-[#666666] w-4 h-4 transition-transform ${showMonthPicker ? 'rotate-180' : ''}`} />
          </div>

          {showMonthPicker && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-4">
              <div className="flex justify-between items-center mb-2">
                <select
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="border rounded p-1 text-sm"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {months.map((month, index) => (
                  <button
                    key={month}
                    className={`p-2 text-sm rounded hover:bg-gray-100 ${selectedMonth === index ? 'bg-blue-100 text-blue-600' : ''
                      }`}
                    onClick={() => handleMonthSelect(index)}
                  >
                    {month.substring(0, 3)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

   

        {/* Download Dropdown */}
        <div className="relative">
          <div className="neu-input p-4 rounded-2xl relative group">
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <Download className="text-[#666666]" size={18} />
                <span className="text-[#333333]">Download</span>
              </div>
              <ChevronDown className="text-[#666666] w-4 h-4" />
            </div>
            
            <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 hidden group-hover:block">
              <div className="py-1">
                <button 
                  onClick={() => handleDownload('CSV')}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                                  <FileType className="text-blue-500" size={16} />

                    Download as CSV
                </button>
                <button 
                  onClick={() => handleDownload('PDF')}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                   <FileText className="text-red-500" size={16} />
                  Download as PDF
                </button>
                <button 
                  onClick={() => handleDownload('Excel')}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                                  <FileSpreadsheet className="text-green-600" size={16} />

                  Download as Excel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimDropdown;