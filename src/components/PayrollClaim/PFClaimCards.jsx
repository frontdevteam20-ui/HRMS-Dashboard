import React from 'react';
import { Users, Wallet, CalendarDays, BarChart3 } from 'lucide-react';

const PFClaimCards = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {/* Active PF Accounts */}
      <div
        className="neu-card p-6 rounded-3xl cursor-pointer"
        onClick={onCardClick}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">1,247</p>
            <p className="text-[#666666] text-sm mt-1">Active PF Accounts</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#2C318E]">
            <Users size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      {/* PF Corpus Value */}
      <div
        className="neu-card p-6 rounded-3xl cursor-pointer"
        onClick={onCardClick}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">₹3,92,200</p>
            <p className="text-[#666666] text-sm mt-1">PF Corpus Value</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#CA2030]">
            <Wallet size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      {/* Processed Claims */}
      <div
        className="neu-card p-6 rounded-3xl cursor-pointer"
        onClick={onCardClick}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">125</p>
            <p className="text-[#666666] text-sm mt-1">Processed Claims</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#9C27B0]">
            <CalendarDays size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      {/* Pending Claims */}
      <div
        className="neu-card p-6 rounded-3xl cursor-pointer"
        onClick={onCardClick}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">20</p>
            <p className="text-[#666666] text-sm mt-1">Pending Claims</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#CA2030]">
            <BarChart3 size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PFClaimCards;
