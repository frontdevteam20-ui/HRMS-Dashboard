import React from 'react';
import { Calendar } from 'lucide-react';

const PendingTasks = ({ tasks, getPriorityColor }) => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#333333] mb-2">Pending Clearance</h3>
        <p className="text-[#666666]">Critical offboarding tasks</p>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="neu-small p-4 rounded-2xl">
            <div className="mb-2">
              <h4 className="font-medium text-[#333333] text-sm">{task.task}</h4>
              <p className="text-xs text-[#666666]">For: {task.employee}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar size={12} className="text-[#666666]" />
                <span className="text-xs text-[#666666]">{new Date(task.dueDate).toLocaleDateString()}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </div>
            <p className="text-xs text-[#999999] mt-2">Assigned to: {task.assignee}</p>
          </div>
        ))}
      </div>

      <button className="w-full neu-button p-3 rounded-2xl mt-4 hover:text-[#CA2030] transition-colors">
        View All Tasks
      </button>
    </div>
  );
};

export default PendingTasks;
