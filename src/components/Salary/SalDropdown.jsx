import React, { useState } from 'react';
import { Search, ChevronDown, Download, Calendar, FileText, FileSpreadsheet, FileType } from 'lucide-react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);

const SalDropdown = ({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  selectedStatus,
  setSelectedStatus,
  dateRange,
  setDateRange,
  departments = [],
}) => {
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  const handleMonthSelect = (monthIndex) => {
    setSelectedMonth(monthIndex);
    setShowMonthPicker(false);
    // Update the dateRange state with the selected month and year
    const startDate = new Date(selectedYear, monthIndex, 1);
    const endDate = new Date(selectedYear, monthIndex + 1, 0);
    setDateRange({ startDate, endDate });
  };

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    setSelectedYear(year);
  };

  const handleDownload = (format) => {
    // TODO: Implement download functionality
    console.log(`Downloading salary data in ${format} format`);
    setShowDownloadMenu(false);
  };

  return (
    <div className="neu-card p-6 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Search */}
        <div className="md:col-span-2">
          <div className="neu-input p-4 rounded-2xl flex items-center">
            <Search className="text-[#666666] mr-3" size={20} />
            <input
              type="text"
              placeholder="Search meetings by title or organizer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[#333333] placeholder-[#999999]"
            />
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
                    className={`p-2 text-sm rounded hover:bg-gray-100 ${
                      selectedMonth === index ? 'bg-blue-100 text-blue-600' : ''
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

        {/* Department Filter */}
        <div>
          <div className="neu-input p-4 rounded-2xl relative">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333] appearance-none"
            >
              <option value="all">All Departments</option>
              <option value="IT">IT</option>
              <option value="Analytics">Analytics</option>
              <option value="Design">Design</option>
              <option value="HR">HR</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-4 h-4" />
          </div>
        </div>


        {/* Download Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowDownloadMenu(!showDownloadMenu)}
            className="neu-input p-4 rounded-2xl flex items-center justify-between w-full h-full hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Download className="text-[#666666]" size={18} />
              <span className="text-[#333333]">Download</span>
            </div>
            <ChevronDown className={`text-[#666666] w-4 h-4 transition-transform ${showDownloadMenu ? 'rotate-180' : ''}`} />
          </button>
          
          {showDownloadMenu && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <button 
                onClick={() => handleDownload('PDF')}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-2 text-[#333333]"
              >
                <FileText className="text-red-500" size={16} />
                <span>Download as PDF</span>
              </button>
              <button 
                onClick={() => handleDownload('Excel')}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-2 text-[#333333] border-t border-gray-100"
              >
                <FileSpreadsheet className="text-green-600" size={16} />
                <span>Download as Excel</span>
              </button>
              <button 
                onClick={() => handleDownload('CSV')}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-2 text-[#333333] border-t border-gray-100"
              >
                <FileType className="text-blue-500" size={16} />
                <span>Download as CSV</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalDropdown;