// src/HolidayManagement/AddHolidayModal.jsx
import React from 'react';

export const AddHolidayModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="neu-card p-8 rounded-2xl max-w-md w-full mx-4 shadow-2xl">
        <h3 className="text-xl font-bold text-[#333333] mb-6">Add New Holiday</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-[#333333] font-medium mb-2">Holiday Name</label>
            <input 
              type="text" 
              placeholder="Enter holiday name"
              className="w-full neu-input p-3 rounded-xl focus:ring-2 focus:ring-[#EF5226] transition-all"
            />
          </div>
          
          <div>
            <label className="block text-[#333333] font-medium mb-2">Date</label>
            <input 
              type="date" 
              className="w-full neu-input p-3 rounded-xl focus:ring-2 focus:ring-[#EF5226] transition-all"
            />
          </div>
          
          <div>
            <label className="block text-[#333333] font-medium mb-2">Type</label>
            <select className="w-full neu-input p-3 rounded-xl focus:ring-2 focus:ring-[#EF5226] transition-all">
              <option value="national">National</option>
              <option value="religious">Religious</option>
              <option value="company">Company</option>
            </select>
          </div>
          
          <div>
            <label className="block text-[#333333] font-medium mb-2">Description</label>
            <textarea 
              placeholder="Holiday description"
              className="w-full neu-input p-3 rounded-xl h-20 resize-none focus:ring-2 focus:ring-[#EF5226] transition-all"
            />
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="optional" className="mr-2 w-4 h-4 text-[#EF5226] bg-gray-100 border-gray-300 rounded focus:ring-[#EF5226] focus:ring-2" />
            <label htmlFor="optional" className="text-[#333333]">Optional Holiday</label>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-8">
          <button 
            onClick={onClose}
            className="flex-1 neu-button py-3 rounded-xl hover:text-[#666666] transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="flex-1 neu-primary py-3 rounded-xl hover:shadow-xl transition-all"
          >
            Add Holiday
          </button>
        </div>
      </div>
    </div>
  );
};
