import React from "react";
import { Clock, AlertCircle, Calendar } from "lucide-react";

export const ActivityTimeline = ({ activityTimeline, selectedPeriod, setSelectedPeriod, getStatusColor, getActivityIcon }) => {
  return (
    <div className="neu-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
        <h3 className="text-lg sm:text-xl font-bold text-[#333333]">Activity Timeline</h3>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="neu-input px-3 sm:px-4 py-2 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] text-sm sm:text-base"
          >
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
          </select>
          <button className="neu-button px-3 sm:px-4 py-2 rounded-xl flex items-center hover:text-[#CA2030] transition-colors text-sm sm:text-base">
            <Clock size={14} className="sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#CA2030] to-[#2C318E]"></div>

        {/* Timeline Items */}
        <div className="space-y-4 sm:space-y-6">
          {activityTimeline.map((activity, index) => (
            <div key={index} className="relative flex items-start">
              {/* Activity Card */}
              <div className="ml-8 sm:ml-12 neu-small p-3 sm:p-4 rounded-lg sm:rounded-xl flex-1 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-2 sm:space-y-0">
                  <div className="flex items-start sm:items-center">
                    <div className={`p-1 rounded-lg mr-2 sm:mr-3 ${getStatusColor(activity.status)}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[#333333] text-sm sm:text-base">{activity.description}</div>
                      <div className="text-[#666666] text-xs sm:text-sm">{activity.date}</div>
                    </div>
                  </div>
                  <div className="text-right sm:text-left">
                    <div className="font-bold text-[#333333] text-sm sm:text-base">{activity.time}</div>
                    <div className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status.replace("-", " ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
