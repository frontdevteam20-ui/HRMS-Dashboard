import React from 'react';
import { Flag, Trash2 } from 'lucide-react';

export const DependenciesSection = ({ formData, availableTasks, handleAddDependency, handleRemoveDependency }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h2 className="text-xl font-bold text-[#333333] mb-6 flex items-center">
        <Flag size={20} className="mr-2 text-[#9C27B0]" />
        Dependencies
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-[#333333] font-medium mb-2">This task depends on:</label>
          <select
            onChange={(e) => handleAddDependency(e.target.value)}
            className="w-full neu-input p-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all"
          >
            <option value="">Select a dependency</option>
            {availableTasks.filter(task => !formData.dependencies.includes(task.id)).map(task => (
              <option key={task.id} value={task.id}>
                {task.id} - {task.title}
              </option>
            ))}
          </select>
        </div>

        {formData.dependencies.length > 0 && (
          <div className="space-y-2">
            {formData.dependencies.map(depId => {
              const task = availableTasks.find(t => t.id === depId);
              return (
                <div key={depId} className="neu-small p-3 rounded-xl flex items-center justify-between">
                  <span className="text-[#333333]">
                    <strong>{task?.id}</strong> - {task?.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveDependency(depId)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
