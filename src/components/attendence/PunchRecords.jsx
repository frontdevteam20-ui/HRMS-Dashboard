import React, { useState } from 'react';
import { Search, Filter, Download, Clock, Edit3, AlertCircle, CheckCircle, Calendar, Eye, MoreHorizontal } from 'lucide-react';
import { EmployeePunchTable } from '../PunchInRecords/EmployeePunchTable';
import { SummaryCards } from '../PunchInRecords/SummaryCards';
import { punchRecords } from '../PunchInRecords/punchRecordsData';

export const PunchRecords = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('today');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [showActions, setShowActions] = useState(null);


  const handleSelectRecord = (recordId) => {
    setSelectedRecords(prev => 
      prev.includes(recordId) 
        ? prev.filter(id => id !== recordId)
        : [...prev, recordId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRecords.length === filteredRecords.length) {
      setSelectedRecords([]);
    } else {
      setSelectedRecords(filteredRecords.map(record => record.id));
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      complete: { 
        color: 'bg-green-100 text-green-800 border border-green-200', 
        icon: CheckCircle, 
        label: 'Complete' 
      },
      late: { 
        color: 'bg-orange-100 text-orange-800 border border-orange-200', 
        icon: AlertCircle, 
        label: 'Late' 
      },
      incomplete: { 
        color: 'bg-yellow-100 text-yellow-800 border border-yellow-200', 
        icon: Clock, 
        label: 'Incomplete' 
      },
      absent: { 
        color: 'bg-red-100 text-red-800 border border-red-200', 
        icon: AlertCircle, 
        label: 'Absent' 
      }
    };
    
    const badge = badges[status];
    const Icon = badge.icon;
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        <Icon size={12} className="mr-1" />
        {badge.label}
      </span>
    );
  };

  const getDepartmentColor = (department) => {
    const colors = {
      'IT': 'bg-[#CA2030] text-white',
      'HR': 'bg-[#2C318E] text-white',
      'Support': 'bg-purple-500 text-white',
      'Design': 'bg-pink-500 text-white',
      'Development': 'bg-green-500 text-white',
      'Marketing': 'bg-yellow-500 text-white'
    };
    return colors[department] || 'bg-gray-500 text-white';
  };

  const filteredRecords = punchRecords.filter(record => {
    const matchesSearch = record.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || record.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Layout: Interactive Table with Action Buttons and Enhanced Cards
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Punch In/Out Records</h1>
        <p className="text-[#666666]">Comprehensive time tracking with detailed employee records</p>
      </div>
      {/* Summary Cards */}
     <SummaryCards />
      {/* Enhanced Filters Section */}
      <div className="neu-card p-6 rounded-2xl mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left side - Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Enhanced Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-4 top-3.5 text-[#CA2030]" />
              <input
                type="text"
                placeholder="Search by name or employee ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 neu-input rounded-xl text-[#333333] placeholder-[#666666] focus:ring-2 focus:ring-[#CA2030] transition-all"
              />
            </div>

            {/* Date Filter */}
            <div className="relative">
              <select 
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="neu-input pl-4 pr-8 py-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all appearance-none"
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="this-week">This Week</option>
                <option value="last-week">Last Week</option>
                <option value="this-month">This Month</option>
                <option value="custom">Custom Range</option>
              </select>
              <div className="absolute right-3 top-[65%] -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="neu-input pl-4 pr-8 py-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all appearance-none"
              >
                <option value="all">All Status</option>
                <option value="complete">Complete</option>
                <option value="late">Late</option>
                <option value="incomplete">Incomplete</option>
                <option value="absent">Absent</option>
              </select>
              <div className="absolute right-3 top-[65%] -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex gap-3">
            <button className="neu-button px-6 py-3 rounded-xl flex items-center hover:text-[#CA2030] transition-colors">
              <Download size={16} className="mr-2" />
              Export
            </button>
            <button className="neu-primary px-6 py-3 rounded-xl flex items-center hover:shadow-lg transition-all">
              <Edit3 size={16} className="mr-2" />
              Bulk Actions
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Records Table */}
            <EmployeePunchTable
            filteredRecords={filteredRecords}
            selectedRecords={selectedRecords}
            handleSelectRecord={handleSelectRecord}
            handleSelectAll={handleSelectAll}
            onNavigate={onNavigate}
            showActions={showActions}
            setShowActions={setShowActions}
            punchRecords={punchRecords}
            getStatusBadge={getStatusBadge}
            getDepartmentColor={getDepartmentColor}
          />
    </div>
  );
};