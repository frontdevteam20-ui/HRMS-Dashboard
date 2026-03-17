import React from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

export const MeetingSummary = ({ formData }) => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <h3 className="text-xl font-bold text-[#333333] mb-6">Meeting Summary</h3>
      <div className="space-y-4">
        
        {/* Date & Time */}
        <div className="neu-small p-4 rounded-2xl">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-[#05A7CC]" />
            <div>
              <div className="text-sm text-[#666666]">Date & Time</div>
              <div className="font-medium text-[#333333]">
                {formData.date && formData.startTime 
                  ? `${new Date(formData.date).toLocaleDateString()} at ${formData.startTime}`
                  : 'Not set'
                }
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="neu-small p-4 rounded-2xl">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-[#05A7CC]" />
            <div>
              <div className="text-sm text-[#666666]">Location</div>
              <div className="font-medium text-[#333333]">
                {formData.location || 'Not set'}
              </div>
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="neu-small p-4 rounded-2xl">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-[#05A7CC]" />
            <div>
              <div className="text-sm text-[#666666]">Participants</div>
              <div className="font-medium text-[#333333]">
                {formData.participants.length} invited
              </div>
            </div>
          </div>
        </div>

        {/* Reminder */}
        <div className="neu-small p-4 rounded-2xl">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-[#05A7CC]" />
            <div>
              <div className="text-sm text-[#666666]">Reminder</div>
              <div className="font-medium text-[#333333]">
                {formData.reminderTime} minutes before
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
