import React, { useState } from 'react';
import { Calendar, Users, Clock, TrendingUp, Download, Filter, BarChart3, PieChart, LineChart } from 'lucide-react';
import { KpiCards } from '../../Reports/KpiCards';
import { MeetingChartsRow1 } from '../../Reports/MeetingChartsRow1';
import { MeetingChartsRow2 } from '../../Reports/MeetingChartsRow2';
import { MeetingInsights } from '../../Reports/MeetingInsights';
import { DepartmentPerformanceTable } from '../../Reports/DepartmentPerformanceTable';

const monthlyMeetingsData = [
  { month: 'Jan', meetings: 45, participants: 320, duration: 1250 },
  { month: 'Feb', meetings: 52, participants: 380, duration: 1480 },
  { month: 'Mar', meetings: 38, participants: 290, duration: 980 },
  { month: 'Apr', meetings: 48, participants: 350, duration: 1320 },
  { month: 'May', meetings: 55, participants: 420, duration: 1650 },
  { month: 'Jun', meetings: 42, participants: 310, duration: 1180 }
];

const departmentParticipationData = [
  { department: 'Engineering', participation: 89, meetings: 28, color: '#2C318E' },
  { department: 'Product', participation: 94, meetings: 22, color: '#4CAF50' },
  { department: 'Design', participation: 87, meetings: 18, color: '#9C27B0' },
  { department: 'Marketing', participation: 92, meetings: 15, color: '#FF9800' },
  { department: 'Sales', participation: 85, meetings: 12, color: '#CA2030' },
  { department: 'HR', participation: 96, meetings: 8, color: '#795548' },
  { department: 'Finance', participation: 91, meetings: 6, color: '#607D8B' }
];

const meetingTypesData = [
  { name: 'Team Standup', value: 35, color: '#2C318E' },
  { name: 'Project Review', value: 25, color: '#4CAF50' },
  { name: 'Planning', value: 20, color: '#9C27B0' },
  { name: 'One-on-One', value: 15, color: '#FF9800' },
  { name: 'Client Meeting', value: 5, color: '#CA2030' }
];

const attendanceRateData = [
  { month: 'Jan', rate: 87 },
  { month: 'Feb', rate: 92 },
  { month: 'Mar', rate: 85 },
  { month: 'Apr', rate: 89 },
  { month: 'May', rate: 94 },
  { month: 'Jun', rate: 91 }
];

const meetingDurationData = [
  { duration: '< 30 min', count: 45, percentage: 40 },
  { duration: '30-60 min', count: 38, percentage: 34 },
  { duration: '60-90 min', count: 20, percentage: 18 },
  { duration: '> 90 min', count: 9, percentage: 8 }
];

export const MeetingReports = ({ onNavigate }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('last-6-months');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const totalMeetings = monthlyMeetingsData.reduce((sum, month) => sum + month.meetings, 0);
  const totalParticipants = monthlyMeetingsData.reduce((sum, month) => sum + month.participants, 0);
  const totalDuration = monthlyMeetingsData.reduce((sum, month) => sum + month.duration, 0);
  const averageAttendance = attendanceRateData.reduce((sum, month) => sum + month.rate, 0) / attendanceRateData.length;

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className='mb-4 sm:mb-0'>
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Meeting Reports & Analytics</h1>
            <p className="text-[#666666]">Insights and analytics on meeting productivity and engagement</p>
          </div>
          <div className="flex space-x-4">
            <button className="neu-button px-6 py-3 rounded-2xl flex items-center space-x-3 hover:scale-105 transition-transform">
              <Download className="w-5 h-5" />
              <span className="font-medium">Export Report</span>
            </button>
            <button 
              onClick={() => onNavigate('new-meeting')}
              className="neu-primary px-8 py-4 rounded-2xl flex items-center space-x-3 hover:scale-105 transition-transform"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Schedule Meeting</span>
            </button>
          </div>
        </div>

  {/* KPI Cards */}
    <KpiCards
      totalMeetings={totalMeetings}
      totalParticipants={totalParticipants}
      totalDuration={totalDuration}
      averageAttendance={averageAttendance}
    />


      {/* Filters */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <Filter className="w-5 h-5 text-[#666666]" />
            <span className="font-medium text-[#333333]">Filters:</span>
          </div>
          
          <div className="neu-input p-3 rounded-2xl">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="bg-transparent outline-none text-[#333333]"
            >
              <option value="last-month">Last Month</option>
              <option value="last-3-months">Last 3 Months</option>
              <option value="last-6-months">Last 6 Months</option>
              <option value="last-year">Last Year</option>
            </select>
          </div>

          <div className="neu-input p-3 rounded-2xl">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-transparent outline-none text-[#333333]"
            >
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="product">Product</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="hr">HR</option>
              <option value="finance">Finance</option>
            </select>
          </div>
        </div>
      </div>

    

          {/* Charts Row 1 */}
        <MeetingChartsRow1 
      monthlyMeetingsData={monthlyMeetingsData} 
      attendanceRateData={attendanceRateData} 
    />

          {/* Charts Row 2 */}
        <MeetingChartsRow2
        departmentParticipationData={departmentParticipationData}
        meetingTypesData={meetingTypesData}
        meetingDurationData={meetingDurationData}
      />

      {/* Department Details Table */}
      <DepartmentPerformanceTable departmentData={departmentParticipationData} />
      {/* Insights and Recommendations */}
    <MeetingInsights />

    </div>
  );
};