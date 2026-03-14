import React from 'react';
import { Clock, Calendar, Filter } from 'lucide-react';

export const QuickActions = ({ onNavigate }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-4">Quick Actions</h3>

      <div className="space-y-3">
        <button 
          onClick={() => onNavigate('punch-records')}
          className="w-full neu-button p-3 rounded-xl text-left hover:text-[#EF5226] transition-colors flex items-center"
        >
          <Clock size={16} className="inline mr-2" />
          View Daily Records
        </button>

        <button 
          onClick={() => onNavigate('leave-tracking')}
          className="w-full neu-button p-3 rounded-xl text-left hover:text-[#EF5226] transition-colors flex items-center"
        >
          <Calendar size={16} className="inline mr-2" />
          Manage Leaves
        </button>

        <button 
          onClick={() => onNavigate('view-analytics')}
          className="w-full neu-button p-3 rounded-xl text-left hover:text-[#EF5226] transition-colors flex items-center"
        >
          <Filter size={16} className="inline mr-2" />
          Generate Report
        </button>
      </div>
    </div>
  );
};
