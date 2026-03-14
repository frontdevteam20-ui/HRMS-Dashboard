import React from 'react';
import { User } from 'lucide-react';

export const AssignmentTimeline = ({ formData, errors, handleInputChange, teamMembers }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h2 className="text-xl font-bold text-[#333333] mb-6 flex items-center">
        <User size={20} className="mr-2 text-[#2C318E]" />
        Assignment & Timeline
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#333333] font-medium mb-2">Assignee *</label>
          <select
            value={formData.assignee}
            onChange={(e) => handleInputChange('assignee', e.target.value)}
            className={`w-full neu-input p-4 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all ${
              errors.assignee ? 'ring-2 ring-red-500' : ''
            }`}
          >
            <option value="">Select Assignee</option>
            {teamMembers.map(member => (
              <option key={member.id} value={member.id}>
                {member.name} - {member.role}
              </option>
            ))}
          </select>
          {errors.assignee && <p className="text-red-500 text-sm mt-1">{errors.assignee}</p>}
        </div>

        <div>
          <label className="block text-[#333333] font-medium mb-2">Due Date *</label>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) => handleInputChange('dueDate', e.target.value)}
            className={`w-full neu-input p-4 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all ${
              errors.dueDate ? 'ring-2 ring-red-500' : ''
            }`}
          />
          {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>}
        </div>

        <div>
          <label className="block text-[#333333] font-medium mb-2">Estimated Hours *</label>
          <input
            type="number"
            value={formData.estimatedHours}
            onChange={(e) => handleInputChange('estimatedHours', e.target.value)}
            placeholder="8"
            min="1"
            className={`w-full neu-input p-4 rounded-xl text-[#333333] placeholder-[#666666] focus:ring-2 focus:ring-[#CA2030] transition-all ${
              errors.estimatedHours ? 'ring-2 ring-red-500' : ''
            }`}
          />
          {errors.estimatedHours && <p className="text-red-500 text-sm mt-1">{errors.estimatedHours}</p>}
        </div>

        <div>
          <label className="block text-[#333333] font-medium mb-2">Initial Status</label>
          <select
            value={formData.status}
            onChange={(e) => handleInputChange('status', e.target.value)}
            className="w-full neu-input p-4 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all"
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="review">Review</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
    </div>
  );
};
