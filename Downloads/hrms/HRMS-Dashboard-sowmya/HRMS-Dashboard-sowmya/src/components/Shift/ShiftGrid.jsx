// src/components/ShiftManagement/ShiftGrid.jsx
import React from 'react';
import { Edit3, Clock, Users, Settings, Copy, Trash2, ArrowRight } from 'lucide-react';

export const ShiftGrid = ({ shifts, handleDragOver, handleDrop, navigate }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {shifts.map((shift) => (
        <div
          key={shift.id}
          className="neu-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, shift.id)}
        >
          {/* Shift Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-3"
                style={{ backgroundColor: shift.color }}
              ></div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#CA2030] transition-colors">
                  {shift.name}
                </h3>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${
                    shift.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {shift.status}
                </span>
              </div>
            </div>

            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="neu-small p-2 rounded-lg hover:text-[#CA2030] transition-colors">
                <Edit3 size={16} />
              </button>
              <button className="neu-small p-2 rounded-lg hover:text-[#2C318E] transition-colors">
                <Copy size={16} />
              </button>
              <button className="neu-small p-2 rounded-lg hover:text-red-500 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Shift Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="neu-small p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-[#666666] text-sm">Working Hours</span>
                <Clock size={16} className="text-[#CA2030]" />
              </div>
              <div className="font-bold text-[#333333] mt-1">
                {shift.startTime} - {shift.endTime}
              </div>
            </div>

            <div className="neu-small p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-[#666666] text-sm">Break Time</span>
                <Clock size={16} className="text-[#2C318E]" />
              </div>
              <div className="font-bold text-[#333333] mt-1">{shift.breakDuration}</div>
            </div>

            <div className="neu-small p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-[#666666] text-sm">Employees</span>
                <Users size={16} className="text-[#CA2030]" />
              </div>
              <div className="font-bold text-[#CA2030] mt-1">{shift.employees}</div>
            </div>

            <div className="neu-small p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-[#666666] text-sm">Total Hours</span>
                <Settings size={16} className="text-[#666666]" />
              </div>
              <div className="font-bold text-[#333333] mt-1">
                {shift.workingHours}
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className="mb-6">
            <span className="text-[#666666] text-sm block mb-2">Departments</span>
            <div className="flex flex-wrap gap-2">
              {shift.departments.map((dept, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-white text-sm rounded-full font-medium"
                  style={{ backgroundColor: shift.color }}
                >
                  {dept}
                </span>
              ))}
            </div>
          </div>

          {/* Drop Zone */}
          <div className="neu-card-inset p-4 rounded-xl border-2 border-dashed border-gray-300 text-center">
            <Users size={24} className="text-[#666666] mx-auto mb-2" />
            <p className="text-[#666666] text-sm">
              Drop employees here to assign to this shift
            </p>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate('/shift-details')}
            className="w-full mt-4 neu-button py-3 rounded-xl flex items-center justify-center hover:text-[#CA2030] transition-colors group"
          >
            <span className="font-medium">Manage Assignments</span>
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      ))}
    </div>
  );
};
