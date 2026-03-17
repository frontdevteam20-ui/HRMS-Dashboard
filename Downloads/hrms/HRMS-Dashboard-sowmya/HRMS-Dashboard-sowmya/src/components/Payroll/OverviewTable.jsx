import React, { useState, useEffect } from 'react';
import PayrollDropdowns from './PayrollDropdowns';
import SummaryCards from './SummaryCards';
import { fetchEmployeesMonthlySummaryByMonth } from './api';

const OverviewTable = ({ viewMode, setViewMode }) => {
  // State for employee data from API
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
  });

  // Fetch employee data from API
  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        const currentMonth = dateRange.startDate.getMonth();
        const currentYear = dateRange.startDate.getFullYear();
        const data = await fetchEmployeesMonthlySummaryByMonth(currentMonth, currentYear);
        setEmployees(data);
        console.log('📊 OverviewTable - API Employees:', data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, [dateRange]);

  // Apply filters - use same filters for both tabs
  const currentSearchTerm = searchTerm;
  const currentSelectedDepartment = selectedDepartment;
  const currentDateRange = dateRange;

  // Filter employees based on search and department
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = currentSearchTerm === '' || 
      employee.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
      employee.empId.toLowerCase().includes(currentSearchTerm.toLowerCase());
    
    const matchesDepartment = currentSelectedDepartment === 'all' || 
      employee.department === currentSelectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  // Debug logging to check data flow
  console.log('OverviewTable - filteredEmployees:', filteredEmployees.length);
  console.log('OverviewTable - employees from API:', employees.length);

  return (
    <>
      <SummaryCards filteredEmployees={filteredEmployees} loading={loading} />

      {/* Filter bar */}
      <PayrollDropdowns
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        dateRange={dateRange}
        setDateRange={setDateRange}
        filteredEmployees={filteredEmployees}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <div className="neu-card rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#E8F7FF] text-[#333333]">
                <th
                  colSpan={3}
                  className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-left border-r border-[#D5F0FF]"
                >
                  Employee Details
                </th>
                <th
                  colSpan={4}
                  className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-left"
                >
                  Attendance Summary
                </th>
              </tr>
              <tr className="bg-[#F5FFFE] text-[#555555] border-b border-[#D5F0FF]">
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">EMP Name</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">EMP ID</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">Department</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">Present</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">
                  Absent/LOP
                </th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">Leaves</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">
                  Working Days
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr
                  key={employee.id}
                  className={
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFF]'
                  }
                >
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#333333]">
                    {employee.name}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#555555]">
                    {employee.empId}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#555555]">
                    {employee.department}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#2E7D32] font-medium">
                    {employee.present}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#C62828] font-medium">
                    {employee.absentLop}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#FB8C00] font-medium">
                    {employee.leaves}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium">
                    {employee.workingDays}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OverviewTable;