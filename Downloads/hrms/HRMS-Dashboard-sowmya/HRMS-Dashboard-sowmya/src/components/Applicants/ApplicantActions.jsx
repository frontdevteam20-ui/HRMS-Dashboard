import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, FileText, ArrowRight, MoreVertical } from 'lucide-react';

export const ApplicantActions = ({ applicant }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => navigate('/applicant-details', { applicantId: applicant.id })}
        className="neu-button p-3 rounded-2xl hover:shadow-md transition-all duration-200"
        title="View Details"
      >
        <Eye size={20} className="text-[#2C318E]" />
      </button>
      
      <button
        onClick={() => navigate('/applicant-resume')}
        className="neu-button p-3 rounded-2xl hover:shadow-md transition-all duration-200"
        title="View Resume"
      >
        <FileText size={20} className="text-[#CA2030]" />
      </button>

      <button
        onClick={() => navigate('/applicant-actions')}
        className="neu-secondary px-4 py-3 rounded-2xl flex items-center space-x-2 text-white hover:shadow-lg transition-all duration-200"
      >
        <span>Actions</span>
        <ArrowRight size={16} />
      </button>

      <button className="neu-button p-3 rounded-2xl hover:shadow-md transition-all duration-200">
        <MoreVertical size={20} className="text-[#666666]" />
      </button>
    </div>
  );
};
