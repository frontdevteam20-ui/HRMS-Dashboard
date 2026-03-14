import React, { useState } from 'react';
import { Plus, Users, Clock, CheckCircle, AlertTriangle, Calendar, TrendingUp, FileText, User, Award } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { OnboardingTrends } from '../OnBoarding/OnboardingTrends';
import { DepartmentDistribution } from '../OnBoarding/DepartmentDistribution';
import { RecentOnboarding } from '../OnBoarding/RecentOnboarding';
import { UpcomingTasks } from '../OnBoarding/UpcomingTasks';
import { OnboardingStages } from '../OnBoarding/OnboardingStages';

export const OnboardingDashboard = ({ onNavigate }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  // Mock onboarding data
  const onboardingStats = {
    total: 24,
    inProgress: 8,
    completed: 14,
    pending: 2,
    averageDuration: 12,
    completionRate: 87
  };

  const recentOnboarding = [
    {
      id: 1,
      name: 'Alice Johnson',
      designation: 'Frontend Developer',
      department: 'Engineering',
      startDate: '2024-01-15',
      status: 'In Progress',
      progress: 75,
      stage: 'Documentation',
      mentor: 'John Smith',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 2,
      name: 'Bob Wilson',
      designation: 'Product Manager',
      department: 'Product',
      startDate: '2024-01-12',
      status: 'Completed',
      progress: 100,
      stage: 'Complete',
      mentor: 'Sarah Davis',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 3,
      name: 'Carol Brown',
      designation: 'UX Designer',
      department: 'Design',
      startDate: '2024-01-18',
      status: 'In Progress',
      progress: 45,
      stage: 'IT Setup',
      mentor: 'Mike Johnson',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 4,
      name: 'David Miller',
      designation: 'Data Analyst',
      department: 'Analytics',
      startDate: '2024-01-20',
      status: 'Pending',
      progress: 15,
      stage: 'Document Review',
      mentor: 'Lisa Chen',
      avatar: '/placeholder-avatar.jpg'
    }
  ];

  const onboardingTrends = [
    { month: 'Aug', new: 8, completed: 6, duration: 14 },
    { month: 'Sep', new: 12, completed: 10, duration: 13 },
    { month: 'Oct', new: 6, completed: 8, duration: 11 },
    { month: 'Nov', new: 15, completed: 12, duration: 12 },
    { month: 'Dec', new: 10, completed: 9, duration: 10 },
    { month: 'Jan', new: 24, completed: 14, duration: 12 }
  ];

  const departmentOnboarding = [
    { department: 'Engineering', count: 8, color: '#CA2030' },
    { department: 'Sales', count: 5, color: '#2C318E' },
    { department: 'Marketing', count: 4, color: '#4CAF50' },
    { department: 'Design', count: 3, color: '#FFC107' },
    { department: 'Analytics', count: 2, color: '#9C27B0' },
    { department: 'HR', count: 2, color: '#FF5722' }
  ];

  const onboardingStages = [
    { stage: 'Documentation', count: 3, percentage: 25 },
    { stage: 'IT Setup', count: 2, percentage: 17 },
    { stage: 'Training', count: 2, percentage: 17 },
    { stage: 'Mentoring', count: 1, percentage: 8 },
    { stage: 'Completed', count: 4, percentage: 33 }
  ];

  const upcomingTasks = [
    {
      id: 1,
      employee: 'Alice Johnson',
      task: 'Complete IT Security Training',
      dueDate: '2024-01-25',
      priority: 'High',
      assignee: 'IT Department'
    },
    {
      id: 2,
      employee: 'Carol Brown',
      task: 'Design Tools Setup',
      dueDate: '2024-01-26',
      priority: 'Medium',
      assignee: 'Design Team'
    },
    {
      id: 3,
      employee: 'David Miller',
      task: 'Document Verification',
      dueDate: '2024-01-27',
      priority: 'High',
      assignee: 'HR Team'
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
      case 'High': return 'text-red-700 bg-red-100';
      case 'Medium': return 'text-yellow-700 bg-yellow-100';
      case 'Low': return 'text-green-700 bg-green-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className='mb-4 sm:mb-0'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-1 sm:mb-2">Onboarding Dashboard</h1>
            <p className="text-[#666666] text-sm sm:text-base md:text-lg">Track new employee onboarding progress and metrics</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto ">
            <button
              onClick={() => onNavigate?.('onboarding-new')}
              className="neu-primary px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center space-x-2 hover:scale-105 transition-transform w-full sm:w-auto"
            >
              <Plus size={20} />
              <span>Start Onboarding</span>
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div className="neu-card p-6 rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-[#333333]">{onboardingStats.total}</div>
              <div className="text-right ml-2">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 neu-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
                {/* <div className="text-xs sm:text-sm text-[#2C318E] font-medium">+12% from last month</div> */}
              </div>
            </div>
            <div>
              <p className="font-medium text-[#333333] text-sm sm:text-base mb-1">Total Onboarded</p>
              {/* <div className="text-xs text-[#666666]">This year</div> */}
            </div>
          </div>

          <div className="neu-card p-6 rounded-3xl">
            <div className="flex items-center justify-between">
               <div className="text-2xl sm:text-3xl font-bold text-[#333333]">{onboardingStats.inProgress}</div>
              <div className="text-right ml-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 neu-secondary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
                {/* <div className="text-xs sm:text-sm text-[#2C318E] font-medium">In progress</div> */}
              </div>
            </div>
            <div>
              <p className="font-medium text-[#333333] text-sm sm:text-base mb-1">Active Onboarding</p>
              {/* <div className="text-xs text-[#666666]">Currently in process</div> */}
            </div>
          </div>

          <div className="neu-card p-6 rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-[#333333]">{onboardingStats.completionRate}%</div>
              <div className="text-right ml-2">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
                {/* <div className="text-xs sm:text-sm text-[#4CAF50] font-medium">+3% vs last month</div> */}
              </div>
            </div>
            <div>
              <p className="font-medium text-[#333333] text-sm sm:text-base mb-1">Completion Rate</p>
              {/* <div className="text-xs text-[#666666]">Successfully completed</div> */}
            </div>
          </div>

          <div className="neu-card p-6 rounded-3xl">
            <div className="flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-[#333333]">{onboardingStats.averageDuration}</div>
              <div className="text-right ml-2">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
                {/* <div className="text-xs sm:text-sm text-[#4CAF50] font-medium">-2 days improved</div> */}
              </div>
            </div>
            <div>
              <p className="font-medium text-[#333333] text-sm sm:text-base mb-1">Avg. Duration</p>
              {/* <div className="text-xs text-[#666666]">Days to complete</div> */}
            </div>
          </div>
        </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Onboarding Trends */}
        <div className="neu-card p-4 sm:p-6 md:p-8 rounded-3xl">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-1 sm:mb-2">Onboarding Trends</h3>
            <p className="text-sm sm:text-base text-[#666666]">Monthly new hires and completion rate</p>
          </div>
          <OnboardingTrends data={onboardingTrends} />
        </div>

        {/* Department Distribution */}
        <DepartmentDistribution data={departmentOnboarding} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
        {/* Recent Onboarding */}
        <RecentOnboarding
          data={recentOnboarding}
          onNavigate={onNavigate}
          getStatusColor={getStatusColor}
        />
        {/* Upcoming Tasks */}
        <UpcomingTasks
    tasks={upcomingTasks}
    getPriorityColor={getPriorityColor}
  />
      </div>

      {/* Onboarding Stages */}
     <OnboardingStages stages={onboardingStages} />

    </div>
  );
};