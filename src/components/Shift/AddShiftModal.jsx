import React, { useState } from "react";
import { Plus } from "lucide-react";

export const AddShiftModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="neu-card p-4 sm:p-6 lg:p-8 rounded-2xl max-w-md w-full mx-2 sm:mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-4 sm:mb-6">Create New Shift</h3>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-[#333333] font-medium mb-1 sm:mb-2 text-sm sm:text-base">Shift Name</label>
            <input
              type="text"
              placeholder="Enter shift name"
              className="w-full neu-input p-2 sm:p-3 rounded-xl focus:ring-2 focus:ring-[#CA2030] transition-all text-sm sm:text-base"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-[#333333] font-medium mb-1 sm:mb-2 text-sm sm:text-base">Start Time</label>
              <input
                type="time"
                className="w-full neu-input p-2 sm:p-3 rounded-xl focus:ring-2 focus:ring-[#CA2030] transition-all text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-[#333333] font-medium mb-1 sm:mb-2 text-sm sm:text-base">End Time</label>
              <input
                type="time"
                className="w-full neu-input p-2 sm:p-3 rounded-xl focus:ring-2 focus:ring-[#CA2030] transition-all text-sm sm:text-base"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#333333] font-medium mb-1 sm:mb-2 text-sm sm:text-base">Break Duration (minutes)</label>
            <input
              type="number"
              placeholder="60"
              className="w-full neu-input p-2 sm:p-3 rounded-xl focus:ring-2 focus:ring-[#CA2030] transition-all text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block text-[#333333] font-medium mb-1 sm:mb-2 text-sm sm:text-base">Shift Color</label>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['#CA2030', '#2C318E', '#4CAF50', '#9C27B0', '#FFC107'].map(color => (
                <button
                  key={color}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full neu-small hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
          <button
            onClick={onClose}
            className="flex-1 neu-button py-2 sm:py-3 rounded-xl hover:text-[#666666] transition-colors text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 neu-primary py-2 sm:py-3 rounded-xl hover:shadow-xl transition-all text-sm sm:text-base"
          >
            Create Shift
          </button>
        </div>
      </div>
    </div>
  );
};
