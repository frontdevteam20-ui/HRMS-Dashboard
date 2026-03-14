import React from "react";
import { Shield } from "lucide-react";

export const CompliancePolicies = ({ policies, PolicyField }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#333333]">Compliance & Legal Policies</h2>
          <p className="text-[#666666] text-xs sm:text-sm mt-1">Ensure compliance with local labor laws and regulations</p>
        </div>
        <div className="flex items-center space-x-2">
          <Shield size={14} className="sm:w-4 sm:h-4 text-green-600" />
          <span className="text-green-600 text-xs sm:text-sm font-medium">Compliant with local laws</span>
        </div>
      </div>

      {/* Body Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <PolicyField
          section="compliance"
          field="laborLawCompliance"
          label="Labor Law Compliance"
          value={policies.laborLawCompliance}
          type="boolean"
          description="Ensure all policies comply with local labor laws"
        />

        <PolicyField
          section="compliance"
          field="weeklyOffMandatory"
          label="Weekly Off Mandatory"
          value={policies.weeklyOffMandatory}
          type="boolean"
          description="Ensure employees get mandatory weekly off"
        />

        <PolicyField
          section="compliance"
          field="maxWeeklyHours"
          label="Maximum Weekly Hours"
          value={policies.maxWeeklyHours}
          type="slider"
          unit="hours"
          description="Maximum working hours allowed per week"
          min={40}
          max={60}
        />

        <PolicyField
          section="compliance"
          field="nightShiftRegulations"
          label="Night Shift Regulations"
          value={policies.nightShiftRegulations}
          type="boolean"
          description="Apply special regulations for night shift workers"
        />

        <PolicyField
          section="compliance"
          field="femaleNightShiftPolicy"
          label="Female Night Shift Policy"
          value={policies.femaleNightShiftPolicy}
          type="boolean"
          description="Special safety policies for female night shift workers"
        />

        <PolicyField
          section="compliance"
          field="pregnancyLeavePolicy"
          label="Pregnancy Leave Policy"
          value={policies.pregnancyLeavePolicy}
          type="boolean"
          description="Enable maternity and pregnancy-related leave policies"
        />
      </div>
    </div>
  );
};
