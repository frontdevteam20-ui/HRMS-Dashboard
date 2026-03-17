import React from 'react';
import { UserX, Clock, CheckCircle, TrendingDown } from 'lucide-react';

const KeyMetrics = ({ offboardingStats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div className="neu-small p-6 rounded-2xl">
        <div className="flex items-center justify-between">
                     <div className="text-3xl font-bold text-[#333333]">{offboardingStats.total}</div>
          <div className="text-right">
             <div className="w-12 h-12 neu-primary rounded-xl flex items-center justify-center">
            <UserX className="w-6 h-6 text-white" />
          </div>
            {/* <div className="text-sm text-[#CA2030] font-medium">+3 this month</div> */}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[#333333] mb-1">Total Exits</h3>
          {/* <div className="text-xs text-[#666666]">Employee departures this period</div> */}
        </div>
      </div>

      <div className="neu-small p-6 rounded-2xl">
        <div className="flex items-center justify-between">
                     <div className="text-3xl font-bold text-[#333333]">{offboardingStats.inProgress}</div>

          <div className="text-right">
             <div className="w-12 h-12 neu-secondary rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
            {/* <div className="text-sm text-[#2C318E] font-medium">Active processes</div> */}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[#333333] mb-1">In Progress</h3>
          {/* <div className="text-xs text-[#666666]">Currently processing exits</div> */}
        </div>
      </div>

      <div className="neu-small p-6 rounded-2xl">
        <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-[#333333]">{offboardingStats.clearanceRate}%</div>
          <div className="text-right">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
            {/* <div className="text-sm text-[#4CAF50] font-medium">+2% vs last month</div> */}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[#333333] mb-1">Clearance Rate</h3>
          {/* <div className="text-xs text-[#666666]">Successfully completed</div> */}
        </div>
      </div>

      <div className="neu-small p-6 rounded-2xl">
        <div className="flex items-center justify-between">
                     <div className="text-3xl font-bold text-[#333333]">{offboardingStats.averageDuration}</div>

          <div className="text-right">
             <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <TrendingDown className="w-6 h-6 text-white" />
          </div>
            {/* <div className="text-sm text-[#4CAF50] font-medium">-1 day improved</div> */}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[#333333] mb-1">Avg. Duration</h3>
          {/* <div className="text-xs text-[#666666]">Days to complete</div> */}
        </div>
      </div>

    </div>
  );
};

export default KeyMetrics;
