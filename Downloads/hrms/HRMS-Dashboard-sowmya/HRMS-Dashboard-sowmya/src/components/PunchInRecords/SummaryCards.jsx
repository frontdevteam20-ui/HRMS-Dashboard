import React from "react";
import { Clock, CheckCircle, AlertCircle, Edit3 } from "lucide-react";

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {/* Total Records */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#333333] group-hover:text-[#CA2030] transition-colors">142</h3>
            <p className="text-[#666666] text-sm">Total Records</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#2C318E] ">
            <Clock size={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFF]" />
          </div>
        </div>
      </div>

      {/* Complete */}
      <div className="neu-card p-6 rounded-2xl group hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-green-600 group-hover:scale-105 transition-transform">128</h3>
            <p className="text-[#666666] text-sm">Complete</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#EF5226]">
            <CheckCircle size={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFF]" />
          </div>
        </div>
      </div>

      {/* Incomplete */}
      <div className="neu-card p-6 rounded-2xl group hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#2C318E] group-hover:scale-105 transition-transform">8</h3>
            <p className="text-[#666666] text-sm">Incomplete</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#2C318E]">
            <AlertCircle size={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFF]" />
          </div>
        </div>
      </div>

      {/* Need Review */}
      <div className="neu-card p-6 rounded-2xl group hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#333333] group-hover:text-[#CA2030] transition-colors">6</h3>
            <p className="text-[#666666] text-sm">Need Review</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#CA2030]">
            <Edit3 size={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFF]" />
          </div>
        </div>
      </div>

    </div>
  );
};
