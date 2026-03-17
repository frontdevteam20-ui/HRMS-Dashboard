import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

export const InterviewsStatistics = ({ interviews }) => {
  // Count of interviews per status
  const totalInterviews = interviews.length;
  const scheduledCount = interviews.filter(i => i.status === 'Scheduled').length;
  const completedCount = interviews.filter(i => i.status === 'Completed').length;

  // Example: This Week count (you can adjust logic if needed)
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  const thisWeekCount = interviews.filter(interview => {
    const interviewDate = new Date(interview.date);
    return interviewDate >= weekStart && interviewDate <= weekEnd;
  }).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Total Interviews</p>
            <p className="text-2xl font-bold text-[#333333]">{totalInterviews}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#CA2030]">
            <Calendar size={24} className="text-[#FFF]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Scheduled</p>
            <p className="text-2xl font-bold text-[#333333]">{scheduledCount}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#2C318E]">
            <Clock size={24} className="text-[#FFF]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Completed</p>
            <p className="text-2xl font-bold text-[#333333]">{completedCount}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#009688]">
            <CheckCircle size={24} className="text-[#FFF]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">This Week</p>
            <p className="text-2xl font-bold text-[#333333]">{thisWeekCount}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#9C27B0]">
            <Calendar size={24} className="text-[#FFF]" />
          </div>
        </div>
      </div>
    </div>
  );
};
