import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus, Filter, User, Clock, Video, MapPin, Phone, Eye, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TodaysInterviews } from '../InterviewCalendar/TodaysInterviews';
import { Legend } from '../InterviewCalendar/Legend';
import { interviews } from '../InterviewCalendar/interviewsData';
import CalendarGrid from '../InterviewCalendar/CalendarGrid';
import CalendarControls from '../InterviewCalendar/CalendarControls';

export const InterviewCalendar = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Mock interview data
 

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const getInterviewsForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return interviews.filter(interview => interview.date === dateString);
  };

  const getModeIcon = (mode) => {
    switch (mode) {
      case 'Video Call': return <Video size={12} className="text-[#2C318E]" />;
      case 'Phone': return <Phone size={12} className="text-[#CA2030]" />;
      case 'In-Person': return <MapPin size={12} className="text-[#666666]" />;
      default: return <Calendar size={12} className="text-[#666666]" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const navigateToToday = () => {
    setCurrentDate(new Date());
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const filteredInterviews = interviews.filter(interview => {
    const matchesStatus = filterStatus === 'all' || interview.status === filterStatus;
    const matchesType = filterType === 'all' || interview.type === filterType;
    return matchesStatus && matchesType;
  });

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="mb-2 sm:mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#333333] mb-1">Interview Calendar</h1>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base lg:text-lg">Schedule and track interview sessions</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={() => navigate('/interviews-list')}
            className="neu-primary px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-1.5 sm:space-x-2 hover:scale-105 transition-transform text-xs sm:text-sm md:text-base w-full sm:w-auto"
          >
            List View
          </button>
          <button
            onClick={() => navigate('/new-interview')}
            className="neu-primary px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl flex items-center space-x-1.5 sm:space-x-2 transition-all duration-200 hover:shadow-lg text-xs sm:text-sm md:text-base"
          >
            <Plus size={20} />
            <span>Schedule Interview</span>
          </button>
        </div>
      </div>

      {/* Calendar Controls */}
       <CalendarControls
        currentDate={currentDate}
        monthNames={monthNames}
        navigateMonth={navigateMonth}
        navigateToToday={navigateToToday}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterType={filterType}
        setFilterType={setFilterType}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      {/* Calendar Grid */}
     <CalendarGrid
        currentDate={currentDate}
        getDaysInMonth={getDaysInMonth}
        getInterviewsForDate={getInterviewsForDate}
        getModeIcon={getModeIcon}
        getStatusColor={getStatusColor}
        onNavigate={navigate}
      />
      {/* Today's Interviews */}
     <TodaysInterviews interviews={interviews} />


      {/* Legend */}
    <Legend />

    </div>
  );
};