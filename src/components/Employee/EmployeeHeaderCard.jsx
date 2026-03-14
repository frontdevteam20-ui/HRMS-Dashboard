import React, { useState, useEffect } from "react";
import { Building, User, Calendar, Phone, Mail, Clock, MapPin, Wifi } from "lucide-react";

export const EmployeeHeaderCard = ({ employee }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [punchInTime, setPunchInTime] = useState(null);
  const [isOnLunchBreak, setIsOnLunchBreak] = useState(false);
  const [lunchStartTime, setLunchStartTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleStatusUpdate = () => {
    if (!isPunchedIn) {
      setIsPunchedIn(true);
      setPunchInTime(currentTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    } else {
      setIsPunchedIn(false);
      setPunchInTime(null);
    }
  };

  const handleLunchBreak = () => {
    if (isOnLunchBreak) {
      setIsOnLunchBreak(false);
      setLunchStartTime(null);
    } else {
      setIsOnLunchBreak(true);
      setLunchStartTime(
        currentTime.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      );
    }
  };

  return (
   <div className="grid grid-cols-1 gap-6">
  <div className="neu-card p-6 rounded-2xl">
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left Section - Avatar and Basic Info */}
      <div className="flex-shrink-0 flex flex-col items-center md:items-start">
        <div className="neu-small p-2 rounded-2xl mb-4">
          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#05A7CC] to-[#2C318E] flex items-center justify-center text-[#000] text-3xl font-bold">
            {employee.name.split(" ").map(n => n[0]).join("")}
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{employee.name}</h2>
          <p className="text-lg text-gray-600">{employee.designation}</p>
          <span className={`inline-block mt-2 px-4 py-1 rounded-full text-sm font-medium ${
            employee.status === "Active" 
              ? "bg-green-100 text-green-700" 
              : "bg-red-100 text-red-700"
          }`}>
            {employee.status}
          </span>
        </div>
      </div>
      {/* Middle Section - Employee Details */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Work Information</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-700">
                <Building className="w-4 h-4 mr-2 text-gray-500" />
                <span>{employee.department}</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <User className="w-4 h-4 mr-2 text-gray-500" />
                <span>ID: {employee.employeeId}</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                <span>{Math.floor((Date.now() - new Date(employee.joiningDate)) / (1000 * 60 * 60 * 24 * 365))} years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Contact Details</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-700">
                <Phone className="w-4 h-4 mr-2 text-gray-500" />
                <a href={`tel:${employee.personalInfo.phone}`} className="hover:text-blue-600">
                  {employee.personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <Mail className="w-4 h-4 mr-2 text-gray-500" />
                <a href={`mailto:${employee.personalInfo.email}`} className="hover:text-blue-600">
                  {employee.personalInfo.email}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                <span>{employee.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Time Tracker */}
      <div className="md:border-l md:pl-6 flex flex-col">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Time Tracker</h3>
          <div className="space-y-3">
            <button
              onClick={handleStatusUpdate}
              className={`w-full py-2 px-3 rounded-md text-sm font-medium transition-all ${
                isPunchedIn
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isPunchedIn ? 'Punch Out' : 'Punch In'}
            </button>

            <button
              onClick={handleLunchBreak}
              className={`w-full py-2 px-3 rounded-md text-sm font-medium transition-all ${
                isOnLunchBreak
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-yellow-500 hover:bg-yellow-600 text-white'
              }`}
            >
              {isOnLunchBreak ? 'End Break' : 'Lunch Break'}
            </button>

            {(isPunchedIn || isOnLunchBreak) && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <div className="space-y-2 text-xs">
                  {isPunchedIn && punchInTime && (
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-3.5 h-3.5 mr-2 text-blue-600" />
                      <span>Punched in at {punchInTime}</span>
                    </div>
                  )}
                  {isOnLunchBreak && lunchStartTime && (
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-3.5 h-3.5 mr-2 text-yellow-600" />
                      <span>On break since {lunchStartTime}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="pt-3 mt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center">
                  <Wifi className="w-3.5 h-3.5 mr-1.5 text-green-500" />
                  <span>Connected</span>
                </div>
                <div>
                  {currentTime.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};