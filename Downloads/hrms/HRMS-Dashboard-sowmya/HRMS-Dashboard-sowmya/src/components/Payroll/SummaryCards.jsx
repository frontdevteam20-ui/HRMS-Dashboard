import React, { useEffect, useMemo } from 'react';
import { Users, Wallet, CalendarDays, BarChart3 } from 'lucide-react';

const SummaryCards = ({ filteredEmployees = [], loading = false }) => {
  // Calculate summary data from filtered employees
  const summaryData = useMemo(() => {
    if (!filteredEmployees || filteredEmployees.length === 0) {
      return {
        totalEmployees: 0,
        totalAbsent: 0,
        totalWorkingDays: 0,
        avgAttendance: 0
      };
    }

    let totalPresent = 0;
    let totalAbsent = 0;
    let totalLeaves = 0;
    let totalWorkingDays = 0;

    filteredEmployees.forEach(employee => {
      const present = employee.present || 0;
      const absent = employee.absentLop || 0;
      const leaves = employee.leaves || 0;
      const workingDays = employee.workingDays || 0;
      
      totalPresent += present;
      totalAbsent += absent;
      totalLeaves += leaves;
      totalWorkingDays += workingDays;
    });

    const totalEmployees = filteredEmployees.length;
    const avgAttendance = totalWorkingDays > 0 ? ((totalWorkingDays / (totalEmployees * 30)) * 100).toFixed(1) : 0;

    console.log('📊 SummaryCards - Calculated from filtered employees:', {
      totalEmployees,
      totalAbsent,
      totalWorkingDays,
      avgAttendance,
      filteredCount: filteredEmployees.length
    });

    return {
      totalEmployees,
      totalAbsent,
      totalWorkingDays,
      avgAttendance: parseFloat(avgAttendance)
    };
  }, [filteredEmployees]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333] 2xl:text-lg xl:text-2xl">
              {loading ? '...' : summaryData.totalEmployees}
            </p>
            <p className="text-[#666666] text-sm mb-1 2xl:text-xs xl:text-sm">Total Employees</p>
          </div>
          <div className="neu-small p-3 rounded-2xl bg-[#9C27B0] ">
            <Users size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333] 2xl:text-lg xl:text-2xl">
              {loading ? '...' : summaryData.totalAbsent}
            </p>
            <p className="text-[#666666] text-sm mb-1 2xl:text-xs xl:text-sm">Total LOP's</p>
          </div>
          <div className="neu-small p-3 rounded-2xl bg-[#CA2030] ">
            <Wallet size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333] 2xl:text-lg xl:text-2xl">
              {loading ? '...' : summaryData.totalWorkingDays}
            </p>
            <p className="text-[#666666] text-sm mb-1 2xl:text-xs xl:text-sm">Working days</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#2C318E] 2xl:p-3 xl:p-4">
            <CalendarDays size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333] 2xl:text-lg xl:text-2xl">
              {loading ? '...' : summaryData.avgAttendance + '%'}
            </p>
            <p className="text-[#666666] text-sm mb-1 2xl:text-xs xl:text-sm">Avg Attendance</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#05A7CC] 2xl:p-3 xl:p-4">
            <BarChart3 size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
