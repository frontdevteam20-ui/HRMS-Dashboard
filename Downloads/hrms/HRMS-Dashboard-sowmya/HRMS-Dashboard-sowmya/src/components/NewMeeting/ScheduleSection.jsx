import React from 'react';

export const ScheduleSection = ({ formData, handleInputChange }) => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-[#333333] mb-6">Schedule</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-[#333333] font-medium mb-3">Date *</label>
          <div className="neu-input p-4 rounded-2xl">
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#333333] font-medium mb-3">Start Time *</label>
          <div className="neu-input p-4 rounded-2xl">
            <input
              type="time"
              value={formData.startTime}
              onChange={(e) => handleInputChange('startTime', e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#333333] font-medium mb-3">End Time *</label>
          <div className="neu-input p-4 rounded-2xl">
            <input
              type="time"
              value={formData.endTime}
              onChange={(e) => handleInputChange('endTime', e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[#333333] font-medium mb-3">Meeting Type</label>
          <div className="neu-input p-4 rounded-2xl">
            <select
              value={formData.meetingType}
              onChange={(e) => handleInputChange('meetingType', e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333]"
            >
              <option value="in-person">In-Person</option>
              <option value="virtual">Virtual Meeting</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[#333333] font-medium mb-3">Location</label>
          <div className="neu-input p-4 rounded-2xl">
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333] placeholder-[#999999]"
              placeholder={formData.meetingType === 'virtual' ? 'Meeting link' : 'Room or address'}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-[#333333] font-medium mb-3">Recurring</label>
          <div className="neu-input p-4 rounded-2xl">
            <select
              value={formData.recurringType}
              onChange={(e) => handleInputChange('recurringType', e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333]"
            >
              <option value="none">No Recurring</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[#333333] font-medium mb-3">Reminder</label>
          <div className="neu-input p-4 rounded-2xl">
            <select
              value={formData.reminderTime}
              onChange={(e) => handleInputChange('reminderTime', e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333]"
            >
              <option value="5">5 minutes before</option>
              <option value="15">15 minutes before</option>
              <option value="30">30 minutes before</option>
              <option value="60">1 hour before</option>
              <option value="1440">1 day before</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
