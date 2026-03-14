import React from 'react';
import { Video, Phone, MapPin } from 'lucide-react';

export const Legend = () => {
  return (
    <div className="mt-8 neu-card p-6 rounded-3xl">
      <h3 className="text-lg font-bold text-[#333333] mb-4">Legend</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <Video size={16} className="text-[#2C318E]" />
          <span className="text-[#333333] text-sm">Video Call</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={16} className="text-[#CA2030]" />
          <span className="text-[#333333] text-sm">Phone Call</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={16} className="text-[#666666]" />
          <span className="text-[#333333] text-sm">In-Person</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-[#333333] text-sm">Scheduled</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-[#333333] text-sm">Completed</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-[#333333] text-sm">Cancelled</span>
        </div>
      </div>
    </div>
  );
};
