// src/InterviewCalendar/CalendarControls.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarControls = ({
  currentDate,
  monthNames,
  navigateMonth,
  navigateToToday,
  filterStatus,
  setFilterStatus,
  filterType,
  setFilterType,
  viewMode,
  setViewMode
}) => {
  return (
    <div className="neu-card p-4 sm:p-6 rounded-3xl mb-4 sm:mb-8">
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
        {/* Navigation - Stack on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center justify-between sm:justify-start space-x-2">
            <button
              onClick={() => navigateMonth(-1)}
              className="neu-button p-2 sm:p-3 rounded-2xl hover:shadow-md transition-all duration-200"
              aria-label="Previous month"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5 text-[#666666]" />
            </button>

            <div className="neu-small px-4 sm:px-6 py-2 sm:py-3 rounded-2xl mx-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#333333] whitespace-nowrap">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
            </div>

            <button
              onClick={() => navigateMonth(1)}
              className="neu-button p-2 sm:p-3 rounded-2xl hover:shadow-md transition-all duration-200"
              aria-label="Next month"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5 text-[#666666]" />
            </button>
          </div>

          <button
            onClick={navigateToToday}
            className="w-full sm:w-auto neu-button px-4 py-2 sm:py-3 rounded-2xl text-sm sm:text-base text-[#333333] hover:text-[#2C318E] transition-all duration-200 text-center"
          >
            Today
          </button>
        </div>

        {/* Filters - Stack on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full sm:w-auto">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full neu-input pl-4 pr-10 py-2 text-sm sm:text-base text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none min-w-[140px]"
              aria-label="Filter by status"
            >
              <option value="all">All Status</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full neu-input pl-4 pr-10 py-2 text-sm sm:text-base text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none min-w-[180px]"
              aria-label="Filter by type"
            >
              <option value="all">All Types</option>
              <option value="Phone Screening">Phone Screening</option>
              <option value="Technical Interview">Technical Interview</option>
              <option value="Behavioral Interview">Behavioral Interview</option>
              <option value="Portfolio Review">Portfolio Review</option>
              <option value="Final Interview">Final Interview</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* View Mode Toggle - Full width on mobile, auto on desktop */}
          <div className="flex items-center justify-between sm:justify-start space-x-2 neu-input p-2 rounded-2xl">
            {['month', 'week', 'day'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-xl transition-all duration-200 capitalize ${
                  viewMode === mode ? 'neu-primary text-white' : 'text-[#666666] hover:bg-gray-100'
                }`}
                aria-label={`View ${mode}`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarControls;
