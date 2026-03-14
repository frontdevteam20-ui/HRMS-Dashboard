// ... existing imports ...
import { Calendar, CheckCircle, XCircle, Users } from 'lucide-react';

export const MeetingStats = ({ meetings }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {/* Total Meetings */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-[#333333] mb-2">{meetings.length}</div>
            <div className="text-[#666666]">Total Meetings</div>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#2C318E]">
            <Users size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Scheduled Meetings */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-[#333333] mb-2">
              {meetings.filter(m => m.status === 'scheduled').length}
            </div>
            <div className="text-[#666666]">Scheduled</div>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#05A7CC]">
            <Calendar size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Completed Meetings */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-[#333333] mb-2">
              {meetings.filter(m => m.status === 'completed').length}
            </div>
            <div className="text-[#666666]">Completed</div>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#4CAF50]">
            <CheckCircle size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Cancelled Meetings */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-[#333333] mb-2">
              {meetings.filter(m => m.status === 'cancelled').length}
            </div>
            <div className="text-[#666666]">Cancelled</div>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#EF5226]">
            <XCircle size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};