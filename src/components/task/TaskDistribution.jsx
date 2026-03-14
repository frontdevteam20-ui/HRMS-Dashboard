import React from "react";
import { CheckSquare, BarChart3, TrendingUp } from "lucide-react";

const TaskDistribution = ({ tasksByPriority, navigate }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h2 className="text-xl font-bold text-[#333333] mb-6">Tasks by Priority</h2>

      <div className="space-y-6">
        {tasksByPriority.map((priority) => (
          <div key={priority.priority} className="neu-small p-4 rounded-xl text-center">
            <div className="text-2xl font-bold mb-2" style={{ color: priority.color }}>
              {priority.count}
            </div>
            <div className="text-[#666666] mb-3">{priority.priority} Priority</div>

            <div className="neu-card-inset rounded-lg p-1">
              <div
                className="h-2 rounded-lg transition-all duration-300"
                style={{
                  width: `${(priority.count / 158) * 100}%`,
                  backgroundColor: priority.color
                }}
              ></div>
            </div>
          </div>
        ))}

        {/* Quick Actions */}
        <div className="mt-8 space-y-3">
          <button
            onClick={() => navigate('/task-kanban')}
            className="w-full neu-button p-3 rounded-xl hover:text-[#CA2030] transition-colors"
          >
            <CheckSquare size={16} className="inline mr-2" />
            View Kanban Board
          </button>

          <button
            onClick={() => navigate('/task-timeline')}
            className="w-full neu-button p-3 rounded-xl hover:text-[#2C318E] transition-colors"
          >
            <BarChart3 size={16} className="inline mr-2" />
            View Timeline
          </button>

          <button
            onClick={() => navigate('/task-analytics')}
            className="w-full neu-button p-3 rounded-xl hover:text-[#CA2030] transition-colors"
          >
            <TrendingUp size={16} className="inline mr-2" />
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDistribution;
