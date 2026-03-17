// MeetingsList.jsx
import React from 'react';
import { Calendar, Clock, Users, MapPin, Eye, Edit, Trash2, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const MeetingsList = ({ filteredMeetings, getStatusColor, onNavigate }) => {
  return (
    <div className="neu-card p-4 sm:p-6 lg:p-8 rounded-3xl">
      <div className="space-y-3 sm:space-y-4">
        {filteredMeetings.map((meeting) => (
          <div key={meeting.id} className="neu-small p-4 sm:p-6 rounded-2xl hover:scale-[1.01] sm:hover:scale-105 transition-transform duration-200">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 w-full">
                {/* Meeting Icon - Centered on mobile */}
                <div className="flex justify-center sm:block">
                  <div className="neu-small rounded-2xl p-3 sm:p-4">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#05A7CC]" />
                  </div>
                </div>

                {/* Meeting Info - Full width on mobile */}
                <div className="flex-1 min-w-0">
                  {/* Header with title and badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#333333] break-words">
                      {meeting.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      <div className={`neu-small px-2 sm:px-3 py-1 rounded-xl text-[10px] sm:text-xs font-medium ${getStatusColor(meeting.status)}`}>
                        {meeting.status.toUpperCase()}
                      </div>

                      {meeting.hasMinutes && (
                        <div className="neu-small px-2 sm:px-3 py-1 rounded-xl text-[10px] sm:text-xs font-medium bg-[#9C27B0] text-white">
                          MOM
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Meeting Details - Stack on mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#666666] flex-shrink-0" />
                      <span className="text-[#333333] truncate">
                        {new Date(meeting.date).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#666666] flex-shrink-0" />
                      <span className="text-[#333333] truncate">
                        {meeting.time} ({meeting.duration})
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#666666] flex-shrink-0" />
                      <span className="text-[#333333] truncate">
                        {meeting.participants.length} participants
                      </span>
                    </div>

                    <div className="flex items-start sm:items-center space-x-2">
                      <MapPin className="w-4 h-4 text-[#666666] flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span className="text-[#333333] break-words">{meeting.location}</span>
                    </div>
                  </div>

                  {/* Organizer & Attachments - Stack on mobile */}
                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                    <div className="text-sm text-[#666666] whitespace-nowrap">
                      <span>Organized by: </span>
                      <span className="font-medium text-[#333333]">{meeting.organizer}</span>
                    </div>

                    <div className="hidden sm:block text-[#666666]">•</div>

                    <div className="text-sm text-[#666666] whitespace-nowrap">
                      <span>Department: </span>
                      <span className="font-medium text-[#333333]">{meeting.department}</span>
                    </div>

                    {meeting.attachments > 0 && (
                      <>
                        <div className="hidden sm:block text-[#666666]">•</div>
                        <div className="flex items-center space-x-1 text-sm text-[#05A7CC] mt-1 sm:mt-0">
                          <Download className="w-4 h-4 flex-shrink-0" />
                          <span>{meeting.attachments} files</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Participants - Full width on mobile */}
                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <span className="text-sm text-[#666666] mb-1 sm:mb-0">Participants:</span>

                    <div className="flex -space-x-2">
                      {meeting.participants.slice(0, 4).map((participant, index) => (
                        <Avatar key={index} className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-[#ECF0F3]">
                          <AvatarImage src="/placeholder-avatar.jpg" />
                          <AvatarFallback className="bg-[#05A7CC] text-white text-[10px] sm:text-xs">
                            {participant.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      ))}

                      {meeting.participants.length > 4 && (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E8EBEF] border-2 border-[#ECF0F3] flex items-center justify-center">
                          <span className="text-[10px] sm:text-xs text-[#666666]">
                            +{meeting.participants.length - 4}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Full width on mobile */}
              <div className="flex justify-between sm:justify-end items-center sm:items-start mt-2 sm:mt-0 gap-2 sm:gap-3">
                <button
                  onClick={() => onNavigate('meeting-details', { id: meeting.id })}
                  className="neu-button p-2 sm:p-3 rounded-2xl text-[#05A7CC] hover:text-[#048ba8] transition-colors"
                  aria-label="View meeting details"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={() => onNavigate('edit-meeting', { id: meeting.id })}
                  className="neu-button p-2 sm:p-3 rounded-2xl text-[#666666] hover:text-[#333333] transition-colors"
                  aria-label="Edit meeting"
                >
                  <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button 
                  className="neu-button p-2 sm:p-3 rounded-2xl text-[#EF5226] hover:text-[#d4471f] transition-colors"
                  aria-label="Delete meeting"
                >
                  <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredMeetings.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="neu-card-inset p-6 sm:p-8 rounded-3xl inline-block max-w-full">
            <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-[#666666] mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-medium text-[#333333] mb-2">No meetings found</h3>
            <p className="text-sm sm:text-base text-[#666666] max-w-md mx-auto">Try adjusting your search filters or create a new meeting.</p>
          </div>
        </div>
      )}
    </div>
  );
};
