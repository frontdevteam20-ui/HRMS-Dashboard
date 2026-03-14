import React from 'react';

export const BasicInformation = ({ formData, handleInputChange }) => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-[#333333] mb-6">Meeting Information</h2>

      <div className="space-y-6">
        {/* Meeting Title */}
        <div>
          <label className="block text-[#333333] font-medium mb-3">Meeting Title *</label>
          <div className="neu-input p-4 rounded-2xl">
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333] placeholder-[#999999]"
              placeholder="Enter meeting title"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-[#333333] font-medium mb-3">Description</label>
          <div className="neu-input p-4 rounded-2xl">
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              className="w-full bg-transparent outline-none text-[#333333] placeholder-[#999999] resize-none"
              placeholder="Enter meeting description and objectives"
            />
          </div>
        </div>

        {/* Department + Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#333333] font-medium mb-3">Department</label>
            <div className="neu-input p-4 rounded-2xl">
              <select
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                className="w-full bg-transparent outline-none text-[#333333]"
              >
                <option value="">Select department</option>
                <option value="Engineering">Engineering</option>
                <option value="Product">Product</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">Human Resources</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[#333333] font-medium mb-3">Priority</label>
            <div className="neu-input p-4 rounded-2xl">
              <select
                value={formData.priority}
                onChange={(e) => handleInputChange('priority', e.target.value)}
                className="w-full bg-transparent outline-none text-[#333333]"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
