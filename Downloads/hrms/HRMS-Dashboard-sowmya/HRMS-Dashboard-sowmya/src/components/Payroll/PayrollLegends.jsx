import React from 'react';

const PayrollLegends = () => {
    return (
        <div className="neu-card p-4 sm:p-6 rounded-2xl w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-8 space-y-4 sm:space-y-0">
                {/* Title - Always visible on its own line */}
                <h2 className="text-sm font-semibold text-[#333333] text-center sm:text-left sm:mr-4">
                    Color Legends:
                </h2>
                {/* Legends - Wrap on mobile, single line on desktop */}
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:flex sm:flex-wrap gap-3 sm:gap-4">
                    {[
                        { color: 'bg-[#4CAF50]', label: 'Present' },
                        { color: 'bg-[#F44336]', label: 'Absent' },
                        { color: 'bg-[#FF9800]', label: 'Late' },
                        { color: 'bg-[#9C27B0]', label: 'Leave' },
                        { color: 'bg-[#FFC107]', label: 'Holiday' },
                        { color: 'bg-gray-400', label: 'Week Off' },
                        { color: 'bg-[#2196F3]', label: 'Remote' }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center">
                            <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                            <span className="text-xs sm:text-sm text-[#666666] whitespace-nowrap">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PayrollLegends;