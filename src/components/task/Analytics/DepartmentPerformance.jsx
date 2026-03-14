import React from "react";
import { Users } from "lucide-react";

export const DepartmentPerformance = ({ departmentStats }) => {
  return (
    <div className="neu-card p-6 rounded-2xl mb-8">
      <h2 className="text-xl font-bold text-[#333333] mb-6">Department Performance</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {departmentStats.map(dept => (
          <div
            key={dept.department}
            className="neu-small p-4 rounded-xl text-center hover:shadow-md transition-all"
          >
            <div
              className="neu-small w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: dept.color }}
            >
              <Users size={20} className="text-white" />
            </div>

            <h3 className="font-bold text-[#333333] mb-2">{dept.department}</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#666666]">Tasks:</span>
                <span className="font-medium text-[#333333]">{dept.tasks}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#666666]">Completed:</span>
                <span className="font-medium text-[#4CAF50]">{dept.completed}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#666666]">Efficiency:</span>
                <span className="font-bold" style={{ color: dept.color }}>
                  {dept.efficiency}%
                </span>
              </div>
            </div>

            <div className="neu-card-inset rounded-lg p-1 mt-4">
              <div
                className="h-2 rounded-lg transition-all duration-300"
                style={{
                  width: `${dept.efficiency}%`,
                  backgroundColor: dept.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
