import React from "react";
import { CheckCircle } from "lucide-react";

export const GeneralPolicies = ({ policies, PolicyField }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#333333]">General Attendance Policies</h2>
          <p className="text-[#666666] text-xs sm:text-sm mt-1">Configure basic attendance rules and requirements</p>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle size={14} className="sm:w-4 sm:h-4 text-green-600" />
          <span className="text-green-600 text-xs sm:text-sm font-medium">All policies active</span>
        </div>
      </div>

      {/* Body Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <PolicyField
          section="general"
          field="gracePeriod"
          label="Grace Period for Late Arrival"
          value={policies.gracePeriod}
          type="slider"
          unit="minutes"
          description="Allowed delay without marking as late"
          min={0}
          max={60}
        />

        <PolicyField
          section="general"
          field="halfDayCutoff"
          label="Half Day Hours Cutoff"
          value={policies.halfDayCutoff}
          unit="hours"
          description="Minimum hours required to avoid half-day deduction"
        />

        <PolicyField
          section="general"
          field="fullDayCutoff"
          label="Full Day Hours Requirement"
          value={policies.fullDayCutoff}
          unit="hours"
          description="Hours required for full day attendance"
        />

        <PolicyField
          section="general"
          field="minimumWorkingHours"
          label="Minimum Daily Working Hours"
          value={policies.minimumWorkingHours}
          unit="hours"
          description="Minimum required working hours per day"
        />

        <PolicyField
          section="general"
          field="breakTimeRequired"
          label="Break Time Mandatory"
          value={policies.breakTimeRequired}
          type="boolean"
          description="Whether break time is mandatory for all employees"
        />

        <PolicyField
          section="general"
          field="minimumBreakDuration"
          label="Minimum Break Duration"
          value={policies.minimumBreakDuration}
          type="slider"
          unit="minutes"
          description="Minimum required break time per day"
          min={15}
          max={120}
        />
      </div>
    </div>
  );
};
