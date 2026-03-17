import React, { useState } from 'react';
import { Plus, Users, Clock, CheckCircle, AlertTriangle, Calendar, TrendingDown, FileText, User, UserX, ExternalLink } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ActiveOffboarding from '../OffBoarding/ActiveOffboarding';
import PendingTasks from '../OffBoarding/PendingTasks';
import ExitReasonsAnalysis from '../OffBoarding/ExitReasonsAnalysis';
import DepartmentExitDistribution from '../OffBoarding/DepartmentExitDistribution';
import ExitTrends from '../OffBoarding/ExitTrends';
import KeyMetrics from '../OffBoarding/KeyMetrics';

export const OffboardingDashboard = ({ onNavigate }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  // Mock offboarding data
  const offboardingStats = {
    total: 18,
    inProgress: 6,
    completed: 10,
    pending: 2,
    averageDuration: 8,
    clearanceRate: 94
  };

  const activeOffboarding = [
    {
      id: 1,
      name: 'Michael Rodriguez',
      designation: 'Senior Data Analyst',
      department: 'Analytics',
      lastWorkingDay: '2024-02-15',
      resignationDate: '2024-01-20',
      status: 'In Progress',
      progress: 70,
      stage: 'Asset Return',
      reason: 'Career Growth',
      manager: 'Jennifer Liu',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 2,
      name: 'Susan Garcia',
      designation: 'Marketing Specialist',
      department: 'Marketing',
      lastWorkingDay: '2024-02-28',
      resignationDate: '2024-01-25',
      status: 'In Progress',
      progress: 45,
      stage: 'Documentation',
      reason: 'Relocation',
      manager: 'David Thompson',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 3,
      name: 'Tom Wilson',
      designation: 'UI Designer',
      department: 'Design',
      lastWorkingDay: '2024-02-10',
      resignationDate: '2024-01-15',
      status: 'Completed',
      progress: 100,
      stage: 'Complete',
      reason: 'New Opportunity',
      manager: 'Lisa Anderson',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 4,
      name: 'Rachel Green',
      designation: 'Sales Manager',
      department: 'Sales',
      lastWorkingDay: '2024-03-01',
      resignationDate: '2024-02-01',
      status: 'Pending',
      progress: 25,
      stage: 'Initial Setup',
      reason: 'Personal Reasons',
      manager: 'Mark Davis',
      avatar: '/placeholder-avatar.jpg'
    }
  ];

  const offboardingTrends = [
    { month: 'Aug', exits: 3, completed: 3, duration: 9 },
    { month: 'Sep', exits: 5, completed: 5, duration: 8 },
    { month: 'Oct', exits: 2, completed: 2, duration: 7 },
    { month: 'Nov', exits: 4, completed: 4, duration: 9 },
    { month: 'Dec', exits: 6, completed: 5, duration: 8 },
    { month: 'Jan', exits: 8, completed: 6, duration: 8 }
  ];

  const departmentExits = [
    { department: 'Sales', count: 4, color: '#CA2030' },
    { department: 'Engineering', count: 3, color: '#2C318E' },
    { department: 'Marketing', count: 3, color: '#4CAF50' },
    { department: 'Design', count: 2, color: '#FFC107' },
    { department: 'Analytics', count: 2, color: '#9C27B0' },
    { department: 'HR', count: 1, color: '#FF5722' }
  ];

  const exitReasons = [
    { reason: 'Career Growth', count: 6, percentage: 35 },
    { reason: 'Better Compensation', count: 4, percentage: 24 },
    { reason: 'Work-Life Balance', count: 3, percentage: 18 },
    { reason: 'Relocation', count: 2, percentage: 12 },
    { reason: 'Personal Reasons', count: 2, percentage: 11 }
  ];

  const clearanceTasks = [
    {
      id: 1,
      employee: 'Michael Rodriguez',
      task: 'Return Laptop & Accessories',
      dueDate: '2024-02-14',
      priority: 'High',
      assignee: 'IT Department',
      status: 'pending'
    },
    {
      id: 2,
      employee: 'Susan Garcia',
      task: 'Knowledge Transfer Documentation',
      dueDate: '2024-02-26',
      priority: 'High',
      assignee: 'Manager',
      status: 'in-progress'
    },
    {
      id: 3,
      employee: 'Rachel Green',
      task: 'Client Handover Meeting',
      dueDate: '2024-02-28',
      priority: 'Critical',
      assignee: 'Sales Team',
      status: 'pending'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-700 bg-green-100';
      case 'In Progress': return 'text-blue-700 bg-blue-100';
      case 'Pending': return 'text-yellow-700 bg-yellow-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'text-red-800 bg-red-200';
      case 'High': return 'text-red-700 bg-red-100';
      case 'Medium': return 'text-yellow-700 bg-yellow-100';
      case 'Low': return 'text-green-700 bg-green-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getReasonColor = (reason) => {
    switch (reason) {
      case 'Career Growth': return 'text-blue-700 bg-blue-100';
      case 'Better Compensation': return 'text-green-700 bg-green-100';
      case 'Work-Life Balance': return 'text-purple-700 bg-purple-100';
      case 'Relocation': return 'text-orange-700 bg-orange-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-4xl font-bold text-[#333333] mb-2">Offboarding Dashboard</h1>
            <p className="text-[#666666] text-lg">Track employee exit processes and clearance status</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigate?.('exit-process')}
              className="neu-primary px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center space-x-2 hover:scale-105 transition-transform w-full sm:w-auto"
            >
              <Plus size={20} />
              <span>Start Exit Process</span>
            </button>
            <div className="relative">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="neu-input pl-4 pr-10 py-3 rounded-2xl text-[#333333] appearance-none focus:ring-2 focus:ring-[#05A7CC] transition-all"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
                <option value="365">Last year</option>
              </select>
              <div className="absolute right-3 top-[65%] -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <KeyMetrics offboardingStats={offboardingStats} />

      

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Exit Trends */}
      <ExitTrends offboardingTrends={offboardingTrends} />


        {/* Department Exit Distribution */}
      <DepartmentExitDistribution departmentExits={departmentExits} />

      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Offboarding */}
        <ActiveOffboarding
          data={activeOffboarding} 
          onNavigate={onNavigate} 
          getStatusColor={getStatusColor} 
          getReasonColor={getReasonColor} 
        />
        {/* Pending Tasks */}
      <PendingTasks
    tasks={clearanceTasks} 
    getPriorityColor={getPriorityColor} 
  />
      </div>

      {/* Exit Reasons Analysis */}
      <ExitReasonsAnalysis exitReasons={exitReasons} />

    </div>
  );
};