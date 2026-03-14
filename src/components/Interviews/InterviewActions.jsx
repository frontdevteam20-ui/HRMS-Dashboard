import React from 'react';
import { Eye, Edit, MoreVertical } from 'lucide-react';

export const InterviewActions = ({ interview, navigate }) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
      <button
        onClick={() => navigate('/interview-details', { interviewId: interview.id })}
        className="neu-button p-2.5 sm:p-3 rounded-xl sm:rounded-2xl hover:shadow-md transition-all duration-200 flex items-center justify-center"
        title="View Details"
      >
        <Eye size={16} className="sm:w-5 sm:h-5 text-[#2C318E]" />
      </button>

      {interview.status === 'Scheduled' && (
        <button
          onClick={() => navigate('/edit-job-opening', { interviewId: interview.id })}
          className="neu-button p-2.5 sm:p-3 rounded-xl sm:rounded-2xl hover:shadow-md transition-all duration-200 flex items-center justify-center"
          title="Edit Interview"
        >
          <Edit size={16} className="sm:w-5 sm:h-5 text-[#CA2030]" />
        </button>
      )}

      {interview.status === 'Completed' && !interview.feedback && (
        <button
          onClick={() => navigate('/interview-feedback', { interviewId: interview.id })}
          className="neu-secondary px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-white hover:shadow-lg transition-all duration-200 text-xs sm:text-sm w-full sm:w-auto"
        >
          Add Feedback
        </button>
      )}

      <button className="neu-button p-2.5 sm:p-3 rounded-xl sm:rounded-2xl hover:shadow-md transition-all duration-200 flex items-center justify-center">
        <MoreVertical size={16} className="sm:w-5 sm:h-5 text-[#666666]" />
      </button>
    </div>
  );
};
