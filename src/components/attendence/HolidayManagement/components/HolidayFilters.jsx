import React from 'react';
import { Search } from 'lucide-react';

export const HolidayFilters = ({ 
  searchTerm, 
  typeFilter, 
  onSearchChange, 
  onTypeFilterChange 
}) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CA2030]" />
        <input
          type="text"
          placeholder="Search holidays..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full pl-10 pr-4 py-3 neu-input rounded-xl text-[#333333] placeholder-[#666666] focus:ring-2 focus:ring-[#CA2030] transition-all"
        />
      </div>
      
      <select 
        value={typeFilter}
        onChange={onTypeFilterChange}
        className="w-full neu-input px-4 py-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all"
      >
        <option value="all">All Types</option>
        <option value="national">National</option>
        <option value="religious">Religious</option>
        <option value="company">Company</option>
      </select>
    </div>
  );
};
