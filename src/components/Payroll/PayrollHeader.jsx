import React from "react";
import { Users } from "lucide-react";

const PayrollHeader = () => {
  const days = [
    "M","T","W","T","F","S","S","M","T","W","T","F","S","S","M","T","W","T","F","S","S","M","T","W","T","F","S","S","M","T"
  ];

  const dates = Array.from({ length: 30 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <div className="neu-card p-4 sm:p-6 rounded-3xl w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center w-full">
        {/* LEFT CARD */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] bg-[#00AEEF] rounded-lg flex items-center justify-center">
            <Users size={22} className="sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold">1,247</div>
            <div className="text-xs sm:text-sm text-gray-600 -mt-0.5">
              Total Employees
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Days and Dates */}
        <div className="w-full overflow-x-auto">
          <div className="flex items-center min-w-max">
            {/* Empty space to align with table columns */}
            <div className="w-[120px] sm:w-[150px] mr-2">
              <div className="h-6"></div>
              <div className="h-6"></div>
              
            </div>
            
            {/* Days and Dates */}
            <div className="flex-1">
              <div className="flex gap-1 mb-1.5 text-xs sm:text-sm font-semibold">
                {days.slice(0, 30).map((d, i) => (
                  <div key={`day-${i}`} className="w-6 h-6 flex items-center justify-center">
                    <span className="text-xs sm:text-sm">{d}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-1 text-xs sm:text-sm">
                {dates.map((dt, i) => (
                  <div key={`date-${i}`} className="w-6 h-6 flex items-center justify-center">
                    <span className="text-xs sm:text-sm">{dt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollHeader;