import React from 'react';
import { Calendar, Users, Clock, TrendingUp } from 'lucide-react';

export const KpiCards = ({ totalMeetings, totalParticipants, totalDuration, averageAttendance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {/* Total Meetings */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between ">
        <div>
          <div className="text-3xl font-bold text-[#2C318E] mb-2">{totalMeetings}</div>
          <div className="text-[#666666]">Total Meetings</div>
        </div>
          <div className="neu-small p-4 rounded-2xl bg-[#2C318E]">
            <Calendar size={24} className="text-white" />
          </div>
        </div>
        <div>
          </div>
      </div>

      {/* Total Participants */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between ">
          <div >
           <div className="text-3xl font-bold text-[#05A7CC] mb-2">{totalParticipants}</div>
          <div className="text-[#666666]">Total Participants</div>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#05A7CC]">
         <Users size={24} className="text-white" />
          </div>
        </div>
        <div>
        </div>
      </div>

      {/* Total Duration */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between ">
            <div>
            <div className="text-3xl font-bold text-[#4CAF50] mb-2">{Math.round(totalDuration / 60)}h</div>
          <div className="text-[#666666]">Total Duration</div>
          </div>
          <div className="neu-small p-3 rounded-2xl bg-[#4CAF50]">
            <Clock size={24}  className="text-white" />
          </div>
        </div>
        <div>
        </div>
      </div>

      {/* Attendance Rate */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
          <div className="text-3xl font-bold text-[#9C27B0] mb-2">{Math.round(averageAttendance)}%</div>
          <h3 className="text-[#666666]">Attendance Rate</h3>
          </div>
          <div className="neu-small p-3 rounded-2xl bg-[#9C27B0]">
            <TrendingUp size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
