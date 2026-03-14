import React from 'react';
import { FileText } from 'lucide-react';

export const RecentOnboarding = ({ data, onNavigate, getStatusColor }) => {
  return (
    <div className="lg:col-span-2 neu-card p-4 sm:p-6 md:p-8 rounded-3xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="mb-2 sm:mb-0">
          <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-1 sm:mb-2">Recent Onboarding</h3>
          <p className="text-sm sm:text-base text-[#666666]">Latest employee progress</p>
        </div>
        <button
          onClick={() => onNavigate?.('onboarding-checklist')}
          className="neu-button px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl flex items-center justify-center sm:justify-start space-x-1.5 sm:space-x-2 hover:text-[#2C318E] transition-colors w-full sm:w-auto"
        >
          <FileText className="w-4 h-4 sm:w-4 sm:h-4" />
          <span className="text-sm sm:text-base">View All</span>
        </button>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {data.map((employee) => (
          <div key={employee.id} className="neu-small p-4 sm:p-5 md:p-6 rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 neu-gradient rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="font-bold text-sm sm:text-base text-[#2C318E]">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[#333333] text-sm sm:text-base truncate">{employee.name}</h4>
                  <p className="text-xs sm:text-sm text-[#666666] truncate">{employee.designation}</p>
                  <p className="text-xs text-[#999999] truncate">{employee.department} • {new Date(employee.startDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="text-right mt-2 sm:mt-0">
                <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${getStatusColor(employee.status)}`}>
                  {employee.status}
                </span>
                <div className="mt-1.5 sm:mt-2">
                  <div className="flex items-center justify-end space-x-1.5 sm:space-x-2">
                    <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-[#E8EBEF] rounded-full">
                      <div 
                        className="h-full bg-[#2C318E] rounded-full transition-all duration-300"
                        style={{ width: `${employee.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-[#666666] whitespace-nowrap">{employee.progress}%</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#999999] mt-1">Current: <span className="truncate">{employee.stage}</span></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
