import React, { useState } from 'react';
import { User, Calendar, Clock, TrendingUp, Award, AlertCircle, ChevronLeft, Download, Edit3, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MonthlyStats } from '../EmployeeProfile/MonthlyStats';
import { ActivityTimeline } from '../EmployeeProfile/ActivityTimeline';
import { LeaveBalanceOverview } from '../EmployeeProfile/LeaveBalanceOverview';
import { PerformanceMetrics } from '../EmployeeProfile/PerformanceMetrics';
import { EmployeeDetails } from '../EmployeeProfile/EmployeeDetails';


export const EmployeeAttendanceProfile = ({ employeeId, onNavigate }) => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('this-month');
  const [activeTab, setActiveTab] = useState('overview');

  // Mock employee data
  const employee = {
    id: employeeId || 'EMP001',
    name: 'Lion',
    designation: 'Senior Software Engineer',
    department: 'IT',
    joinDate: '2023-01-15',
    avatar: 'JD',
    shift: 'Morning Shift (9:00 AM - 6:00 PM)',
    manager: 'Sarah Wilson',
    location: 'Bangalore Office'
  };

  const attendanceStats = {
    currentMonth: {
      totalDays: 22,
      presentDays: 20,
      absentDays: 1,
      lateDays: 3,
      halfDays: 1,
      overtimeHours: 24,
      attendancePercentage: 90.9
    },
    previousMonth: {
      attendancePercentage: 87.5,
      lateDays: 5,
      overtimeHours: 18
    }
  };

  const leaveBalance = {
    sickLeave: { used: 3, remaining: 9, total: 12 },
    casualLeave: { used: 2, remaining: 10, total: 12 },
    earnedLeave: { used: 5, remaining: 16, total: 21 },
    compOff: { used: 1, remaining: 3, total: 4 }
  };

  const activityTimeline = [
    { date: '2024-03-15', type: 'punch-in', time: '09:00 AM', status: 'on-time', description: 'Punch In' },
    { date: '2024-03-15', type: 'break', time: '12:00 PM', status: 'normal', description: 'Lunch Break Started' },
    { date: '2024-03-15', type: 'break-end', time: '01:00 PM', status: 'normal', description: 'Lunch Break Ended' },
    { date: '2024-03-15', type: 'punch-out', time: '06:30 PM', status: 'overtime', description: 'Punch Out (1.5h OT)' },
    { date: '2024-03-14', type: 'punch-in', time: '09:15 AM', status: 'late', description: 'Punch In (15 min late)' },
    { date: '2024-03-14', type: 'punch-out', time: '06:00 PM', status: 'normal', description: 'Punch Out' },
    { date: '2024-03-13', type: 'leave', time: 'Full Day', status: 'leave', description: 'Sick Leave' },
    { date: '2024-03-12', type: 'punch-in', time: '08:55 AM', status: 'early', description: 'Punch In (Early arrival)' },
    { date: '2024-03-12', type: 'punch-out', time: '06:15 PM', status: 'overtime', description: 'Punch Out (15m OT)' }
  ];

  const performanceMetrics = [
    { label: 'Punctuality Score', value: 85, color: '#CA2030', max: 100 },
    { label: 'Attendance Rate', value: 91, color: '#4CAF50', max: 100 },
    { label: 'Overtime Hours', value: 24, color: '#2C318E', max: 40 },
    { label: 'Leave Utilization', value: 11, color: '#9C27B0', max: 21 }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'on-time': 'text-green-600 bg-green-100',
      'late': 'text-[#CA2030] bg-orange-100',
      'early': 'text-blue-600 bg-blue-100',
      'overtime': 'text-[#2C318E] bg-blue-100',
      'normal': 'text-[#333333] bg-gray-100',
      'leave': 'text-purple-600 bg-purple-100'
    };
    return colors[status] || 'text-[#666666] bg-gray-100';
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'punch-in':
      case 'punch-out':
        return <Clock size={16} />;
      case 'break':
      case 'break-end':
        return <AlertCircle size={16} />;
      case 'leave':
        return <Calendar size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  // Layout: Profile + Timeline
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => navigate('/punch-in-out')}
            className="neu-small p-2 rounded-xl hover:text-[#CA2030] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-3xl font-bold text-[#333333]">Employee Attendance Profile</h1>
        </div>
        <p className="text-[#666666]">Detailed attendance analysis with timeline view</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* LEFT PANEL - Employee Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Employee Profile Card */}
          <div className="neu-card p-6 rounded-2xl text-center">
            <div className="neu-small w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#CA2030] to-[#d4471f] text-black text-2xl font-bold">
              {employee.avatar}
            </div>
            <h2 className="text-xl font-bold text-[#333333] mb-1">{employee.name}</h2>
            <p className="text-[#666666] mb-2">{employee.designation}</p>
            <div className="neu-small px-3 py-1 rounded-full inline-block">
              <span className="text-[#333333] text-sm font-medium">{employee.id}</span>
            </div>
          </div>
          {/* Employee Details */}
           <EmployeeDetails employee={employee} />
          {/* Performance Metrics */}
         <PerformanceMetrics metrics={performanceMetrics} />
        </div>
        {/* RIGHT PANEL - Timeline and Stats */}
        <div className="lg:col-span-3 space-y-8">
          {/* Monthly Stats */}
          <MonthlyStats attendanceStats={attendanceStats} />
          {/* Activity Timeline */}
        <ActivityTimeline
      activityTimeline={activityTimeline}
      selectedPeriod={selectedPeriod}
      setSelectedPeriod={setSelectedPeriod}
      getStatusColor={getStatusColor}
      getActivityIcon={getActivityIcon}
    />
          {/* Leave Balance Overview */}
       <LeaveBalanceOverview leaveBalance={leaveBalance} />

        </div>
      </div>
    </div>
  );
};