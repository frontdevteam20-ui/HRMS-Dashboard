import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HolidayCalendar = ({ 
  currentDate, 
  navigateMonth, 
  renderCalendarGrid, 
  onAddHoliday,
  onDayClick 
}) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="lg:col-span-2">
      <div className="neu-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigateMonth(-1)}
              className="neu-button p-3 rounded-xl hover:text-[#CA2030] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-2xl font-bold text-[#333333]">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => navigateMonth(1)}
              className="neu-button p-3 rounded-xl hover:text-[#CA2030] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <button 
            onClick={onAddHoliday}
            className="neu-primary px-6 py-3 rounded-xl flex items-center hover:shadow-xl transition-all"
          >
            <Plus size={16} className="mr-2" />
            Add Holiday
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center">
              <span className="text-[#666666] font-bold text-sm bg-[#E8EBEF] py-2 px-4 rounded-xl">
                {day}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-4">
          {renderCalendarGrid()}
        </div>
      </div>
    </div>
  );
};
