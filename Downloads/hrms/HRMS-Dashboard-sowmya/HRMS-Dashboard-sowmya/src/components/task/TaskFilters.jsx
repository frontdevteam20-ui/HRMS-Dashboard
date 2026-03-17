import React from "react";
import { Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TaskFilters = ({ dateFilter, setDateFilter }) => {
  const navigate = useNavigate();

  return (
    <div className="neu-card p-6 rounded-2xl mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="neu-input px-4 py-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all"
          >
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="this-quarter">This Quarter</option>
            <option value="custom">Custom Range</option>
          </select>

          <button className="neu-button px-4 py-3 rounded-xl flex items-center hover:text-[#CA2030] transition-colors">
            <Filter size={16} className="mr-2" />
            More Filters
          </button>
        </div>

        {/* Right side */}
        <div className="flex space-x-3">
          <button
            onClick={() => navigate('/task-projects')}
            className="neu-button px-6 py-3 rounded-xl hover:text-[#CA2030] transition-colors"
          >
            View All Projects
          </button>

          <button
            onClick={() => navigate('/new-task')}
            className="neu-primary px-6 py-3 rounded-xl hover:shadow-xl transition-all"
          >
            Create New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskFilters;
