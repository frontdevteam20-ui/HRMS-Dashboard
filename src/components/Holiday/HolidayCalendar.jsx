import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export const HolidayCalendar = ({ holidays, selectedHoliday, setSelectedHoliday }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1)); // March 2024

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const formatDateKey = (year, month, day) => `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getHolidaysForDate = (year, month, day) => {
    const dateKey = formatDateKey(year, month, day);
    return holidays.filter(holiday => holiday.date === dateKey);
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-16 sm:h-24 neu-card-inset rounded-lg sm:rounded-xl opacity-50"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayHolidays = getHolidaysForDate(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();

      days.push(
        <div
          key={day}
          onClick={() => setSelectedHoliday(dayHolidays[0] || null)}
          className={`h-16 sm:h-24 p-1 sm:p-2 neu-card rounded-lg sm:rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
            dayHolidays.length > 0 ? 'ring-1 sm:ring-2 ring-[#EF5226]' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-1">
            <span className={`text-xs sm:text-sm font-medium ${
              isToday ? 'bg-[#EF5226] text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm' : 
              dayHolidays.length > 0 ? 'text-[#EF5226] font-bold' : 'text-[#333333]'
            }`}>
              {day}
            </span>
            {dayHolidays.length > 0 && (
              <div className="flex space-x-0.5 sm:space-x-1">
                {dayHolidays.slice(0, 2).map((holiday, idx) => (
                  <div key={idx} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: holiday.color }}></div>
                ))}
                {dayHolidays.length > 2 && <span className="text-[10px] sm:text-xs text-[#666666]">+{dayHolidays.length - 2}</span>}
              </div>
            )}
          </div>

          {dayHolidays.length > 0 && (
            <div className="space-y-0.5 sm:space-y-1">
              {dayHolidays.slice(0, 1).map((holiday, idx) => (
                <div key={idx} className="text-[10px] sm:text-xs font-medium truncate" style={{ color: holiday.color }}>
                  {holiday.name}
                </div>
              ))}
              {dayHolidays.length > 1 && (
                <div className="text-[10px] sm:text-xs text-[#666666]">+{dayHolidays.length - 1} more</div>
              )}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="neu-card rounded-2xl p-4 sm:p-6">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
        <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-4 mb-4 sm:mb-0">
          <button
            onClick={() => navigateMonth(-1)}
            className="neu-button p-2 sm:p-3 rounded-xl hover:text-[#EF5226] transition-colors"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
          </button>
          <h2 className="text-lg sm:text-2xl font-bold text-[#333333]">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={() => navigateMonth(1)}
            className="neu-button p-2 sm:p-3 rounded-xl hover:text-[#EF5226] transition-colors"
          >
            <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Week Days Header */}
      <div className="grid grid-cols-7 gap-1 sm:gap-4 mb-2 sm:mb-4">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={day + index} className="text-center">
            <span className="text-[#666666] font-bold text-xs sm:text-sm bg-[#E8EBEF] py-1 sm:py-2 px-1 sm:px-4 rounded-lg sm:rounded-xl">
              {day}
            </span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-4">
        {renderCalendarGrid()}
      </div>
    </div>
  );
};
