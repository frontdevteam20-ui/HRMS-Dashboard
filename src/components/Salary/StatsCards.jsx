import React from 'react';
import { Users, Wallet, FileText, BarChart2 } from 'lucide-react';

const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Total Employees Card */}
            <div className="neu-card p-6 rounded-3xl">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-bold text-[#333333]">1,247</p>
                        <p className="text-[#666666] text-sm mb-1">Total Employees</p>
                    </div>
                    <div className="neu-small p-4 rounded-2xl bg-[#9C27B0]">
                        <Users className="text-white" size={24} />
                    </div>
                </div>
            </div>

            {/* Total Gross Card */}
            <div className="neu-card p-6 rounded-3xl">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-semibold">₹3,92,200</p>
                        <p className="text-sm text-gray-500 mb-1">Total Gross</p>
                    </div>
                    <div className="neu-small p-4 rounded-2xl bg-[#CA2030]">
                        <Wallet className="text-white" size={24} />
                    </div>
                </div>
            </div>

            {/* Processed Payrolls Card */}
            <div className="neu-card p-6 rounded-3xl">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-semibold">26/146</p>
                        <p className="text-sm text-gray-500 mb-1">Processed Payrolls</p>
                    </div>
                    <div className="neu-small p-4 rounded-2xl bg-[#2C318E]">
                        <FileText className="text-white" size={24} />
                    </div>
                </div>
            </div>

            {/* Pending Payrolls Card */}
            <div className="neu-card p-6 rounded-3xl">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-semibold">20</p>
                        <p className="text-sm text-gray-500 mb-1">Pending Payrolls</p>
                    </div>
                    <div className="neu-small p-4 rounded-2xl bg-[#9C27B0]">
                        <BarChart2 className="text-white" size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsCards;