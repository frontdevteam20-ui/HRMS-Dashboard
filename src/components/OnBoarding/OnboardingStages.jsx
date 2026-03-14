import React from 'react';

export const OnboardingStages = ({ stages }) => {
  return (
    <div className="neu-card p-4 sm:p-6 md:p-8 rounded-3xl">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-1 sm:mb-2">Current Onboarding Stages</h3>
        <p className="text-sm sm:text-base text-[#666666]">Breakdown by onboarding stage</p>
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {stages.map((stage, index) => (
          <div key={index} className="neu-small p-3 sm:p-4 md:p-6 rounded-2xl text-center">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-xl md:rounded-2xl flex items-center justify-center ${
              stage.stage === 'Completed' ? 'neu-primary' : 'neu-secondary'
            }`}>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stage.count}</span>
            </div>
            <h4 className="font-bold text-[#333333] text-sm sm:text-base mb-1 sm:mb-2 line-clamp-1">{stage.stage}</h4>
            <div className="w-full h-1.5 sm:h-2 bg-[#E8EBEF] rounded-full mb-1.5 sm:mb-2">
              <div 
                className="h-full bg-[#2C318E] rounded-full transition-all duration-300"
                style={{ width: `${stage.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs sm:text-sm text-[#666666]">{stage.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};
