import React, { useState } from 'react';
import { ArrowLeft, Edit, Phone, Mail, MapPin, Calendar, User, Building, Award, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { EmployeeHeaderCard } from '../Employee/EmployeeHeaderCard';
import { EmployeeKeyMetrics } from '../Employee/EmployeeKeyMetrics';
import { SkillsExpertise } from '../Employee/SkillsExpertise';
import { RecentActivities } from '../Employee/RecentActivities';
import { employee, performanceData, attendanceData } from '../Employee/employeeData';
import UserTable from '../EmployeeProfile/UserTable';
import { projects } from '../EmployeeProfile/UserTableData';

export const EmployeeProfile = ({ employeeId, onNavigate }) => {
  // Mock comprehensive employee data
  return (
    <div className="p-8 space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="neu-card p-8 rounded-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-4xl font-bold text-[#333333] mb-2">Employee Profile</h1>
              <p className="text-[#666666] text-lg">Comprehensive employee information and performance overview</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate?.('edit-profile')}
              className="neu-button px-6 py-3 rounded-2xl flex items-center space-x-2 hover:text-[#05A7CC] transition-colors"
            >
              <Edit size={20} />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
        {/* Employee Header Card */}
        <EmployeeHeaderCard employee={employee} />
      </div>
      {/* Key Metrics */}
      <EmployeeKeyMetrics employee={employee} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Current Goals */}
        {/* <CurrentGoals goals={employee.performance.goals} /> */}
        {/* Skills & Expertise */}
 <div className="lg:col-span-8">
    <SkillsExpertise timeLogs={employee.jobInfo.timeLogs} />
  </div>        {/* Recent Activities */}
<div className="lg:col-span-4">
    <RecentActivities activities={employee.recentActivities} />
  </div>      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Trends */}
        {/* <PerformanceTrends data={performanceData} /> */}
        {/* Attendance Overview */}
        {/* <AttendanceOverview data={attendanceData} /> */}
        {/* User Table */}
      </div>
<UserTable projects={projects} />

      {/* Bottom Row */}
    </div>
  );
};