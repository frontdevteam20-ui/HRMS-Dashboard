import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HistoryTable from './HistoryTable';
import HistoryDropdown from './HistoryDropdown';
import { defaultHistory } from './SalaryData';

const PayrollHistory = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [dateRange, setDateRange] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Get unique departments from the data
  const departments = useMemo(() => {
    const depts = new Set(defaultHistory.map(emp => emp.department));
    return ['All Departments', ...Array.from(depts)];
  }, []);

  // Filter employees based on selected filters
  const filteredEmployees = useMemo(() => {
    return defaultHistory.filter(emp => {
      const matchesSearch = 
        searchTerm === '' || 
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        emp.empId.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDept = 
        selectedDepartment === 'All Departments' || 
        selectedDepartment === 'all' || 
        emp.department === selectedDepartment;
      
      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDepartment]);

  const handleDownloadPayslip = (employee) => {
    // Implement download functionality here
    console.log('Downloading payslip for:', employee.name);
  };

  return (
    <div className="p-8 bg-[#FDFAFA] min-h-screen">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="neu-small p-2 rounded-xl hover:text-[#CA2030] transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Payroll History</h1>
          </div>
        </div>
        
        <HistoryDropdown
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          departments={departments}
          dateRange={dateRange}
          setDateRange={setDateRange}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      
        <HistoryTable 
          data={filteredEmployees} 
          onDownloadPayslip={handleDownloadPayslip} 
        />
      </div>
    </div>
  );
};

export default PayrollHistory;