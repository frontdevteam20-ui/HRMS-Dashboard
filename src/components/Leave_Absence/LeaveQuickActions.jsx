import React from 'react';
import { Calendar, Clock, Filter } from 'lucide-react';

export const LeaveQuickActions = ({ onNavigate }) => {
  return (
    <div className="mt-8 neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button 
          onClick={() => onNavigate('admin-dashboard')}
          className="neu-button p-4 rounded-xl text-left hover:text-[#CA2030] transition-colors group"
        >
          <Calendar size={20} className="mb-2 group-hover:text-[#CA2030]" />
          <div className="font-medium">Leave Calendar</div>
          <div className="text-sm text-[#666666]">View leave schedule</div>
        </button>
        
        <button 
          onClick={() => onNavigate('admin-dashboard')}
          className="neu-button p-4 rounded-xl text-left hover:text-[#CA2030] transition-colors group"
        >
          <Clock size={20} className="mb-2 group-hover:text-[#CA2030]" />
          <div className="font-medium">Leave Balance</div>
          <div className="text-sm text-[#666666]">Check employee balances</div>
        </button>
        
        <button 
          onClick={() => onNavigate('admin-dashboard')}
          className="neu-button p-4 rounded-xl text-left hover:text-[#CA2030] transition-colors group"
        >
          <Filter size={20} className="mb-2 group-hover:text-[#CA2030]" />
          <div className="font-medium">Leave Policies</div>
          <div className="text-sm text-[#666666]">Manage leave rules</div>
        </button>
      </div>
    </div>
  );
};
