import React, { useState, useMemo } from 'react';
import { Plus, Calendar, Clock, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { useHolidayManagement } from './useHolidayManagement';
import { HolidayCalendar } from './components/HolidayCalendar';
import { HolidayList } from './components/HolidayList';
import { HolidayFilters } from './components/HolidayFilters';
import { HolidayStats } from './components/HolidayStats';
import { AddHolidayModal } from './components/AddHolidayModal';
import { HolidayDetail } from './components/HolidayDetail';

export const HolidayManagement = ({ onNavigate }) => {
  const {
    currentDate,
    showAddHoliday,
    searchTerm,
    typeFilter,
    selectedHoliday,
    setSearchTerm,
    setTypeFilter,
    setShowAddHoliday,
    setSelectedHoliday,
    navigateMonth,
    handleAddHoliday
  } = useHolidayManagement();

  // Mock data - in a real app, this would come from an API
  const holidays = useMemo(() => [
    {
      id: 1,
      name: 'New Year\'s Day',
      date: '2024-01-01',
      type: 'national',
      description: 'Beginning of the calendar year',
      location: 'All Offices',
      optional: false,
      category: 'Public Holiday',
      color: '#2C318E'
    },
    // ... other holidays
  ], []);

  const filteredHolidays = useMemo(() => 
    holidays.filter(holiday => {
      const matchesSearch = holiday.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         holiday.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'all' || holiday.type === typeFilter;
      return matchesSearch && matchesType;
    }),
    [holidays, searchTerm, typeFilter]
  );

  const getTypeIcon = (type) => {
    const icons = {
      national: Globe,
      religious: MapPin,
      company: Building
    };
    return icons[type] || Calendar;
  };

  const getTypeColor = (type) => {
    const colors = {
      national: 'bg-blue-100 text-blue-800 border-blue-200',
      religious: 'bg-purple-100 text-purple-800 border-purple-200',
      company: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getHolidaysForDate = (year, month, day) => {
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return holidays.filter(holiday => holiday.date === dateKey);
  };

  const renderCalendarGrid = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 neu-card-inset rounded-xl opacity-50"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayHolidays = getHolidaysForDate(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
      
      days.push(
        <div
          key={day}
          onClick={() => setSelectedHoliday(dayHolidays[0] || null)}
          className={`h-24 p-2 neu-card rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
            dayHolidays.length > 0 ? 'ring-2 ring-[#CA2030]' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-1">
            <span className={`text-sm font-medium ${
              isToday ? 'bg-[#CA2030] text-white px-2 py-1 rounded-full' : 
              dayHolidays.length > 0 ? 'text-[#CA2030] font-bold' : 'text-[#333333]'
            }`}>
              {day}
            </span>
            {dayHolidays.length > 0 && (
              <div className="flex space-x-1">
                {dayHolidays.slice(0, 2).map((holiday, idx) => (
                  <div key={idx} className="w-2 h-2 rounded-full" style={{ backgroundColor: holiday.color }}></div>
                ))}
                {dayHolidays.length > 2 && <span className="text-xs text-[#666666]">+{dayHolidays.length - 2}</span>}
              </div>
            )}
          </div>
          
          {dayHolidays.length > 0 && (
            <div className="space-y-1">
              {dayHolidays.slice(0, 2).map((holiday, idx) => (
                <div key={idx} className="text-xs font-medium truncate" style={{ color: holiday.color }}>
                  {holiday.name}
                </div>
              ))}
              {dayHolidays.length > 2 && (
                <div className="text-xs text-[#666666]">+{dayHolidays.length - 2} more</div>
              )}
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="p-8 bg-[#FDFAFA] min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Holiday Management</h1>
        <p className="text-[#666666]">Manage company holidays with calendar and list view</p>
      </div>

      <HolidayStats holidays={holidays} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <HolidayCalendar 
          currentDate={currentDate}
          navigateMonth={navigateMonth}
          renderCalendarGrid={renderCalendarGrid}
          onAddHoliday={() => setShowAddHoliday(true)}
        />

        <div className="lg:col-span-1 space-y-6">
          <div className="neu-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-[#333333] mb-4">Filter Holidays</h3>
            <HolidayFilters 
              searchTerm={searchTerm}
              typeFilter={typeFilter}
              onSearchChange={(e) => setSearchTerm(e.target.value)}
              onTypeFilterChange={(e) => setTypeFilter(e.target.value)}
            />
          </div>

          <div className="neu-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-[#333333] mb-4">Holiday List</h3>
            <HolidayList 
              filteredHolidays={filteredHolidays}
              onHolidaySelect={setSelectedHoliday}
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
            />
          </div>

          <HolidayDetail holiday={selectedHoliday} />

          <div className="neu-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-[#333333] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('attendance-calendar')}
                className="w-full neu-button p-3 rounded-xl text-left hover:text-[#CA2030] transition-colors"
              >
                <Calendar size={16} className="inline mr-2" />
                View in Calendar
              </button>
              <button className="w-full neu-button p-3 rounded-xl text-left hover:text-[#CA2030] transition-colors">
                <Filter size={16} className="inline mr-2" />
                Export Holiday List
              </button>
            </div>
          </div>
        </div>
      </div>

      {showAddHoliday && (
        <AddHolidayModal 
          onClose={() => setShowAddHoliday(false)}
          onSave={handleAddHoliday}
        />
      )}
    </div>
  );
};

export default HolidayManagement;
