import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export const QuickActions = () => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <h3 className="text-xl font-bold text-[#333333] mb-6">Quick Actions</h3>
      
      <div className="space-y-4">
        <button className="w-full neu-button p-4 rounded-2xl text-left hover:scale-105 transition-transform">
          <div className="flex items-center space-x-3">
            <div className="neu-small p-2 rounded-lg">
              <Calendar className="w-4 h-4 text-[#2C318E]" />
            </div>
            <span className="font-medium text-[#333333]">View Attendance</span>
          </div>
        </button>

        <button className="w-full neu-button p-4 rounded-2xl text-left hover:scale-105 transition-transform">
          <div className="flex items-center space-x-3">
            <div className="neu-small p-2 rounded-lg">
              <Clock className="w-4 h-4 text-[#2C318E]" />
            </div>
            <span className="font-medium text-[#333333]">Apply Leave</span>
          </div>
        </button>

        <button className="w-full neu-button p-4 rounded-2xl text-left hover:scale-105 transition-transform">
          <div className="flex items-center space-x-3">
            <div className="neu-small p-2 rounded-lg">
              <Users className="w-4 h-4 text-[#2C318E]" />
            </div>
            <span className="font-medium text-[#333333]">Team Status</span>
          </div>
        </button>
      </div>
    </div>
  );
};
