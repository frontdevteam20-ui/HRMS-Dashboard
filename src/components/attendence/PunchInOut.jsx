import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Wifi, Calendar, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { TimeLogsTable } from '../PunchInOut/TimeLogsTable';
import { TodaysStats } from '../PunchInOut/TodaysStats';
import { QuickActions } from '../PunchInOut/QuickActions';
import { WeeklySummary } from '../PunchInOut/WeeklySummary';
import { timeLogs, todaysStats } from '../PunchInOut/data';

export const PunchInOut = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [punchInTime, setPunchInTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePunch = () => {
    if (!isPunchedIn) {
      // Punch In
      setIsPunchedIn(true);
      setPunchInTime(currentTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    } else {
      // Punch Out
      setIsPunchedIn(false);
      setPunchInTime(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-[#4CAF50] text-white';
      case 'late':
        return 'bg-[#FFC107] text-white';
      case 'half-day':
        return 'bg-[#2C318E] text-white';
      default:
        return 'bg-[#666666] text-white';
    }
  };


  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="neu-card p-4 sm:p-6 md:p-8 rounded-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Punch In/Out</h1>
            <p className="text-[#666666]">Track your attendance with a simple punch</p>
          </div>
          <div className="neu-card-inset p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-[#333333] mb-1">
              {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
            <div className="text-[#666666]">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Punch Button Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Main Punch Button */}
          <div className="neu-card p-12 rounded-3xl text-center">
            <div className="mb-8">
            <div class="neu-small inline-block p-4 rounded-2xl mb-4"><span data-slot="avatar" class="relative flex size-10 shrink-0 overflow-hidden rounded-full w-20 h-20"><span data-slot="avatar-fallback" class="flex size-full items-center justify-center rounded-full bg-[#05A7CC] text-white text-2xl">JD</span></span></div>
              <h2 className="text-2xl font-bold text-[#333333] mb-2">Lion</h2>
              <p className="text-[#666666]">Employee ID: EMP001</p>
            </div>

            <div className="mb-8">
              <button
                onClick={handlePunch}
                className={`w-48 h-48 rounded-full text-2xl font-bold transition-all duration-300 hover:scale-105 ${
                  isPunchedIn 
                    ? 'neu-secondary' 
                    : 'neu-primary'
                }`}
              >
                {isPunchedIn ? 'PUNCH OUT' : 'PUNCH IN'}
              </button>
            </div>

            {isPunchedIn && punchInTime && (
              <div className="neu-card-inset p-6 rounded-2xl inline-block">
                <div className="flex items-center space-x-3 text-[#333333]">
                  <Clock className="w-5 h-5 text-[#2C318E]" />
                  <span>Punched in at {punchInTime}</span>
                </div>
              </div>
            )}

            {/* Location Info */}
            <div className="mt-8 flex items-center justify-center space-x-6 text-[#666666]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Office - New York</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4" />
                <span>Connected</span>
              </div>
            </div>
          </div>

          {/* Time Logs Table */}
        <TimeLogsTable timeLogs={timeLogs} />

        

        </div>

        {/* Sidebar Stats */}
        <div className="space-y-8">
          {/* Today's Stats */}
       <TodaysStats stats={todaysStats} />


          {/* Quick Actions */}
         <QuickActions />


          {/* Weekly Summary */}
       <WeeklySummary />

        </div>
      </div>
    </div>
  );
};