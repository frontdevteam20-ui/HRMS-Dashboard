import React from "react";
import { Settings, Clock, Shield } from "lucide-react";

export const PolicyTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "general", label: "General Policies", icon: Settings },
    { id: "overtime", label: "Overtime Rules", icon: Clock },
    { id: "compliance", label: "Compliance", icon: Shield },
  ];

  return (
    <div className="neu-card rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1 neu-card-inset rounded-lg sm:rounded-xl p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center py-2 sm:py-3 px-3 sm:px-6 rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? "neu-primary text-white shadow-lg"
                  : "text-[#666666] hover:text-[#CA2030]"
              }`}
            >
              <Icon size={14} className="sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
