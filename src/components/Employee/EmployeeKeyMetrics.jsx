import React from "react";
import { Award, CheckCircle, TrendingUp, User } from "lucide-react";

export const EmployeeKeyMetrics = ({ employee }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">

      {/* Performance Rating */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#9C27B0]">{employee.performance.currentRating}/5</p>
            <div className="text-sm text-[#666666]">Total</div>
          </div>
           <div className="neu-small p-4 rounded-2xl bg-[#9C27B0]">
          <Award className="w-8 h-8 text-white" />
        </div>
        </div>
      </div>

      {/* Attendance */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
             <p className="text-2xl font-bold text-[#CA2030]">{employee.attendance.thisMonth.present}</p>
           <div className="text-[#666666] text-sm mt-1">Days Present</div>
          </div>
           <div className="neu-small p-4 rounded-2xl bg-[#CA2030]">
           <CheckCircle className="w-8 h-8 text-white" />
        </div>
        </div>
      </div>

      {/* Goals Completed */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
        <div>
         <p className="text-2xl font-bold text-[#2C318E]">{employee.performance.goals.filter(g => g.progress === 100).length}</p>
        <div className="text-sm text-[#666666]">Late Arrivals</div>
        </div>
        <div className="neu-small p-4 rounded-2xl bg-[#2C318E]">
        <TrendingUp className="w-8 h-8 text-white" />
        </div>
        </div>
      </div>

      {/* Direct Reports */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
        <div>
        <p className="text-2xl font-bold text-[#0984e3]">{employee.jobInfo.directReports.length}</p>
        <div className="text-sm text-[#666666]">Leave Balance</div>
        </div>
        <div className="neu-small p-4 rounded-2xl bg-[#0984e3]">
        <User className="w-8 h-8 text-white" />
        </div>
        </div>
      </div>
    </div>
  );
};
