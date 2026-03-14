// In payrollprocess.jsx
import React, { useState, useMemo } from 'react';
import PayrollCards from './PayrollCards';
import ButtonBottom from './ButtonBottom';
import PayrollTable from './PayrollTable';
import DropdownPayroll from './DropdownPayroll';
import { payrollData } from './payrollData';

const PayrollProcess = () => {
  const [viewMode, setViewMode] = useState('All Employees');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  // Departments for the dropdown
  const departments = ['HR', 'Marketing', 'Sales', 'Design',];
  // Status options
  const statusOptions = ['Processed', 'Draft', 'Hold'];
  // Filter function
  const filteredData = useMemo(() => {
    return payrollData.filter(employee => {
      // Filter by search term (name or ID)
      const matchesSearch = !searchTerm || 
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        employee.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by department
      const matchesDepartment = selectedDepartment === 'all' || 
        employee.department === selectedDepartment;
      
      // Filter by status
      const matchesStatus = selectedStatus === 'all' || 
        employee.status === selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [searchTerm, selectedDepartment, selectedStatus]);

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      <div className="neu-card p-4 sm:p-6 md:p-8 rounded-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className='mb-4 sm:mb-0'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-1 sm:mb-2">Payroll Process</h1>
            <p className="text-[#666666] text-sm sm:text-base md:text-lg">Track new employee payroll progress and metrics</p>
          </div>
        </div>
       
      
      </div>
       <PayrollCards />
       
        <div className="mt-6">
          <ButtonBottom viewMode={viewMode} setViewMode={setViewMode} />
        </div>
         <DropdownPayroll 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          departments={departments}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          dateRange={dateRange}
          setDateRange={setDateRange}
          statusOptions={statusOptions}
        />
      <PayrollTable data={filteredData} />
    </div>
  );
};

export default PayrollProcess;
