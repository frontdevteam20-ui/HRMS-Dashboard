import React from 'react';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

export const InterviewInfo = ({ interview, getModeIcon, getStatusColor }) => {
  return (
   <div className="flex-1">
                  <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-1">{interview.candidateName}</h3>
                      <p className="text-[#CA2030] font-medium mb-2 text-sm sm:text-base">{interview.jobTitle}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#666666] mb-3">
                        <div className="flex items-center">
                          <Calendar size={12} className="sm:w-4 sm:h-4 mr-1" />
                          <span>{interview.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={12} className="sm:w-4 sm:h-4 mr-1" />
                          <span>{interview.time}</span>
                        </div>
                        <div className="flex items-center">
                          <span>Duration: {interview.duration}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#666666]">
                        <div className="flex items-center">
                          <User size={12} className="sm:w-4 sm:h-4 mr-1" />
                          <span className="truncate">Interviewer: {interview.interviewer}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-1">{getModeIcon(interview.mode)}</span>
                          <span className="truncate">{interview.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interview Type and Status */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <span className="neu-small px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm text-[#333333] font-medium">
                      {interview.type}
                    </span>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(interview.status)}`}>
                      {interview.status}
                    </span>
                    <span className="text-xs text-[#666666] bg-[#E8EBEF] px-2 sm:px-3 py-1 rounded-full">
                      {interview.mode}
                    </span>
                  </div>

                  {/* Notes */}
                  {interview.notes && (
                    <p className="text-xs sm:text-sm text-[#666666] bg-[#F5F8FB] p-2 sm:p-3 rounded-2xl mb-3 sm:mb-4">
                      <strong>Notes:</strong> {interview.notes}
                    </p>
                  )}

                  {/* Feedback (for completed interviews) */}
                  {interview.feedback && (
                    <div className="bg-green-50 p-3 sm:p-4 rounded-2xl">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} className="sm:w-4 sm:h-4 text-green-600" />
                          <span className="text-green-600 font-medium text-xs sm:text-sm">Interview Completed</span>
                        </div>
                        <span className="text-xs sm:text-sm text-[#666666]">Rating: {interview.feedback.rating}/5</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#333333]">{interview.feedback.summary}</p>
                    </div>
                  )}
                </div>
  );
};
