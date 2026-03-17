import React, { useState } from 'react';
import PFClaimDashboard from './PFClaimDashboard';
import Cards from './Cards';
import ClaimTable from './ClaimTable';

const Tabination = () => {
  const [viewMode, setViewMode] = useState('All Employees');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-content space-x-3">
        <div className="flex neu-card-inset rounded-xl p-1">
          <button
            onClick={() => setViewMode('All Employees')}
            className={`px-4 py-2 rounded-lg transition-all ${
              viewMode === 'All Employees'
                ? 'neu-primary text-white shadow-md'
                : 'text-[#666666] hover:text-[#CA2030]'
            }`}
          >
            All Employees
          </button>

          <button
            onClick={() => setViewMode('PF Claim')}
            className={`px-4 py-2 rounded-lg transition-all ${
              viewMode === 'PF Claim'
                ? 'neu-primary text-white shadow-md'
                : 'text-[#666666] hover:text-[#CA2030]'
            }`}
          >
            PF Claim
          </button>
        </div>
      </div>

      {/* PF Claim tab: only PF claim dashboard */}
      {viewMode === 'PF Claim' && <PFClaimDashboard />}

      {/* All Employees tab: Cards + ClaimTable */}
      {viewMode === 'All Employees' && (
        <div className="space-y-6">
          <Cards />
          <ClaimTable />
        </div>
      )}
    </div>
  );
};

export default Tabination;