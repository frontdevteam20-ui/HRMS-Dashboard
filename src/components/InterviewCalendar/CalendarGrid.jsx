// src/InterviewCalendar/CalendarGrid.jsx
import React from 'react';
import { Video, Phone, MapPin, Calendar } from 'lucide-react';

const CalendarGrid = ({ currentDate, getDaysInMonth, getInterviewsForDate, getModeIcon, getStatusColor, onNavigate }) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="neu-card p-4 sm:p-6 lg:p-8 rounded-3xl">
      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 sm:mb-4">
        {dayNames.map((day) => (
          <div key={day} className="text-center p-2 sm:p-3 lg:p-4">
            <span className="text-[#666666] font-medium text-xs sm:text-sm">{day}</span>
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {getDaysInMonth(currentDate).map((day, index) => {
          if (day === null) {
            return <div key={index} className="h-16 sm:h-20 lg:h-32"></div>;
          }

          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const dayInterviews = getInterviewsForDate(date);
          const isToday = date.toDateString() === new Date().toDateString();

          return (
            <div
              key={index}
              className={`h-16 sm:h-20 lg:h-32 neu-small rounded-xl sm:rounded-2xl p-2 sm:p-3 transition-all duration-200 hover:shadow-lg ${
                isToday ? 'ring-1 sm:ring-2 ring-[#CA2030]' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-1 sm:mb-2">
                <span className={`font-medium text-xs sm:text-sm ${isToday ? 'text-[#CA2030]' : 'text-[#333333]'}`}>
                  {day}
                </span>
                {dayInterviews.length > 0 && (
                  <span className="neu-primary text-white text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-full">
                    {dayInterviews.length}
                  </span>
                )}
              </div>

              <div className="space-y-0.5 sm:space-y-1">
                {dayInterviews.slice(0, 1).map((interview) => (
                  <button
                    key={interview.id}
                    onClick={() => onNavigate('interview-details', { interviewId: interview.id })}
                    className={`w-full p-1 sm:p-2 rounded-lg text-left transition-all duration-200 hover:shadow-md border ${getStatusColor(interview.status)}`}
                  >
                    <div className="flex items-center space-x-1 mb-0.5 sm:mb-1">
                      {getModeIcon(interview.mode)}
                      <span className="text-xs font-medium truncate">{interview.time}</span>
                    </div>
                    <p className="text-xs truncate hidden sm:block">{interview.candidateName}</p>
                  </button>
                ))}

                {dayInterviews.length > 1 && (
                  <button
                    className="w-full text-xs text-[#2C318E] hover:underline text-left"
                    onClick={() => onNavigate('interviews-list', { date: date.toISOString().split('T')[0] })}
                  >
                    +{dayInterviews.length - 1} more
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
