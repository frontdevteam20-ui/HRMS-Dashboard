import React, { useState } from 'react';
import { Settings, Clock, Shield, AlertCircle, CheckCircle, Edit3, Save, X, ToggleLeft, ToggleRight, Sliders } from 'lucide-react';
import { PolicyStatusCards } from '../PolicyRules/PolicyStatusCards';
import { PolicyTabs } from '../PolicyRules/PolicyTabs';
import { GeneralPolicies } from '../PolicyRules/GeneralPolicies';
import { OvertimePolicies } from '../PolicyRules/OvertimePolicies';
import { CompliancePolicies } from '../PolicyRules/CompliancePolicies';
import { PolicyActions } from '../PolicyRules/PolicyActions';
import { PolicySlider } from '../PolicyRules/PolicySlider';
import '../PolicyRules/policy-slider.css';
export const PolicyRules = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [editMode, setEditMode] = useState({});

  const [policies, setPolicies] = useState({
    general: {
      gracePeriod: 15,
      halfDayCutoff: 4,
      fullDayCutoff: 8,
      minimumWorkingHours: 8,
      maxContinuousWork: 12,
      breakTimeRequired: true,
      minimumBreakDuration: 30
    },
    overtime: {
      overtimeThreshold: 8,
      maxDailyOvertime: 4,
      maxWeeklyOvertime: 20,
      overtimeApprovalRequired: true,
      weekendOvertimeMultiplier: 2,
      holidayOvertimeMultiplier: 2.5,
      autoCalculateOvertime: true
    },
    leave: {
      advanceNoticeRequired: 2,
      maxConsecutiveLeaves: 10,
      carryForwardLimit: 5,
      encashmentAllowed: true,
      halfDayLeaveAllowed: true,
      leaveApprovalRequired: true,
      emergencyLeaveGracePeriod: 24
    },
    compliance: {
      laborLawCompliance: true,
      weeklyOffMandatory: true,
      maxWeeklyHours: 48,
      nightShiftRegulations: true,
      femaleNightShiftPolicy: true,
      underage18Restrictions: true,
      pregnancyLeavePolicy: true
    }
  });

  const handleEdit = (section, field) => {
    setEditMode({ ...editMode, [`${section}-${field}`]: true });
  };

  const handleSave = (section, field, value) => {
    setPolicies(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    setEditMode({ ...editMode, [`${section}-${field}`]: false });
  };

  const handleCancel = (section, field) => {
    setEditMode({ ...editMode, [`${section}-${field}`]: false });
  };

  const handleToggle = (section, field) => {
    setPolicies(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: !prev[section][field]
      }
    }));
  };

  const PolicyField = ({ section, field, label, value, type = 'number', unit = '', description = '', min = 0, max = 100 }) => {
    const isEditing = editMode[`${section}-${field}`];
    const [tempValue, setTempValue] = useState(value);

    if (type === 'boolean') {
      return (
        <div className="neu-card p-6 rounded-2xl hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="font-semibold text-[#333333] mb-1">{label}</div>
              {description && <div className="text-[#666666] text-sm">{description}</div>}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleToggle(section, field)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value 
                    ? 'bg-gradient-to-r from-[#CA2030] to-[#d4471f]' 
                    : 'bg-[#E8EBEF]'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${value ? 'text-[#CA2030]' : 'text-[#666666]'}`}>
                {value ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'slider') {
      return (
        <PolicySlider
      label={label}
      description={description}
      value={value}
      unit={unit}
      min={min}
      max={max}
      onChange={(val) => handleSave(section, field, val)}
    />
      );
    }
    return (
      <div className="neu-card p-6 rounded-2xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="font-semibold text-[#333333] mb-1">{label}</div>
            {description && <div className="text-[#666666] text-sm">{description}</div>}
          </div>
          <div className="flex items-center space-x-3">
            {isEditing ? (
              <>
                <input
                  type={type}
                  value={tempValue}
                  onChange={(e) => setTempValue(type === 'number' ? Number(e.target.value) : e.target.value)}
                  className="neu-input w-20 px-3 py-2 text-center rounded-xl focus:ring-2 focus:ring-[#CA2030]"
                />
                {unit && <span className="text-[#666666] text-sm">{unit}</span>}
                <button
                  onClick={() => handleSave(section, field, tempValue)}
                  className="neu-small p-2 rounded-lg hover:text-green-600 transition-colors"
                >
                  <Save size={16} />
                </button>
                <button
                  onClick={() => handleCancel(section, field)}
                  className="neu-small p-2 rounded-lg hover:text-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </>
            ) : (
              <>
                <span className="font-bold text-[#CA2030] text-lg">{value}</span>
                {unit && <span className="text-[#666666] text-sm">{unit}</span>}
                <button
                  onClick={() => handleEdit(section, field)}
                  className="neu-small p-2 rounded-lg hover:text-[#CA2030] transition-colors"
                >
                  <Edit3 size={16} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderGeneralPolicies = () => (
    <GeneralPolicies policies={policies.general} PolicyField={PolicyField} />
  );

  const renderOvertimePolicies = () => (
    <OvertimePolicies
    policies={policies.overtime}
    PolicyField={PolicyField}
  />
  );
  const renderCompliancePolicies = () => (
    <CompliancePolicies 
    policies={policies.compliance} 
    PolicyField={PolicyField} 
  />
  );

  // Layout: Neumorphic Form UI with Toggle Switches and Sliders
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Policy & Rules Setup</h1>
        <p className="text-[#666666]">Configure attendance policies with interactive controls</p>
      </div>
      {/* Status Cards */}
      <PolicyStatusCards />
      {/* Tab Navigation */}
    <PolicyTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Tab Content */}
      <div className="neu-card rounded-2xl p-8">
        {activeTab === 'general' && renderGeneralPolicies()}
        {activeTab === 'overtime' && renderOvertimePolicies()}
        {activeTab === 'compliance' && renderCompliancePolicies()}
      </div>
      {/* Action Buttons */}
    <PolicyActions navigate={navigate} />
    </div>
  );
};