import React from "react";
import { Users, Calendar } from "lucide-react";

const RecentProjects = ({ recentProjects, navigate, getStatusColor, getPriorityColor }) => {
  return (
    <div className="lg:col-span-2 neu-card p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#333333]">Recent Projects</h2>

        <button 
          onClick={() => navigate('/task-projects')}
          className="neu-button px-4 py-2 rounded-xl text-sm hover:text-[#CA2030] transition-colors"
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {recentProjects.map((project) => (
          <div key={project.name} className="neu-small p-4 rounded-xl hover:shadow-md transition-all">
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <h3 className="font-semibold text-[#333333]">{project.name}</h3>

                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status.replace('-', ' ')}
                </span>

                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                  {project.priority}
                </span>
              </div>

              <div className="flex items-center space-x-4 text-sm text-[#666666]">
                <span className="flex items-center">
                  <Users size={14} className="mr-1" />
                  {project.team}
                </span>

                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {project.deadline}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#666666]">
                Progress: {project.tasks.completed}/{project.tasks.total} tasks
              </span>
              <span className="text-sm font-bold text-[#CA2030]">{project.progress}%</span>
            </div>

            <div className="neu-card-inset rounded-lg p-1">
              <div
                className="h-2 neu-primary rounded-lg transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
