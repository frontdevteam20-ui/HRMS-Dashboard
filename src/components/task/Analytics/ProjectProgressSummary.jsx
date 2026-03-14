import React from 'react';

export const ProjectProgressSummary = ({ projectProgress }) => {
  return (
    <div className="neu-card p-6 rounded-2xl mt-8">
      <h2 className="text-xl font-bold text-[#333333] mb-6">Project Progress Summary</h2>

      <div className="space-y-4">
        {projectProgress.map(project => (
          <div key={project.project} className="neu-small p-4 rounded-xl">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-[#333333]">{project.project}</h3>

              <div className="flex items-center space-x-4 text-sm">
                <span className="text-[#666666]">
                  {project.completed}/{project.tasks} tasks
                </span>
                <span className="font-bold text-[#EF5226]">{project.progress}%</span>
              </div>
            </div>

            <div className="neu-card-inset rounded-lg p-1 mb-3">
              <div
                className="h-3 neu-primary rounded-lg transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-xs text-[#666666]">
              <span>Budget: ${project.budget.toLocaleString()}</span>
              <span>
                Spent: ${project.spent.toLocaleString()} ({Math.round((project.spent / project.budget) * 100)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
