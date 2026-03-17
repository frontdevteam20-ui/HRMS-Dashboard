import React from "react";

const AttendanceCards = ({ kpiData }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <div key={index} className="neu-card p-6 rounded-3xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#333333] mb-1">{kpi.value}</h3>
                <p className="text-[#666666] text-sm">{kpi.title}</p>
              </div>
              <div className={`p-3 rounded-xl ${kpi.color} ${kpi.bgColor || 'bg-gray-100'}`}>
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AttendanceCards;

