import React from 'react';

const Tabination = ({ viewMode, setViewMode }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* View Mode Toggle */}
      <div className="neu-card-inset p-2 rounded-2xl flex space-x-2">
        {['Quick Attendance Overview', 'Attendance Chart'].map(mode => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`px-4 py-2 rounded-xl transition-all ${
              viewMode === mode
                ? 'neu-primary text-white'
                : 'text-[#666666] hover:text-[#333333]'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Zoom Controls */}
     
    </div>
  );
};

export default Tabination;