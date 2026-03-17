import React from 'react';

export const DepartmentPerformanceTable = ({ departmentData }) => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#333333] mb-2">Department Performance Details</h3>
        <p className="text-[#666666]">Detailed metrics by department</p>
      </div>
      
      <div className="space-y-4">
        <div className="neu-small p-4 rounded-2xl">
          <div className="grid grid-cols-5 gap-4 font-medium text-[#666666] text-sm">
            <div>Department</div>
            <div>Total Meetings</div>
            <div>Participation Rate</div>
            <div>Avg Attendance</div>
            <div>Performance</div>
          </div>
        </div>

        {departmentData.map((dept, index) => (
          <div key={index} className="neu-small p-4 rounded-2xl hover:scale-105 transition-transform duration-200">
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: dept.color }}
                ></div>
                <span className="font-medium text-[#333333]">{dept.department}</span>
              </div>
              <div className="text-[#333333]">{dept.meetings}</div>
              <div className="text-[#333333]">{dept.participation}%</div>
              <div className="text-[#333333]">92%</div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  dept.participation >= 90 ? 'bg-[#4CAF50]' :
                  dept.participation >= 85 ? 'bg-[#FFC107]' : 'bg-[#CA2030]'
                }`}></div>
                <span className={`text-sm font-medium ${
                  dept.participation >= 90 ? 'text-[#4CAF50]' :
                  dept.participation >= 85 ? 'text-[#FFC107]' : 'text-[#CA2030]'
                }`}>
                  {dept.participation >= 90 ? 'Excellent' :
                   dept.participation >= 85 ? 'Good' : 'Needs Improvement'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
