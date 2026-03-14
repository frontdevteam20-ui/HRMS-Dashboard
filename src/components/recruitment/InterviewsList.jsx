import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Video, MapPin, Phone, Plus, Filter, Search, Eye, Edit, MoreVertical, CheckCircle, XCircle } from 'lucide-react';
import { InterviewsStatistics } from '../Interviews/InterviewsStatistics';
import { InterviewInfo } from '../Interviews/InterviewInfo';
import { InterviewActions } from '../Interviews/InterviewActions';
import { interviews } from '../Interviews/interviewsData';

export const InterviewsList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'

 
  const getStatusColor = (status) => {
    switch (status) {
      case 'Scheduled': return 'text-blue-600 bg-blue-50';
      case 'Completed': return 'text-green-600 bg-green-50';
      case 'Cancelled': return 'text-red-600 bg-red-50';
      case 'Rescheduled': return 'text-yellow-600 bg-yellow-50';
      case 'No Show': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getModeIcon = (mode) => {
    switch (mode) {
      case 'Video Call': return <Video size={16} className="text-[#2C318E]" />;
      case 'Phone': return <Phone size={16} className="text-[#CA2030]" />;
      case 'In-Person': return <MapPin size={16} className="text-[#666666]" />;
      default: return <Calendar size={16} className="text-[#666666]" />;
    }
  };

  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interview.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interview.interviewer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || interview.status === filterStatus;
    const matchesType = filterType === 'all' || interview.type === filterType;
    
    let matchesDate = true;
    if (filterDate !== 'all') {
      const today = new Date();
      const interviewDate = new Date(interview.date);
      
      switch (filterDate) {
        case 'today':
          matchesDate = interviewDate.toDateString() === today.toDateString();
          break;
        case 'tomorrow':
          const tomorrow = new Date(today);
          tomorrow.setDate(tomorrow.getDate() + 1);
          matchesDate = interviewDate.toDateString() === tomorrow.toDateString();
          break;
        case 'this-week':
          const weekStart = new Date(today);
          weekStart.setDate(today.getDate() - today.getDay());
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekStart.getDate() + 6);
          matchesDate = interviewDate >= weekStart && interviewDate <= weekEnd;
          break;
        default:
          matchesDate = true;
      }
    }
    
    return matchesSearch && matchesStatus && matchesType && matchesDate;
  });

  const sortedInterviews = [...filteredInterviews].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - dateB;
  });

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="mb-2 sm:mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#333333] mb-1">Interviews</h1>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base lg:text-lg">Manage and track all interview sessions</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={() => navigate('/interview-calendar')}
            className="neu-primary px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-1.5 sm:space-x-2 hover:scale-105 transition-transform text-xs sm:text-sm md:text-base w-full sm:w-auto"
          >
            Calendar View
          </button>
          <button
            onClick={() => navigate('/new-interview')}
            className="neu-primary px-6 py-3 rounded-2xl flex items-center space-x-2 transition-all duration-200 hover:shadow-lg"
          >
            <Plus size={20} />
            <span>Schedule Interview</span>
          </button>
        </div>
      </div>
     {/* Statistics */}
    <InterviewsStatistics interviews={interviews} />
      {/* Filters and Search */}
      <div className="neu-card p-6 rounded-3xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-[60%] transform -translate-y-1/2 text-[#666666]" size={20} />
            <input
              type="text"
              placeholder="Search interviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="neu-input w-full pl-12 pr-4 py-3 text-[#333333] placeholder-[#666666] focus:outline-none"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
            >
              <option value="all">All Status</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Rescheduled">Rescheduled</option>
              <option value="No Show">No Show</option>
            </select>
            <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Type Filter */}
          <div className="relative">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
            >
              <option value="all">All Types</option>
              <option value="Phone Screening">Phone Screening</option>
              <option value="Technical Interview">Technical Interview</option>
              <option value="Behavioral Interview">Behavioral Interview</option>
              <option value="Portfolio Review">Portfolio Review</option>
              <option value="Final Interview">Final Interview</option>
            </select>
            <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Date Filter */}
          <div className="relative">
            <select
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
            >
              <option value="all">All Dates</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="this-week">This Week</option>
            </select>
            <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 neu-input p-2 rounded-2xl">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                viewMode === 'list' ? 'neu-primary text-white' : 'text-[#666666]'
              }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                viewMode === 'calendar' ? 'neu-primary text-white' : 'text-[#666666]'
              }`}
            >
              Calendar
            </button>
          </div>
        </div>
      </div>

 


      {/* Interviews List */}
      <div className="space-y-6">
        {sortedInterviews.map((interview) => (
          <div key={interview.id} className="neu-card p-8 rounded-3xl">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-6">
                {/* Avatar */}
                <div className="neu-small w-16 h-16 rounded-3xl flex items-center justify-center">
                  <User size={32} className="text-[#666666]" />
                </div>

                {/* Interview Info */}
                <InterviewInfo
            interview={interview}
            getModeIcon={getModeIcon}
            getStatusColor={getStatusColor}
          />
              </div>

              {/* Actions */}
            <InterviewActions interview={interview} navigate={navigate} />

            </div>
          </div>
        ))}
      </div>

      {sortedInterviews.length === 0 && (
        <div className="neu-card p-12 rounded-3xl text-center">
          <Calendar size={48} className="text-[#666666] mx-auto mb-4" />
          <p className="text-[#666666] text-lg">No interviews found</p>
          <p className="text-[#666666] text-sm">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};