import React from "react";
import { Clock } from "lucide-react";

export const OvertimePolicies = ({ policies, PolicyField }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#333333]">Overtime Rules</h2>
          <p className="text-[#666666] text-xs sm:text-sm mt-1">Configure overtime eligibility and payout rules</p>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} className="sm:w-4 sm:h-4 text-blue-600" />
          <span className="text-blue-600 text-xs sm:text-sm font-medium">Overtime policies active</span>
        </div>
      </div>

      {/* Body Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <PolicyField
          section="overtime"
          field="overtimeEligibility"
          label="Overtime Eligibility"
          value={policies.overtimeEligibility}
          type="boolean"
          description="Enable or disable employee eligibility for overtime"
        />

        <PolicyField
          section="overtime"
          field="dailyOvertimeThreshold"
          label="Daily OT Threshold"
          value={policies.dailyOvertimeThreshold}
          unit="hours"
          description="Minimum hours required per day before overtime starts"
        />

        <PolicyField
          section="overtime"
          field="weeklyOvertimeThreshold"
          label="Weekly OT Threshold"
          value={policies.weeklyOvertimeThreshold}
          unit="hours"
          description="Minimum hours required per week before overtime starts"
        />

        <PolicyField
          section="overtime"
          field="overtimeRate"
          label="Overtime Rate Multiplier"
          value={policies.overtimeRate}
          unit="x"
          description="Multiplier applied to overtime pay calculation"
        />

        <PolicyField
          section="overtime"
          field="maxDailyOvertime"
          label="Max Daily Overtime"
          value={policies.maxDailyOvertime}
          unit="hours"
          description="Maximum allowed overtime per day"
        />

        <PolicyField
          section="overtime"
          field="maxWeeklyOvertime"
          label="Max Weekly Overtime"
          value={policies.maxWeeklyOvertime}
          unit="hours"
          description="Maximum allowed overtime per week"
        />
      </div>
    </div>
  );
};
