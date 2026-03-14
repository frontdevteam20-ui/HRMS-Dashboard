import React from 'react';
import { User, MapPin, Calendar, Mail, Phone, Star } from 'lucide-react';

export const ApplicantInfo = ({ applicant, getStageColor, getStatusColor }) => {
  return (
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-1">{applicant.name}</h3>
          <p className="text-[#CA2030] font-medium mb-2 text-sm sm:text-base">{applicant.appliedFor}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#666666] mb-3">
            <div className="flex items-center">
              <MapPin size={12} className="sm:w-4 sm:h-4 mr-1" />
              <span className="truncate">{applicant.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={12} className="sm:w-4 sm:h-4 mr-1" />
              <span>Applied {applicant.appliedDate}</span>
            </div>
            <div className="flex items-center">
              <User size={12} className="sm:w-4 sm:h-4 mr-1" />
              <span>{applicant.experience} experience</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#666666]">
            <div className="flex items-center">
              <Mail size={12} className="sm:w-4 sm:h-4 mr-1" />
              <span className="truncate">{applicant.email}</span>
            </div>
            <div className="flex items-center">
              <Phone size={12} className="sm:w-4 sm:h-4 mr-1" />
              <span>{applicant.phone}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center sm:items-start justify-between sm:justify-end sm:space-x-4">
          <div className="text-right sm:text-left">
            <div className="flex items-center sm:items-end mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="sm:w-4 sm:h-4"
                  style={i < Math.floor(applicant.rating) ? { color: '#FACC15', fill: 'currentColor' } : { color: '#D1D5DB' }}
                />
              ))}
              <span className="text-xs sm:text-sm text-[#666666] ml-2">{applicant.rating}</span>
            </div>
            <p className="text-xs text-[#666666]">Last activity: {applicant.lastActivity}</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-3 sm:mb-4">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {applicant.skills.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="neu-small px-2 sm:px-3 py-1 rounded-2xl text-xs sm:text-sm text-[#333333]"
            >
              {skill}
            </span>
          ))}
          {applicant.skills.length > 4 && (
            <span className="neu-small px-2 sm:px-3 py-1 rounded-2xl text-xs sm:text-sm text-[#666666]">
              +{applicant.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Status and Stage */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStageColor(applicant.stage)}`}>
          {applicant.stage}
        </span>
        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(applicant.status)}`}>
          {applicant.status}
        </span>
        <span className="text-xs text-[#666666] bg-[#E8EBEF] px-2 sm:px-3 py-1 rounded-full">
          Source: {applicant.source}
        </span>
      </div>

      {/* Notes */}
      {applicant.notes && (
        <p className="text-xs sm:text-sm text-[#666666] bg-[#F5F8FB] p-2 sm:p-3 rounded-2xl">
          "{applicant.notes}"
        </p>
      )}
    </div>
  );
};
