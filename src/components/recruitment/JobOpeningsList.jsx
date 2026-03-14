import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Briefcase, MapPin, Users, Calendar, Building2, MoreVertical, Edit, Eye, Archive, Trash2 } from 'lucide-react';
import JobOpeningsTable from '../JobOpenings/JobOpeningsTable';
import JobStatistics from '../JobOpenings/JobStatistics';
import { jobOpenings } from '../JobOpenings/jobData';

export const JobOpeningsList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');
  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'text-green-600 bg-green-50';
      case 'In Progress': return 'text-blue-600 bg-blue-50';
      case 'Closed': return 'text-red-600 bg-red-50';
      case 'Archived': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-orange-600 bg-orange-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || job.department === filterDepartment;
    const matchesStatus = filterStatus === 'all' || job.status === filterStatus;
    const matchesLocation = filterLocation === 'all' || job.location === filterLocation;
    
    return matchesSearch && matchesDepartment && matchesStatus && matchesLocation;
  });

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-1 sm:mb-2">Job Openings</h1>
          <p className="text-[#666666] text-sm sm:text-base md:text-lg">Manage job postings and track applications</p>
        </div>
        <button
          onClick={() => navigate('/new-job-opening')}
          className="neu-primary px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center space-x-2 hover:scale-105 transition-transform w-full sm:w-auto"
        >
          <Plus size={20} />
          <span>New Job Opening</span>
        </button>
      </div>

        {/* Job Statistics */}
          <JobStatistics jobOpenings={jobOpenings} />


      {/* Filters and Search */}
      <div className="neu-card p-6 rounded-3xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-[60%] transform -translate-y-1/2 text-[#666666]" size={20} />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="neu-input w-full pl-12 pr-4 py-3 text-[#333333] placeholder-[#666666] focus:outline-none"
            />
          </div>

          {/* Department Filter */}
          <div className="relative">
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
            >
              <option value="all">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
            <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
            >
              <option value="all">All Status</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
              <option value="Archived">Archived</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Location Filter */}
          <div className="relative">
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
            >
              <option value="all">All Locations</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Remote">Remote</option>
              <option value="Boston">Boston</option>
              <option value="Austin">Austin</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    
      {/* Job Openings Table */}
     <JobOpeningsTable
        jobs={filteredJobs}
        getStatusColor={getStatusColor}
        getPriorityColor={getPriorityColor}
      />
    </div>
  );
};