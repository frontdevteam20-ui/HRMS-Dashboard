import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Building2, Eye, Edit, MoreVertical, Briefcase } from 'lucide-react';

const JobOpeningsTable = ({ jobs, getStatusColor, getPriorityColor }) => {
  const navigate = useNavigate();

  return (
    <div className="neu-card rounded-2xl sm:rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-[#fff]">
            <tr>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">Job Title</th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">Department</th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">Location</th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">Openings</th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">Applications</th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">Status</th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">Priority</th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">Posted</th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id} className={index % 2 === 0 ? 'bg-[#fff]' : 'bg-[#FDFAFA]'}>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <div>
                    <p className="font-medium text-[#333333] mb-1 text-sm sm:text-base">{job.title}</p>
                    <p className="text-xs sm:text-sm text-[#666666]">{job.jobType}</p>
                  </div>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <div className="flex items-center">
                    <Building2 size={14} className="sm:w-4 sm:h-4 text-[#666666] mr-1 sm:mr-2" />
                    <span className="text-[#333333] text-sm sm:text-base">{job.department}</span>
                  </div>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <div className="flex items-center">
                    <MapPin size={14} className="sm:w-4 sm:h-4 text-[#666666] mr-1 sm:mr-2" />
                    <span className="text-[#333333] text-sm sm:text-base">{job.location}</span>
                  </div>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <span className="text-[#333333] font-medium text-sm sm:text-base">{job.openings}</span>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <span className="text-[#333333] font-medium text-sm sm:text-base">{job.applications}</span>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                    {job.status}
                  </span>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(job.priority)}`}>
                    {job.priority}
                  </span>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <div className="flex items-center">
                    <Calendar size={14} className="sm:w-4 sm:h-4 text-[#666666] mr-1 sm:mr-2" />
                    <span className="text-[#333333] text-xs sm:text-sm">{job.postedDate}</span>
                  </div>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <button
                      onClick={() => navigate('/job-opening-details')}
                      className="neu-small p-1.5 sm:p-2 rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-200"
                      title="View Details"
                    >
                      <Eye size={14} className="sm:w-4 sm:h-4 text-[#2C318E]" />
                    </button>
                    <button
                      onClick={() => navigate('/edit-job-opening')}
                      className="neu-small p-1.5 sm:p-2 rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-200"
                      title="Edit"
                    >
                      <Edit size={14} className="sm:w-4 sm:h-4 text-[#CA2030]" />
                    </button>
                    <button
                      className="neu-small p-1.5 sm:p-2 rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-200"
                      title="More Actions"
                    >
                      <MoreVertical size={14} className="sm:w-4 sm:h-4 text-[#666666]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {jobs.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <Briefcase size={32} className="sm:w-12 sm:h-12 text-[#666666] mx-auto mb-3 sm:mb-4" />
          <p className="text-[#666666] text-base sm:text-lg">No job openings found</p>
          <p className="text-[#666666] text-xs sm:text-sm">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default JobOpeningsTable;
