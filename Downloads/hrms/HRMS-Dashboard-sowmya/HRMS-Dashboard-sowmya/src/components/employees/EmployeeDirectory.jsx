import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Grid, List, Eye, Edit, Archive, Phone, Mail, MapPin, Calendar, Users, Download, Plus } from 'lucide-react';
import EmployeeList from './EmployeeList';
import EmployeeGrid from './EmployeeGrid';
import EmployeeStats from './EmployeeStats';
import EmployeeFilters from './EmployeeFilters';
import { departments, statuses } from "./employeeData";

export const EmployeeDirectory = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employees from API
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('Fetching employees from API...');
      const response = await fetch('/api/employees', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('API Response:', result);
        
        if (result.success && Array.isArray(result.data)) {
          console.log(`Successfully fetched ${result.data.length} employees`);
          setEmployees(result.data.map(emp => ({
            ...emp,
            status: 'Active', // Add status since it's required by the UI
            employeeId: `EMP${String(emp.id).padStart(3, '0')}`, // Format employee ID
            joiningDate: emp.joinDate // Map joinDate to joiningDate
          })));
        } else {
          throw new Error('Invalid data format received from server');
        }
      } 
     catch (err) {
  console.error('Error details:', {
    message: err.message,
    name: err.name,
    stack: err.stack
  });
  setError(`Failed to load employee data: ${err.message}`);
}
      
      finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Rest of your component remains the same...
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.designation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.employeeId?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || employee.status === selectedStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return (a.name || '').localeCompare(b.name || '');
      case 'department':
        return (a.department || '').localeCompare(b.department || '');
      case 'joiningDate':
        return new Date(a.joiningDate || 0) - new Date(b.joiningDate || 0);
      default:
        return 0;
    }
  });
  const handleQuickAction = (action, employee) => {
    switch (action) {
      case 'view':
        navigate(`/employee-details`);
        break;
      case 'edit':
        navigate(`/edit-employee`);
        break;
      case 'archive':
        console.log('Archive employee:', employee.id);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-1 sm:mb-2">All Employees Details</h1>
            <p className="text-[#666666] text-sm sm:text-base md:text-lg">Manage and view all employee information</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button 
              onClick={() => navigate('/add-employee')}
              className="neu-primary px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center space-x-2 hover:scale-105 transition-transform w-full sm:w-auto"
            >
              <Plus size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Add Employee</span>
            </button>
            <button className="neu-button px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center space-x-2 w-full sm:w-auto">
              <Download size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Export</span>
            </button>
          </div>
        </div>
        {/* Stats Cards */}
      <EmployeeStats 
        employees={employees} 
        departments={departments} 
      />
      {/* Filters and Search */}
      <EmployeeFilters
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      selectedDepartment={selectedDepartment}
      setSelectedDepartment={setSelectedDepartment}
      selectedStatus={selectedStatus}
      setSelectedStatus={setSelectedStatus}
      sortBy={sortBy}
      setSortBy={setSortBy}
      viewMode={viewMode}
      setViewMode={setViewMode}
      departments={departments}
      statuses={statuses}
    />
      {/* Employee Grid/List */}
      <div className="neu-card p-4 sm:p-6 rounded-3xl">
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#333333]">
            {sortedEmployees.length} Employee{sortedEmployees.length !== 1 ? 's' : ''} Found
          </h3>
        </div>
       {viewMode === 'grid' ? (
      <EmployeeGrid employees={sortedEmployees} onAction={handleQuickAction} />
    ) : (
      <EmployeeList employees={sortedEmployees} onAction={handleQuickAction} />
    )}
      </div>
    </div>
  );
};