import React from "react";
import { Award, AlertCircle, Clock, Calendar } from "lucide-react";

export const MonthlyStats = ({ attendanceStats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      
      {/* Attendance Rate */}
      <div className="neu-card p-6 rounded-2xl text-center hover:shadow-lg transition-all">
        <div className="neu-small p-3 rounded-xl mb-4 bg-gradient-to-br from-green-400 to-green-600 inline-block">
          <Award size={24} className="text-[#9c27b0]" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-1">
          {attendanceStats.currentMonth.attendancePercentage}%
        </h3>
        <p className="text-[#666666] text-sm">Attendance Rate</p>
      </div>

      {/* Late Arrivals */}
      <div className="neu-card p-6 rounded-2xl text-center hover:shadow-lg transition-all">
        <div className="neu-small p-3 rounded-xl mb-4 bg-gradient-to-br from-[#CA2030] to-[#d4471f] inline-block">
          <AlertCircle size={24} className="text-[#EA5455]" />
        </div>
        <h3 className="text-2xl font-bold text-[#CA2030] mb-1">
          {attendanceStats.currentMonth.lateDays}
        </h3>
        <p className="text-[#666666] text-sm">Late Arrivals</p>
      </div>

      {/* Overtime Hours */}
      <div className="neu-card p-6 rounded-2xl text-center hover:shadow-lg transition-all">
        <div className="neu-small p-3 rounded-xl mb-4 bg-gradient-to-br from-[#2C318E] to-[#048ba8] inline-block">
          <Clock size={24} className="text-[#dc2626]" />
        </div>
        <h3 className="text-2xl font-bold text-[#2C318E] mb-1">
          {attendanceStats.currentMonth.overtimeHours}h
        </h3>
        <p className="text-[#666666] text-sm">Overtime Hours</p>
      </div>

      {/* Leave Days */}
      <div className="neu-card p-6 rounded-2xl text-center hover:shadow-lg transition-all">
        <div className="neu-small p-3 rounded-xl mb-4 bg-gradient-to-br from-purple-400 to-purple-600 inline-block">
          <Calendar size={24} className="text-[#05afcc]" />
        </div>
        <h3 className="text-2xl font-bold text-[#333333] mb-1">
          {attendanceStats.currentMonth.totalDays - attendanceStats.currentMonth.presentDays}
        </h3>
        <p className="text-[#666666] text-sm">Leave Days</p>
      </div>

    </div>
  );
};
