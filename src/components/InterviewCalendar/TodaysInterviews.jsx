import React from 'react';
import { Clock, User, Video, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const getModeIcon = (mode) => {
  switch (mode) {
    case 'Video Call': return <Video size={12} className="text-[#2C318E]" />;
    case 'Phone': return <Phone size={12} className="text-[#CA2030]" />;
    case 'In-Person': return <MapPin size={12} className="text-[#666666]" />;
    default: return <Clock size={12} className="text-[#666666]" />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Scheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
    case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const TodaysInterviews = ({ interviews }) => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];

  const todaysInterviews = interviews.filter(interview => interview.date === today);

  return (
    <div className="mt-8 neu-card p-8 rounded-3xl">
      <h3 className="text-xl font-bold text-[#333333] mb-6">Today's Interviews</h3>

      {todaysInterviews.length > 0 ? (
        <div className="space-y-4">
          {todaysInterviews.map(interview => (
            <div key={interview.id} className="neu-small p-6 rounded-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="neu-small w-12 h-12 rounded-2xl flex items-center justify-center">
                    <User size={24} className="text-[#666666]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#333333] mb-1">{interview.candidateName}</h4>
                    <p className="text-[#CA2030] text-sm font-medium mb-1">{interview.jobTitle}</p>
                    <div className="flex items-center space-x-4 text-xs text-[#666666]">
                      <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        <span>{interview.time}</span>
                      </div>
                      <div className="flex items-center">
                        {getModeIcon(interview.mode)}
                        <span className="ml-1">{interview.mode}</span>
                      </div>
                      <span>{interview.interviewer}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(interview.status)}`}>
                    {interview.status}
                  </span>
                  <button
                    onClick={() => navigate('/interview-details', { state: { interviewId: interview.id } })}
                    className="neu-button p-2 rounded-xl hover:shadow-md transition-all duration-200"
                  >
                    <Eye size={16} className="text-[#2C318E]" />
                  </button>
                  <button
                    onClick={() => navigate('/edit-interview', { state: { interviewId: interview.id } })}
                    className="neu-button p-2 rounded-xl hover:shadow-md transition-all duration-200"
                  >
                    <Edit size={16} className="text-[#CA2030]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <Clock size={48} className="text-[#666666] mx-auto mb-4" />
          <p className="text-[#666666] text-lg">No interviews scheduled for today</p>
          <button
            onClick={() => navigate('/new-interview')}
            className="neu-primary px-6 py-3 rounded-2xl mt-4 hover:shadow-lg transition-all duration-200"
          >
            Schedule Interview
          </button>
        </div>
      )}
    </div>
  );
};
