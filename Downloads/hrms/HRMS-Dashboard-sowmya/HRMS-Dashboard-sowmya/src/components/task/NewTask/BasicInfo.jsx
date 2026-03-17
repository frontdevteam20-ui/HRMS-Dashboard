import React from 'react';
import { FileText } from 'lucide-react';

export const BasicInfo = ({ formData, errors, handleInputChange }) => {
  const projects = [
    'E-commerce Platform',
    'Mobile App Development',
    'API Gateway Microservices',
    'Data Analytics Dashboard',
    'Security Audit System'
  ];

  return (
    <div className="neu-card p-6 rounded-2xl">
      <h2 className="text-xl font-bold text-[#333333] mb-6 flex items-center">
        <FileText size={20} className="mr-2 text-[#CA2030]" />
        Basic Information
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-[#333333] font-medium mb-2">Task Title *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="Enter task title..."
            className={`w-full neu-input p-4 rounded-xl text-[#333333] placeholder-[#666666] focus:ring-2 focus:ring-[#CA2030] transition-all ${
              errors.title ? 'ring-2 ring-red-500' : ''
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-[#333333] font-medium mb-2">Description *</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe the task in detail..."
            rows={4}
            className={`w-full neu-input p-4 rounded-xl text-[#333333] placeholder-[#666666] focus:ring-2 focus:ring-[#CA2030] transition-all resize-none ${
              errors.description ? 'ring-2 ring-red-500' : ''
            }`}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#333333] font-medium mb-2">Project *</label>
            <select
              value={formData.project}
              onChange={(e) => handleInputChange('project', e.target.value)}
              className={`w-full neu-input p-4 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all ${
                errors.project ? 'ring-2 ring-red-500' : ''
              }`}
            >
              <option value="">Select Project</option>
              {projects.map(project => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
            {errors.project && <p className="text-red-500 text-sm mt-1">{errors.project}</p>}
          </div>

          <div>
            <label className="block text-[#333333] font-medium mb-2">Priority</label>
            <select
              value={formData.priority}
              onChange={(e) => handleInputChange('priority', e.target.value)}
              className="w-full neu-input p-4 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
