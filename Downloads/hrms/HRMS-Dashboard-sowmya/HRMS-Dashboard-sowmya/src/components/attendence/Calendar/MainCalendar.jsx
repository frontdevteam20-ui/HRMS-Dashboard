import React from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, Users } from 'lucide-react';

export const MainCalendar = ({
  currentDate,
  filterView,
  setFilterView,
  navigateMonth,
  selectedDate,
  setSelectedDate,
  attendanceData,
  months,
  weekDays,
}) => {

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDateKey = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
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

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-16 sm:h-24 lg:h-32 neu-card-inset rounded-lg sm:rounded-xl opacity-50"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayData = attendanceData[dateKey];
      const isSelected = selectedDate === dateKey;
      const isToday =
        new Date().toDateString() ===
        new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(dateKey)}
          className={`h-16 sm:h-20 lg:h-32 p-1.5 sm:p-2 lg:p-3 neu-card rounded-lg sm:rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
            isSelected ? 'ring-1 sm:ring-2 ring-[#EF5226]' : ''
          } ${dayData ? getStatusStyle(dayData.status, dayData) : 'bg-white border-gray-100'}`}
        >
          <div className="flex justify-between items-start mb-1 sm:mb-2">
            <span
              className={`text-xs sm:text-sm font-bold ${
                isToday
                  ? 'bg-[#EF5226] text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-full'
                  : dayData
                  ? 'opacity-90'
                  : 'text-[#333333]'
              }`}
            >
              {day}
            </span>
            {dayData && (
              <div className="flex space-x-0.5 sm:space-x-1">
                {dayData.status === 'present' && (
                  <Clock size={10} sm:size={12} className="text-white" />
                )}
                {dayData.status === 'holiday' && <Calendar size={10} sm:size={12} className="text-white" />}
                {dayData.status === 'mixed' && <Users size={10} sm:size={12} className="text-white" />}
              </div>
            )}
          </div>

          {dayData && (
            <div className="space-y-0.5 sm:space-y-1 text-xs">
              {dayData.status === 'present' && (
                <>
                  <div className="font-medium text-xs sm:text-xs">{dayData.employees} Present</div>
                  {dayData.lateCount > 0 && (
                    <div className="text-xs opacity-90 hidden sm:block">{dayData.lateCount} Late</div>
                  )}
                </>
              )}

              {dayData.status === 'holiday' && (
                <div className="font-medium truncate text-xs">{dayData.name}</div>
              )}

              {dayData.status === 'mixed' && (
                <>
                  <div className="font-medium text-xs sm:text-xs">{dayData.employees} Present</div>
                  <div className="text-xs opacity-90 hidden sm:block">{dayData.leaves} On Leave</div>
                </>
              )}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="neu-card rounded-2xl p-3 sm:p-6">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center justify-between sm:justify-start space-x-2 sm:space-x-4">
          <button onClick={() => navigateMonth(-1)} className="neu-button p-2 sm:p-3 rounded-xl hover:text-[#EF5226]">
            <ChevronLeft size={18} sm:size={20} />
          </button>

          <h2 className="text-lg sm:text-2xl font-bold text-[#333333]">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>

          <button onClick={() => navigateMonth(1)} className="neu-button p-2 sm:p-3 rounded-xl hover:text-[#EF5226]">
            <ChevronRight size={18} sm:size={20} />
          </button>
        </div>

        {/* Filter */}
        <div className="relative">
          <select
            value={filterView}
            onChange={(e) => setFilterView(e.target.value)}
            className="neu-input pl-3 sm:pl-4 pr-6 sm:pr-8 py-1.5 sm:py-2 rounded-xl text-[#333333] text-sm sm:text-base"
          >
            <option value="all">All Days</option>
            <option value="present">Present Days</option>
            <option value="leave">Leave Days</option>
            <option value="holiday">Holidays</option>
          </select>
        </div>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-1 sm:gap-4 mb-2 sm:mb-4">
        {weekDays.map((day) => (
          <div key={day} className="text-center">
            <span className="text-[#666666] font-bold text-xs sm:text-sm bg-[#E8EBEF] py-1 sm:py-2 px-1 sm:px-4 rounded-lg sm:rounded-xl">
              {day.charAt(0)}
              <span className="hidden sm:inline">{day.slice(1)}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-4">{renderCalendarGrid()}</div>
    </div>
  );
};
