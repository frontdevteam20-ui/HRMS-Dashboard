import { useState } from 'react';

export const useHolidayManagement = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1));
  const [showAddHoliday, setShowAddHoliday] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const handleAddHoliday = (newHoliday) => {
    // In a real app, you would update the state or make an API call here
    setShowAddHoliday(false);
  };

  return {
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
  };
};
