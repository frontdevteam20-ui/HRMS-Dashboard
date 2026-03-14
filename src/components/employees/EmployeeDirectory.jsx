import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Grid, List, Eye, Edit, Archive, Phone, Mail, MapPin, Calendar, Users, Download, Plus } from 'lucide-react';
import EmployeeList from './EmployeeList';
import EmployeeGrid from './EmployeeGrid';
import EmployeeStats from './EmployeeStats';
import EmployeeFilters from './EmployeeFilters';
import { employees, departments, statuses } from "./employeeData";

export const EmployeeDirectory = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [employeesData, setEmployeesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use mock data instead of API call
  useEffect(() => {
    try {
      setIsLoading(true);
      setError(null);
      console.log('Loading mock employee data...');
      
      // Simulate loading delay
      setTimeout(() => {
        setEmployeesData(employees);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error loading employee data:', error);
      setError('Failed to load employee data');
      setIsLoading(false);
    }
  }, []);

  const filteredEmployees = employeesData.filter(employee => {
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
        employees={employeesData} 
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
    
    {/* Employee Display */}
    {isLoading ? (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    ) : error ? (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        {error}
      </div>
    ) : viewMode === 'grid' ? (
      <EmployeeGrid 
        employees={sortedEmployees} 
        onQuickAction={handleQuickAction} 
      />
    ) : (
      <EmployeeList 
        employees={sortedEmployees} 
        onQuickAction={handleQuickAction} 
      />
    )}
    </div>
  );
};

export default EmployeeDirectory;