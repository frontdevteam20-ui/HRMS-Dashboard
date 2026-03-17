import React from 'react';

const ExitReasonsAnalysis = ({ exitReasons }) => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#333333] mb-2">Exit Reasons Analysis</h3>
        <p className="text-[#666666]">Understanding why employees are leaving</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {exitReasons.map((reason, index) => (
          <div key={index} className="neu-small p-6 rounded-2xl text-center">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
              index === 0 ? 'neu-primary' : 
              index === 1 ? 'neu-secondary' : 
              'bg-gray-500'
            }`}>
              <span className="text-2xl font-bold text-white">{reason.count}</span>
            </div>
            <h4 className="font-bold text-[#333333] mb-2 text-sm">{reason.reason}</h4>
            <div className="w-full h-2 bg-[#E8EBEF] rounded-full mb-2">
              <div 
                className="h-2 bg-[#CA2030] rounded-full transition-all duration-300"
                style={{ width: `${reason.percentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-[#666666]">{reason.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExitReasonsAnalysis;
