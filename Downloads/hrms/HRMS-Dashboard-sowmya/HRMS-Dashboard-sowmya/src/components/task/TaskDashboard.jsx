import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckSquare, Clock, AlertCircle, TrendingUp, Users, Folder, Target, Calendar, ArrowUp, ArrowDown, BarChart3, Filter } from 'lucide-react';
import TaskFilters from "./TaskFilters"; // adjust path if needed
import ResourceAllocation from "./ResourceAllocation"; // adjust path
import RecentProjects from './RecentProjects';
import TaskDistribution from './TaskDistribution';

import {
  kpiData,
  taskCompletionTrend,
  resourceAllocation,
  recentProjects,
  tasksByPriority
} from "./data/taskDashboardData";

export const TaskDashboard = () => {
  const navigate = useNavigate();
  const [dateFilter, setDateFilter] = useState('this-month');
  const getStatusColor = (status) => {
    const colors = {
      'on-track': 'bg-green-100 text-green-800',
      'at-risk': 'bg-yellow-100 text-yellow-800',
      'delayed': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': 'bg-red-100 text-red-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-green-100 text-green-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  // Layout: Dashboard Cards + Charts
  return (
    <div className="p-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Task Dashboard</h1>
        <p className="text-[#666666]">Monitor project progress and track team performance</p>
      </div>
      {/* Filters */}
      <TaskFilters dateFilter={dateFilter} setDateFilter={setDateFilter} />
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="neu-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`neu-small p-3 rounded-xl bg-gradient-to-br ${kpi.bgColor}`}>
                  <Icon size={24} className="text-black" />
                </div>
                <div className={`text-xs px-3 py-1 rounded-full font-medium flex items-center ${
                  kpi.changeType === 'positive' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {kpi.changeType === 'positive' ? <ArrowUp size={12} className="mr-1" /> : <ArrowDown size={12} className="mr-1" />}
                  {kpi.change.split(' ')[0]}
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-1 group-hover:scale-105 transition-transform ${kpi.color}`}>
                  {kpi.value}
                </h3>
                <p className="text-[#666666] text-sm">{kpi.title}</p>
                <p className="text-[#888] text-xs mt-1">{kpi.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Task Completion Trend */}
        <div className="neu-card p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#333333]">Task Completion Trend</h2>
            <TrendingUp size={20} className="text-[#CA2030]" />
          </div>
          <div className="h-64 neu-card-inset rounded-xl p-4">
            <div className="h-full flex items-end justify-between space-x-4">
              {taskCompletionTrend.map((week, index) => (
                <div key={week.week} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center mb-2">
                    {/* Target line */}
                    <div className="w-full h-1 bg-gray-300 rounded mb-1" style={{ marginTop: `${240 - (week.target / 60) * 240}px` }}></div>
                    {/* Actual bar */}
                    <div 
                      className="w-full rounded-lg transition-all duration-500 hover:shadow-md"
                      style={{ 
                        height: `${(week.completed / 60) * 240}px`,
                        background: week.completed >= week.target 
                          ? 'linear-gradient(to top, #CA2030, #d4471f)' 
                          : 'linear-gradient(to top, #2C318E, #048ba8)'
                      }}
                    ></div>
                    <div className="text-xs font-medium mt-2" style={{
                      color: week.completed >= week.target ? '#CA2030' : '#2C318E'
                    }}>
                      {week.completed}
                    </div>
                  </div>
                  <div className="text-[#666666] text-xs font-medium">{week.week}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-[#CA2030] to-[#d4471f] mr-2"></div>
              <span className="text-sm text-[#666666]">Above Target</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-[#2C318E] to-[#048ba8] mr-2"></div>
              <span className="text-sm text-[#666666]">Below Target</span>
            </div>
          </div>
        </div>
        {/* Resource Allocation */}
       <ResourceAllocation resourceAllocation={resourceAllocation} />
      </div>
      {/* Recent Projects and Task Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Projects */}
       <RecentProjects
          recentProjects={recentProjects}
          navigate={navigate}
          getStatusColor={getStatusColor}
          getPriorityColor={getPriorityColor}
        />
        {/* Task Distribution */}
       <TaskDistribution
        tasksByPriority={tasksByPriority}
        navigate={navigate}
      />
      </div>
    </div>
  );
};