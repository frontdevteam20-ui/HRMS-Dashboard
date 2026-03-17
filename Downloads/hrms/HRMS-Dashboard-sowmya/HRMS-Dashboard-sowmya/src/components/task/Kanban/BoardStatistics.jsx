import React from 'react';

export const BoardStatistics = ({ tasks }) => {
  const totalTasks = tasks.length;
  const inProgress = tasks.filter(t => t.status === 'in-progress').length;
  const completed = tasks.filter(t => t.status === 'done').length;
  const highPriority = tasks.filter(t => t.priority === 'high').length;

  return (
    <div className="mt-8 neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-4">Board Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="neu-small p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-[#333333] mb-1">{totalTasks}</div>
          <div className="text-[#666666] text-sm">Total Tasks</div>
        </div>
        <div className="neu-small p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-[#2C318E] mb-1">{inProgress}</div>
          <div className="text-[#666666] text-sm">In Progress</div>
        </div>
        <div className="neu-small p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-[#4CAF50] mb-1">{completed}</div>
          <div className="text-[#666666] text-sm">Completed</div>
        </div>
        <div className="neu-small p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-[#CA2030] mb-1">{highPriority}</div>
          <div className="text-[#666666] text-sm">High Priority</div>
        </div>
      </div>
    </div>
  );
};
