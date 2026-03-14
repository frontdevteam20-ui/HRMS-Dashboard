import React from 'react';
import { Calendar } from 'lucide-react';

const getStatusColor = (status) => {
  switch (status) {
    case 'present':
      return 'bg-[#4CAF50] text-white';
    case 'late':
      return 'bg-[#FFC107] text-white';
    case 'half-day':
      return 'bg-[#2C318E] text-white';
    default:
      return 'bg-[#666666] text-white';
  }
};

export const TimeLogsTable = ({ timeLogs }) => {
  return (
    <div className="neu-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl">
      <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4 sm:mb-6">Recent Time Logs</h3>
      
      <div className="space-y-3 sm:space-y-4">
        {timeLogs.map((log) => (
          <div key={log.id} className="neu-small p-4 sm:p-6 rounded-xl sm:rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3 sm:space-x-6">
                <div className="neu-card-inset p-2 sm:p-3 rounded-lg sm:rounded-xl">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#666666]" />
                </div>
                <div>
                  <div className="font-bold text-[#333333] mb-1 text-sm sm:text-base">
                    {new Date(log.date).toLocaleDateString('en-US', { 
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="text-xs sm:text-sm text-[#666666]">{log.location}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className="flex sm:flex-col items-center sm:items-start space-x-3 sm:space-x-0">
                  <div className="text-xs sm:text-sm text-[#666666] sm:mb-1">Punch In</div>
                  <div className="font-medium text-[#333333] text-sm sm:text-base">{log.punchIn}</div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-start space-x-3 sm:space-x-0">
                  <div className="text-xs sm:text-sm text-[#666666] sm:mb-1">Punch Out</div>
                  <div className="font-medium text-[#333333] text-sm sm:text-base">{log.punchOut || '--'}</div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-start space-x-3 sm:space-x-0">
                  <div className="text-xs sm:text-sm text-[#666666] sm:mb-1">Total</div>
                  <div className="font-medium text-[#333333] text-sm sm:text-base">{log.totalHours}</div>
                </div>
                <div className={`neu-small px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium ${getStatusColor(log.status)}`}>
                  {log.status.replace('-', ' ').toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
