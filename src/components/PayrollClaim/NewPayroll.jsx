// In src/components/PayrollClaim/NewPayroll.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Tabination from './Tabination';

const NewPayroll = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      <div className="neu-card p-4 sm:p-6 md:p-8 rounded-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className='mb-4 sm:mb-0'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-1 sm:mb-2">New Payroll</h1>
            <p className="text-[#666666] text-sm sm:text-base md:text-lg">Track new employee payroll progress and metrics</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => navigate('/new-claim')}
              className="neu-primary px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center space-x-2 hover:scale-105 transition-transform w-full sm:w-auto"
            >
              <Plus size={20} />
              <span>Add New Claim</span>
            </button>
          </div>
        </div>
        
        <Tabination/>
      </div>   
    </div>
  );
};

export default NewPayroll;