import React from 'react';
import { Users, Wallet, CalendarDays, BarChart3 } from 'lucide-react';

const Cards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {/* Active PF Accounts */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#9C27B0]">1,247</p>
            <p className="text-[#666666] text-sm mt-1">Active PF Accounts</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#9C27B0]">
            <Users size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      {/* PF Corpus Value */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#CA2030]">₹3,92,200</p>
            <p className="text-[#666666] text-sm mt-1">PF Corpus Value</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#CA2030]">
            <Wallet size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      {/* Processed Claims */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#2C318E]">125</p>
            <p className="text-[#666666] text-sm mt-1">Processed Claims</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#2C318E]">
            <CalendarDays size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      {/* Pending Claims */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#0984e3]">20</p>
            <p className="text-[#666666] text-sm mt-1">Pending Claims</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#0984e3]">
            <BarChart3 size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;