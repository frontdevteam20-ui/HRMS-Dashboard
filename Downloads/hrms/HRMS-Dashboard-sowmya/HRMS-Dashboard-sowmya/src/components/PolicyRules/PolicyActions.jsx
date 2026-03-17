// src/components/PolicyRules/PolicyActions.jsx

import React from "react";

export const PolicyActions = ({ navigate }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
      <button className="neu-button w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:text-[#666666] transition-colors text-sm sm:text-base">
        Reset to Defaults
      </button>

      <button className="neu-primary w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:shadow-xl transition-all text-sm sm:text-base">
        Save All Changes
      </button>

      <button
        onClick={() => navigate('/view-analytics')}
        className="neu-secondary w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:shadow-xl transition-all text-sm sm:text-base"
      >
        View Policy Impact
      </button>
    </div>
  );
};
