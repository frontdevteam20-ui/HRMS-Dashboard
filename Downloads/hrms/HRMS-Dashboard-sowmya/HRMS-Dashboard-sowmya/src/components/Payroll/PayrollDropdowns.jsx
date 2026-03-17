// src/components/Payroll/PayrollDropdowns.jsx
import React, { useState, useEffect } from "react";
import { ChevronDown, Search, Download, Calendar, FileText, FileSpreadsheet, FileType } from "lucide-react";
import { fetchEmployeesMonthlySummary, fetchEmployeesMonthlySummaryByMonth } from './api';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);

const PayrollDropdowns = ({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  dateRange,
  setDateRange,
  filteredEmployees = [],
  loading = false,
  viewMode = 'Quick Attendance Overview'
}) => {
  // State for dropdown visibility
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Function to load employees for specific month
  const loadEmployeesForMonth = async (month, year) => {
    // Update dateRange when month changes
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    setDateRange({ startDate, endDate });
  };

  // Handle month selection
  const handleMonthSelect = (monthIndex) => {
    setSelectedMonth(monthIndex);
    setShowMonthPicker(false);
    loadEmployeesForMonth(monthIndex, selectedYear);
  };

  // Handle year change
  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    setSelectedYear(year);
    loadEmployeesForMonth(selectedMonth, year);
  };

  // Get unique departments from filtered employee data
  const availableDepartments = [...new Set(filteredEmployees.map(emp => emp.department))];

  const generateCSV = () => {
    console.log('Generating CSV with employees:', filteredEmployees);
    console.log('Date range:', dateRange);
    
    if (!filteredEmployees || filteredEmployees.length === 0) {
      console.warn('No employees to export');
      return '';
    }
    
    const headers = ['Employee Name', 'Employee ID', 'Department', 'Present', 'Absent/LOP', 'Leaves', 'Working Days'];
    const rows = filteredEmployees.map(employee => [
      employee.name,
      employee.empId,
      employee.department,
      employee.present,
      employee.absentLop,
      employee.leaves,
      employee.workingDays
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
    
    console.log('Generated CSV content length:', csvContent.length);
    return csvContent;
  };

  const generateExcelCSV = () => {
    const csvContent = generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `attendance_${selectedYear}_${months[selectedMonth]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generatePDF = () => {
    console.log('=== PDF GENERATION DEBUG ===');
    console.log('Generating PDF with employees:', filteredEmployees);
    console.log('Date range:', dateRange);
    console.log('View mode:', viewMode);
    console.log('filteredEmployees length:', filteredEmployees?.length);
    console.log('filteredEmployees data:', filteredEmployees);
    
    const employeesToUse = filteredEmployees || [];
    
    if (employeesToUse.length === 0) {
      console.warn('❌ No employee data available for PDF');
      console.warn('❌ filteredEmployees is empty:', filteredEmployees);
      alert('No employee data available. Please check your filters or try selecting a different month.');
      return;
    }
    
    console.log('✅ Using employees for PDF:', employeesToUse);
    
    let htmlContent = '';
    
    if (viewMode === 'Quick Attendance Overview') {
      console.log('🟢 GENERATING ATTENDANCE DOTS PDF (Quick Attendance Overview)');
      const daysInMonth = dateRange?.endDate?.getDate() || 30;
      const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      
      let dayHeaders = '';
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(dateRange.startDate.getFullYear(), dateRange.startDate.getMonth(), day);
        const dayIndex = date.getDay();
        dayHeaders += `<th class="text-xs p-1 border border-gray-300" style="font-size: 10px; padding: 2px;">${day}<br><span style="color: #666;">${dayLabels[dayIndex]}</span></th>`;
      }
      
      const employeeAttendanceRows = employeesToUse.map((employee, index) => {
        console.log('🔍 Processing employee for PDF:', employee.name);
        console.log('🔍 Employee attendance data:', employee.attendance);
        
        const attendanceData = employee.attendance || [];
        let attendanceDots = '';
        
        const daysInMonth = dateRange?.endDate?.getDate() || 30;
        console.log('🔍 Days in month:', daysInMonth);
        console.log('🔍 Attendance data length:', attendanceData.length);
        
        for (let day = 1; day <= daysInMonth; day++) {
          const status = day <= attendanceData.length ? attendanceData[day - 1] : 'empty';
          const statusText = {
            present: 'PT',
            absent: 'AB',
            late: 'Late',
            leave: 'LV',
            holiday: 'Hol',
            weekOff: 'WO',
            remote: 'RM',
            empty: '-'
          };
          const text = statusText[status] || '-';
          
          attendanceDots += 
            '<td class="text-xs p-1 border border-gray-300" style="font-size: 10px; padding: 2px; text-align: center; font-weight: bold;">' +
              text +
            '</td>';
        }
        
        const row = 
          '<tr style="background-color: ' + (index % 2 === 0 ? 'white' : '#F9FCFF') + ';">' +
          '<td class="employee-info" style="text-align: left; font-weight: bold; background-color: #f8f9fa;">' +
            employee.name + '<br>' +
            '<span style="font-size: 10px; color: #666;">' + employee.empId + ' | ' + employee.department + '</span>' +
          '</td>' +
          attendanceDots +
          '</tr>';
          
        console.log('🔍 Generated row for', employee.name, ':', row.substring(0, 100) + '...');
        return row;
      });
      
      console.log('🔍 Final employeeAttendanceRows:', employeeAttendanceRows);
      console.log('🔍 employeeAttendanceRows joined:', employeeAttendanceRows.join(''));
      
      htmlContent = 
        '<!DOCTYPE html>' +
        '<html>' +
          '<head>' +
            '<title>Attendance Report</title>' +
            '<style>' +
              '@media print {' +
                'body { margin: 0.5in; padding: 0; }' +
                '@page { margin: 0.5in; size: A4; orientation: landscape; }' +
                '.no-print { display: none !important; }' +
              '}' +
              'body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.2; -webkit-print-color-adjust: exact; print-color-adjust: exact; }' +
              '.header { display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #00AEEF; }' +
              '.logo-container { width: 120px; height: 80px; margin-right: 20px; display: flex; align-items: center; justify-content: center; }' +
              '.company-info { text-align: left; flex: 1; }' +
              '.company-name { font-size: 24px; font-weight: bold; color: #333; margin-bottom: 5px; }' +
              '.report-title { font-size: 18px; color: #666; margin-bottom: 5px; }' +
              '.report-period { font-size: 14px; color: #999; }' +
              '.report-meta { font-size: 12px; color: #999; margin-top: 5px; }' +
              'table { border-collapse: collapse; width: 100%; margin: 20px 0; font-size: 11px; }' +
              'th, td { border: 1px solid #ddd; padding: 4px; text-align: center; vertical-align: middle; }' +
              'th { background-color: #00AEEF; color: white; font-weight: bold; }' +
              '.employee-info { text-align: left; font-weight: bold; background-color: #f8f9fa; }' +
              '.footer { margin-top: 20px; text-align: center; font-size: 10px; color: #666; }' +
            '</style>' +
          '</head>' +
          '<body>' +
            '<div class="header">' +
              '<div class="logo-container">' +
                '<img src="/src/assets/logo.webp" alt="HRMS Logo" class="w-full h-full object-contain" style="width: 100%; height: 100%; object-fit: contain;">' +
              '</div>' +
              '<div class="company-info">' +
                '<div class="company-name">HRMS - Human Resource Management System</div>' +
                '<div class="report-title">Monthly Attendance Report</div>' +
                '<div class="report-period">' + months[selectedMonth] + ' ' + selectedYear + '</div>' +
                '<div class="report-meta">Generated on: ' + new Date().toLocaleDateString() + ' | Total Employees: ' + employeesToUse.length + '</div>' +
              '</div>' +
            '</div>' +
            '<table>' +
              '<thead>' +
                '<tr>' +
                  '<th rowspan="2" style="vertical-align: middle;">Employee Details</th>' +
                  '<th colspan="' + daysInMonth + '" style="text-align: center;">' + months[selectedMonth] + ' ' + selectedYear + '</th>' +
                '</tr>' +
                '<tr>' +
                  dayHeaders +
                '</tr>' +
              '</thead>' +
              '<tbody>' +
                employeeAttendanceRows +
              '</tbody>' +
            '</table>' +
            '<div class="footer">' +
              '<p> 2024 HRMS - Human Resource Management System | Confidential Document</p>' +
              '<p>This document contains sensitive employee information and should be handled accordingly.</p>' +
            '</div>' +
          '</body>' +
        '</html>';
    } else if (viewMode === 'Attendance Chart') {
      console.log('🟦 GENERATING SUMMARY CARDS PDF (Attendance Chart)');
      
      let totalPresent = 0;
      let totalAbsent = 0;
      let totalLeaves = 0;
      let totalWorkingDays = 0;
      
      employeesToUse.forEach(employee => {
        const present = employee.present || 0;
        const absent = employee.absentLop || 0;
        const leaves = employee.leaves || 0;
        const workingDays = employee.workingDays || 0;
        
        totalPresent += present;
        totalAbsent += absent;
        totalLeaves += leaves;
        totalWorkingDays += workingDays;
      });
      
      const totalEmployees = employeesToUse.length;
      const avgAttendance = totalWorkingDays > 0 ? ((totalWorkingDays / (totalEmployees * 30)) * 100).toFixed(1) : 0;
      
      const employeeRows = employeesToUse.map((employee, index) => {
        console.log('🔍 Processing employee for Summary PDF:', employee.name);
        console.log('🔍 Employee data:', employee);
        
        const present = employee.present || 0;
        const absent = employee.absentLop || 0;
        const leaves = employee.leaves || 0;
        const workingDays = employee.workingDays || 0;
        
        console.log('🔍 Calculated values - Present:', present, 'Absent:', absent, 'Leaves:', leaves, 'Working Days:', workingDays);
        
        const row = 
          '<tr style="background-color: ' + (index % 2 === 0 ? 'white' : '#F9FCFF') + ';">' +
          '<td>' + employee.name + '</td>' +
          '<td>' + employee.empId + '</td>' +
          '<td>' + employee.department + '</td>' +
          '<td>' + present + '</td>' +
          '<td>' + absent + '</td>' +
          '<td>' + leaves + '</td>' +
          '<td>' + workingDays + '</td>' +
          '</tr>';
          
        console.log('🔍 Generated summary row for', employee.name, ':', row.substring(0, 100) + '...');
        return row;
      });
      
      console.log('🔍 Final employeeRows:', employeeRows);
      console.log('🔍 employeeRows joined:', employeeRows.join(''));
      
      htmlContent = 
  '<!DOCTYPE html>' +
  '<html>' +
    '<head>' +
      '<title>Attendance Summary Report</title>' +
      '<style>' +
        '@media print {' +
          'body { margin: 0.5in; padding: 0; }' +
          '@page { margin: 0.5in; size: A4; }' +
          '.no-print { display: none !important; }' +
        '}' +
        'body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.2; -webkit-print-color-adjust: exact; print-color-adjust: exact; }' +
        '.header { display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #00AEEF; }' +
        '.logo-container { width: 120px; height: 80px; margin-right: 20px; display: flex; align-items: center; justify-content: center; }' +
        '.company-info { text-align: left; flex: 1; }' +
        '.company-name { font-size: 24px; font-weight: bold; color: #333; margin-bottom: 5px; }' +
        '.report-title { font-size: 18px; color: #666; margin-bottom: 5px; }' +
        '.report-period { font-size: 14px; color: #999; }' +
        '.report-meta { font-size: 12px; color: #999; margin-top: 5px; }' +
        '.summary-cards { display: flex; justify-content: space-between; margin-bottom: 20px; gap: 20px; }' +
        '.summary-card { flex: 1; padding: 20px; border-radius: 8px; text-align: center; color: white; }' +
        '.summary-card.total { background-color: #9C27B0; }' +
        '.summary-card.lops { background-color: #CA2030; }' +
        '.summary-card.working { background-color: #00AEEF; }' +
        '.summary-card.avg { background-color: #4CAF50; }' +
        '.summary-card .value { font-size: 24px; font-weight: bold; margin-bottom: 5px; }' +
        '.summary-card .subtitle { font-size: 14px; opacity: 0.9; }' +
        'table { border-collapse: collapse; width: 100%; margin: 20px 0; font-size: 12px; }' +
        'th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }' +
        'th { background-color: #f2f2f2; font-weight: bold; }' +
        '.footer { margin-top: 20px; text-align: center; font-size: 10px; color: #666; }' +
      '</style>' +
    '</head>' +
    '<body>' +
      '<div class="header">' +
        '<div class="logo-container">' +
          '<img src="/src/assets/logo.webp" alt="HRMS Logo" class="w-full h-full object-contain" style="width: 100%; height: 100%; object-fit: contain;">' +
        '</div>' +
        '<div class="company-info">' +
          '<div class="company-name">HRMS - Human Resource Management System</div>' +
          '<div class="report-title">Attendance Summary Report</div>' +
          '<div class="report-period">' + months[selectedMonth] + ' ' + selectedYear + '</div>' +
          '<div class="report-meta">Generated on: ' + new Date().toLocaleDateString() + ' | Total Employees: ' + totalEmployees + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="summary-cards">' +
        '<div class="summary-card total">' +
          '<div class="value">' + totalEmployees + '</div>' +
          '<div class="subtitle">Total Employees</div>' +
        '</div>' +
        '<div class="summary-card lops">' +
          '<div class="value">' + totalAbsent + '</div>' +
          '<div class="subtitle">Total Absent</div>' +
        '</div>' +
        '<div class="summary-card working">' +
          '<div class="value">' + totalWorkingDays + '</div>' +
          '<div class="subtitle">Working Days</div>' +
        '</div>' +
        '<div class="summary-card avg">' +
          '<div class="value">' + avgAttendance + '%</div>' +
          '<div class="subtitle">Average Rate</div>' +
        '</div>' +
      '</div>' +
      '<table>' +
        '<thead>' +
          '<tr>' +
            '<th colspan="3" style="text-align: center; background-color: #E8F7FF; color: #333333;">Employee Details</th>' +
            '<th colspan="4" style="text-align: center; background-color: #E8F7FF; color: #333333;">Attendance Summary</th>' +
          '</tr>' +
          '<tr style="background-color: #F5FFFE; color: #555555;">' +
            '<th>Employee Name</th>' +
            '<th>Employee ID</th>' +
            '<th>Department</th>' +
            '<th>Present</th>' +
            '<th>Absent</th>' +
            '<th>Leaves</th>' +
            '<th>Working Days</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody>' +
          employeeRows +
        '</tbody>' +
      '</table>' +
      '<div class="footer">' +
        '<p> 2024 HRMS - Human Resource Management System | Confidential Document</p>' +
        '<p>This document contains sensitive employee information and should be handled accordingly.</p>' +
      '</div>' +
    '</body>' +
  '</html>';
    }
    
    console.log('Generated PDF for view mode:', viewMode);
    
    const printWindow = window.open('', '_blank', 'width=1200,height=800');
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  const handleDownload = (format) => {
    switch(format) {
      case 'CSV':
        generateExcelCSV();
        break;
      case 'Excel':
        generateExcelCSV();
        break;
      case 'PDF':
        generatePDF();
        break;
      default:
        console.log(`Downloading in ${format} format`);
    }
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
              placeholder="Search employees by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[#333333] placeholder-[#999999]"
            />
          </div>
        </div>

        {/* Department Filter */}
        <div className="relative">
          <div 
            className="neu-input p-4 rounded-2xl flex items-center justify-between cursor-pointer"
            onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
          >
            <div className="flex items-center gap-2">
              <Search className="text-[#666666]" size={18} />
              <span className="text-[#333333]">
                {selectedDepartment === 'all' ? 'All Departments' : selectedDepartment}
              </span>
            </div>
            <ChevronDown className={`text-[#666666] w-4 h-4 transition-transform ${showDepartmentDropdown ? 'rotate-180' : ''}`} />
          </div>
          
          {showDepartmentDropdown && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-2">
              <button 
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                onClick={() => {
                  setSelectedDepartment('all');
                  setShowDepartmentDropdown(false);
                }}
              >
                All Departments
              </button>
              {availableDepartments.map((dept) => (
                <button
                  key={dept}
                  className={`w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm ${
                    selectedDepartment === dept ? 'bg-blue-100 text-blue-600' : ''
                  }`}
                  onClick={() => {
                    setSelectedDepartment(dept);
                    setShowDepartmentDropdown(false);
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          )}
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
                {months[selectedMonth].substring(0, 3)}, {selectedYear}
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

export default PayrollDropdowns;