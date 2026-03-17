import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, Coffee, Home, Plane, Heart, Plus, Filter, Users } from 'lucide-react';
import { MainCalendar } from './Calendar/MainCalendar';
import { CalendarLegend } from './Calendar/CalendarLegend';
import { QuickActions } from './Calendar/QuickActions';
import { MonthlyStats } from './Calendar/MonthlyStats';
import { months, weekDays, attendanceData } from './Calendar/calendarData';

export const AttendanceCalendar = ({ onNavigate }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterView, setFilterView] = useState('all');




  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDateKey = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getStatusStyle = (status, data) => {
    switch (status) {
      case 'present':
        if (data.lateCount > 0) {
          return 'bg-gradient-to-br from-[#EF5226] to-[#d4471f] text-yellow-600 border-[#EF5226]';
        }
        return 'bg-gradient-to-br from-green-400 to-green-600 text-green-500 border-green-500';
      case 'holiday':
        return 'bg-gradient-to-br from-[#05A7CC] to-[#048ba8] text-green-800 border-[#05A7CC]';
      case 'mixed':
        return 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-yellow-800 border-yellow-500';
      default:
        return 'bg-white border-gray-300 text-[#333333]';
    }
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-32 neu-card-inset rounded-xl opacity-50"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayData = attendanceData[dateKey];
      const isSelected = selectedDate === dateKey;
      const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
      
      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(dateKey)}
          className={`h-32 p-3 neu-card rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
            isSelected ? 'ring-2 ring-[#EF5226]' : ''
          } ${dayData ? getStatusStyle(dayData.status, dayData) : 'bg-white border-gray-100'}`}
        >
          {/* Day Number */}
          <div className="flex justify-between items-start mb-2">
            <span className={`text-sm font-bold ${
              isToday ? 'bg-[#EF5226] text-white px-2 py-1 rounded-full' : 
              dayData ? 'opacity-90' : 'text-[#333333]'
            }`}>
              {day}
            </span>
            {dayData && (
              <div className="flex space-x-1">
                {dayData.status === 'present' && (
                  <Clock size={12} className={dayData.lateCount > 0 ? "text-white" : "text-white"} />
                )}
                {dayData.status === 'holiday' && <Calendar size={12} className="text-white" />}
                {dayData.status === 'mixed' && <Users size={12} className="text-white" />}
              </div>
            )}
          </div>
          
          {/* Day Content */}
          {dayData && (
            <div className="space-y-1 text-xs">
              {dayData.status === 'present' && (
                <>
                  <div className="font-medium">{dayData.employees} Present</div>
                  {dayData.lateCount > 0 && (
                    <div className="text-xs opacity-90">{dayData.lateCount} Late</div>
                  )}
                </>
              )}
              {dayData.status === 'holiday' && (
                <div className="font-medium truncate text-xs">{dayData.name}</div>
              )}
              {dayData.status === 'mixed' && (
                <>
                  <div className="font-medium">{dayData.employees} Present</div>
                  <div className="text-xs opacity-90">{dayData.leaves} On Leave</div>
                </>
              )}
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  const selectedDayDetails = selectedDate ? attendanceData[selectedDate] : null;

  // Layout: Calendar Grid with Hover Tooltips and Side Details
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Attendance Calendar</h1>
        <p className="text-[#666666]">Visual attendance tracking with daily insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Calendar */}
        <div className="lg:col-span-2">
         <MainCalendar
          currentDate={currentDate}
          filterView={filterView}
          setFilterView={setFilterView}
          navigateMonth={navigateMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          attendanceData={attendanceData}
          months={months}
          weekDays={weekDays}
        />
        </div>

        {/* Sidebar with Details and Legend */}
        <div className="lg:col-span-1 space-y-6">
          {/* Legend */}
           <CalendarLegend />

          {/* Selected Day Details */}
          {selectedDayDetails && (
            <div className="neu-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[#333333] mb-4">
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
              
              {selectedDayDetails.status === 'present' && (
                <div className="space-y-3">
                  <div className="neu-small p-3 rounded-xl bg-green-50">
                    <div className="flex items-center justify-between">
                      <span className="text-[#666666] text-sm">Employees Present</span>
                      <span className="font-bold text-green-600">{selectedDayDetails.employees}</span>
                    </div>
                  </div>
                  {selectedDayDetails.checkIn && (
                    <div className="neu-small p-3 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-[#666666] text-sm">Avg Check-in</span>
                        <span className="font-bold text-[#333333]">{selectedDayDetails.checkIn}</span>
                      </div>
                    </div>
                  )}
                  {selectedDayDetails.lateCount > 0 && (
                    <div className="neu-small p-3 rounded-xl bg-orange-50">
                      <div className="flex items-center justify-between">
                        <span className="text-[#666666] text-sm">Late Arrivals</span>
                        <span className="font-bold text-[#EF5226]">{selectedDayDetails.lateCount}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {selectedDayDetails.status === 'holiday' && (
                <div className="neu-small p-4 rounded-xl text-center bg-blue-50">
                  <Calendar size={24} className="text-[#05A7CC] mx-auto mb-2" />
                  <p className="font-medium text-[#333333]">{selectedDayDetails.name}</p>
                  <p className="text-sm text-[#666666]">Company Holiday</p>
                </div>
              )}

              {selectedDayDetails.status === 'mixed' && (
                <div className="space-y-3">
                  <div className="neu-small p-3 rounded-xl bg-green-50">
                    <div className="flex items-center justify-between">
                      <span className="text-[#666666] text-sm">Present</span>
                      <span className="font-bold text-green-600">{selectedDayDetails.employees}</span>
                    </div>
                  </div>
                  <div className="neu-small p-3 rounded-xl bg-yellow-50">
                    <div className="flex items-center justify-between">
                      <span className="text-[#666666] text-sm">On Leave</span>
                      <span className="font-bold text-yellow-600">{selectedDayDetails.leaves}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick Actions */}
        <QuickActions onNavigate={onNavigate} />


          {/* Monthly Stats */}
         <MonthlyStats />

        </div>
      </div>
    </div>
  );
};