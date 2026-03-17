// src/Leave_Absence/LeaveColumnHeader.jsx
import React from 'react';

export const LeaveColumnHeader = ({ title, color, count }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <div 
          className="w-4 h-4 rounded-full mr-3"
          style={{ backgroundColor: color }}
        ></div>
        <h3 className="text-lg font-bold text-[#333333]">{title}</h3>
      </div>
      <div 
        className="px-3 py-1 rounded-full text-white text-sm font-medium"
        style={{ backgroundColor: color }}
      >
        {count}
      </div>
    </div>
  );
};
