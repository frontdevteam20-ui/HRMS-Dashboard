import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, TrendingUp, User, Download, Filter, Calendar, DollarSign, BarChart3, ChevronUp, ChevronDown } from 'lucide-react';
import { OvertimeTable } from '../OverTime/OvertimeTable';
import { TrendAnalysisChart } from '../OverTime/TrendAnalysisChart';
import { DepartmentBreakdownChart } from '../OverTime/DepartmentBreakdownChart';
import { overtimeData, departmentSummary, monthlyTrend } from '../OverTime/overtimeData';
import { OvertimeSummary } from '../OverTime/OvertimeSummary';
export const OvertimeHours = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState('this-month');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [sortBy, setSortBy] = useState('hours');
  const [sortOrder, setSortOrder] = useState('desc');
  const filteredData = overtimeData.filter(emp => 
    departmentFilter === 'all' || emp.department === departmentFilter
  );

  const sortedData = [...filteredData].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'hours':
        comparison = a.overtimeHours - b.overtimeHours;
        break;
      case 'cost':
        comparison = a.totalOvertimePay - b.totalOvertimePay;
        break;
      case 'name':
        comparison = a.employee.localeCompare(b.employee);
        break;
      default:
        comparison = 0;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const totalOvertimeHours = filteredData.reduce((sum, emp) => sum + emp.overtimeHours, 0);
  const totalOvertimeCost = filteredData.reduce((sum, emp) => sum + emp.totalOvertimePay, 0);
  const averageOvertimePerEmployee = totalOvertimeHours / (filteredData.length || 1);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <ChevronUp size={16} className="text-[#CA2030]" />;
      case 'down': return <ChevronDown size={16} className="text-green-600" />;
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
    }
  };

  const getDepartmentColor = (department) => {
    const colors = {
      'IT': 'bg-[#CA2030]',
      'HR': 'bg-[#2C318E]',
      'Support': 'bg-purple-500',
      'Development': 'bg-green-500',
      'Operations': 'bg-yellow-500'
    };
    return colors[department] || 'bg-gray-500';
  };

  // Layout: Split (Charts on Top, Table Below)
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Overtime & Working Hours</h1>
        <p className="text-[#666666]">Track overtime costs and analyze working hour patterns</p>
      </div>
      {/* Filters Section */}
      <div className="neu-card p-6 rounded-2xl mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <select 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="neu-input pl-4 pr-8 py-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all appearance-none"
              >
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
                <option value="last-month">Last Month</option>
                <option value="this-quarter">This Quarter</option>
                <option value="custom">Custom Range</option>
              </select>
              <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select 
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="neu-input pl-4 pr-8 py-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all appearance-none"
              >
                <option value="all">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Support">Support</option>
                <option value="Development">Development</option>
                <option value="Operations">Operations</option>
              </select>
              <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select 
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [field, order] = e.target.value.split('-');
                  setSortBy(field);
                  setSortOrder(order);
                }}
                className="neu-input pl-4 pr-8 py-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all appearance-none"
              >
                <option value="hours-desc">Hours (High to Low)</option>
                <option value="hours-asc">Hours (Low to High)</option>
                <option value="cost-desc">Cost (High to Low)</option>
                <option value="cost-asc">Cost (Low to High)</option>
                <option value="name-asc">Name (A to Z)</option>
              </select>
              <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="neu-button px-6 py-3 rounded-xl flex items-center hover:text-[#CA2030] transition-colors">
              <Download size={16} className="mr-2" />
              Export Report
            </button>
            <button 
              onClick={() => navigate('/view-analytics')}
              className="neu-primary px-6 py-3 rounded-xl flex items-center hover:shadow-xl transition-all"
            >
              <BarChart3 size={16} className="mr-2" />
              View Analytics
            </button>
          </div>
        </div>
      </div>
      {/* TOP SECTION - CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Summary Cards */}
       <OvertimeSummary 
          totalHours={totalOvertimeHours} 
          totalCost={totalOvertimeCost} 
          averagePerEmployee={averageOvertimePerEmployee} 
        />
        {/* Department Breakdown Chart */}
      <DepartmentBreakdownChart departmentSummary={departmentSummary} />
        {/* Trend Analysis Chart */}
        <TrendAnalysisChart monthlyTrend={monthlyTrend} />
      </div>
      {/* BOTTOM SECTION - DETAILED TABLE */}
     <OvertimeTable
      data={sortedData} 
      getDepartmentColor={getDepartmentColor} 
    />
    </div>
  );
};