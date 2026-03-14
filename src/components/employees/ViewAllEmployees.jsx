import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Eye, Trash2, Mail, Phone, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import EmployeeCard from '../HRDashboard/EmployeeCard';
import employees from '../HRDashboard/employeesData';
import StatsCards from '../HRDashboard/StatsCards';

export const ViewAllEmployees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || emp.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || emp.status === selectedStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

 

  const departments = [...new Set(employees.map(emp => emp.department))];

  return (
    <div className="p-8 space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="neu-card p-8 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#333333] mb-2">All Employees</h1>
            <p className="text-[#666666]">Manage and view all employee information</p>
          </div>
          <button className="neu-primary px-8 py-4 rounded-2xl flex items-center space-x-3 hover:scale-105 transition-transform">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Add Employee</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="neu-card p-6 rounded-3xl mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          {/* Search */}
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CA2030]" size={18} />
              <input
                type="text"
                placeholder="Search by name, email, position, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 neu-input rounded-xl text-[#333333] placeholder-[#666666] focus:ring-2 focus:ring-[#CA2030] transition-all text-sm"
              />
            </div>
          </div>

          {/* Department Filter */}
          <div className="w-full">
            <div className="neu-input p-3 rounded-2xl h-full">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full bg-transparent outline-none text-[#333333] text-sm cursor-pointer"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Status Filter */}
          <div className="w-full">
            <div className="neu-input p-3 rounded-2xl h-full">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-transparent outline-none text-[#333333] text-sm cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="on-leave">On Leave</option>
              </select>
            </div>
          </div>

          {/* Sort Filter */}
          <div className="w-full">
            <div className="neu-input p-3 rounded-2xl h-full">
              <select className="w-full bg-transparent outline-none text-[#333333] text-sm cursor-pointer">
                <option value="name-asc">Sort by Name</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="department">By Department</option>
                <option value="status">By Status</option>
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center space-x-2">
            <button className="p-2 neu-button rounded-xl hover:bg-gray-50">
              <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
            <button className="p-2 neu-button rounded-xl bg-white">
              <svg className="w-5 h-5 text-[#CA2030]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards employees={employees} departments={departments} />
      {/* Employee Table */}
      <div className="neu-card p-8 rounded-3xl">
        <div className="space-y-4">
          {filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />

          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <div className="text-center py-12">
            <div className="neu-card-inset p-8 rounded-3xl inline-block">
              <h3 className="text-xl font-medium text-[#333333] mb-2">No employees found</h3>
              <p className="text-[#666666]">Try adjusting your search filters or add a new employee.</p>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredEmployees.length > 0 && (
        <div className="neu-card p-6 rounded-3xl">
          <div className="flex items-center justify-between">
            <div className="text-[#666666]">
              Showing {filteredEmployees.length} of {employees.length} employees
            </div>
            <div className="flex items-center space-x-2">
              <button className="neu-button px-4 py-2 rounded-xl text-[#666666] hover:text-[#333333]">
                Previous
              </button>
              <div className="neu-card-inset px-4 py-2 rounded-xl">
                <span className="font-medium text-[#333333]">1</span>
              </div>
              <button className="neu-button px-4 py-2 rounded-xl text-[#666666] hover:text-[#333333]">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};