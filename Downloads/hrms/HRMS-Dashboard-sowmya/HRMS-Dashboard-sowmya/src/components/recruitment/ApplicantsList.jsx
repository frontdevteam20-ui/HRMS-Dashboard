import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, User, MapPin, Calendar, FileText, Eye, Download, Star, ArrowRight, MoreVertical, Mail, Phone } from 'lucide-react';
import { ApplicantInfo } from '../Applicants/ApplicantInfo';
import { ApplicantsStatistics } from '../Applicants/ApplicantsStatistics';
import { ApplicantActions } from '../Applicants/ApplicantActions';
import { StatusFilter } from '../Applicants/StatusFilter';
import { StageFilter } from '../Applicants/StageFilter';
import { SourceFilter } from '../Applicants/SourceFilter';
import { RoleFilter } from '../Applicants/RoleFilter';
import { applicants } from '../Applicants/applicantsData';

export const ApplicantsList = ({ jobId }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStage, setFilterStage] = useState('all');
  const [filterSource, setFilterSource] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const getStageColor = (stage) => {
    switch (stage) {
      case 'Application': return 'text-blue-600 bg-blue-50';
      case 'Shortlisted': return 'text-green-600 bg-green-50';
      case 'Interview': return 'text-orange-600 bg-orange-50';
      case 'Offer': return 'text-purple-600 bg-purple-50';
      case 'Hired': return 'text-green-700 bg-green-100';
      default: return 'text-gray-600 bg-gray-50';
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review': return 'text-yellow-600 bg-yellow-50';
      case 'Shortlisted': return 'text-green-600 bg-green-50';
      case 'Interview Scheduled': return 'text-blue-600 bg-blue-50';
      case 'Technical Interview': return 'text-blue-700 bg-blue-100';
      case 'Offer Extended': return 'text-purple-600 bg-purple-50';
      case 'Hired': return 'text-green-700 bg-green-100';
      case 'Rejected': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.appliedFor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || applicant.appliedFor === filterRole;
    const matchesStage = filterStage === 'all' || applicant.stage === filterStage;
    const matchesSource = filterSource === 'all' || applicant.source === filterSource;
    const matchesStatus = filterStatus === 'all' || applicant.status === filterStatus;
    
    return matchesSearch && matchesRole && matchesStage && matchesSource && matchesStatus;
  });

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="mb-2 sm:mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#333333] mb-1">Applicants</h1>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base lg:text-lg">Manage and review job applications</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button 
            onClick={() => navigate('/applicant-progress')}
            className="neu-primary px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-1.5 sm:space-x-2 hover:scale-105 transition-transform text-xs sm:text-sm md:text-base w-full sm:w-auto"
          >
            <span>Progress Tracker</span>
          </button>
          <button className="neu-primary px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl flex items-center space-x-1.5 sm:space-x-2 transition-all duration-200 hover:shadow-lg text-xs sm:text-sm md:text-base">
            <Download size={16} className="sm:w-5 sm:h-5" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

  {/* Statistics */}
      <ApplicantsStatistics applicants={filteredApplicants} />
      


      {/* Filters and Search */}
      <div className="neu-card p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl">
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Search */}
          <div className="relative w-full">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#666666] sm:w-5 sm:h-5" size={16}  />
            <input
              type="text"
              placeholder="Search applicants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="neu-input w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base text-[#333333] placeholder-[#666666] focus:outline-none"
            />
          </div>
          {/* Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            <RoleFilter filterRole={filterRole} setFilterRole={setFilterRole} />
            <StageFilter filterStage={filterStage} setFilterStage={setFilterStage} />
            <SourceFilter filterSource={filterSource} setFilterSource={setFilterSource} />
            <StatusFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
          </div>
        </div>
      </div>
      
    
      {/* Applicants List */}
      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        {filteredApplicants.map((applicant) => (
          <div key={applicant.id} className="neu-card p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl hover:shadow-lg transition-all duration-200">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Avatar */}
                <div className="neu-small w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0">
                  <User size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#666666]" />
                </div>

                {/* Applicant Info */}
                <div className="flex-1 min-w-0">
                  <ApplicantInfo
                    applicant={applicant} 
                    getStageColor={getStageColor} 
                    getStatusColor={getStatusColor} 
                  />
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex justify-end">
                <ApplicantActions applicant={applicant} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredApplicants.length === 0 && (
        <div className="neu-card p-8 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl text-center">
          <User size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#666666] mx-auto mb-3 sm:mb-4" />
          <p className="text-[#666666] text-base sm:text-lg md:text-xl">No applicants found</p>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};