import React, { useState } from 'react';
import { Save, X, Upload, Plus, Trash2, Calendar, User, Flag, Tag, Clock, FileText, Paperclip } from 'lucide-react';
import { BasicInfo } from './NewTask/BasicInfo';
import { AssignmentTimeline } from './NewTask/AssignmentTimeline';
import { TagsSection } from './NewTask/TagsSection';
import { DependenciesSection } from './NewTask/DependenciesSection';
import {FileAttachments} from './NewTask/FileAttachments'

export const AddNewTask = ({ defaultStatus, onNavigate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    project: '',
    assignee: '',
    dueDate: '',
    estimatedHours: '',
    status: defaultStatus || 'todo',
    tags: [],
    dependencies: [],
    attachments: []
  });

  const [newTag, setNewTag] = useState('');
  const [errors, setErrors] = useState({});

  const projects = [
    'E-commerce Platform',
    'Mobile App Development',
    'API Gateway Microservices',
    'Data Analytics Dashboard',
    'Security Audit System'
  ];

  const teamMembers = [
    { id: 1, name: 'Lion', email: 'john@company.com', avatar: 'JD', role: 'Frontend Lead' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@company.com', avatar: 'SW', role: 'Designer' },
    { id: 3, name: 'Mike Johnson', email: 'mike@company.com', avatar: 'MJ', role: 'Backend Dev' },
    { id: 4, name: 'Emma Brown', email: 'emma@company.com', avatar: 'EB', role: 'QA Lead' },
    { id: 5, name: 'David Lee', email: 'david@company.com', avatar: 'DL', role: 'DevOps' },
    { id: 6, name: 'Lisa Chen', email: 'lisa@company.com', avatar: 'LC', role: 'Mobile Dev' }
  ];

  const availableTasks = [
    { id: 'TASK-001', title: 'User Authentication System' },
    { id: 'TASK-002', title: 'Database Schema Design' },
    { id: 'TASK-003', title: 'Payment Gateway Integration' },
    { id: 'TASK-004', title: 'Responsive UI Components' },
    { id: 'TASK-005', title: 'API Documentation' }
  ];

  const predefinedTags = [
    'Frontend', 'Backend', 'Database', 'Security', 'Testing', 'UI/UX', 
    'API', 'Performance', 'Documentation', 'Bug Fix', 'Feature', 'Refactor'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleAddDependency = (taskId) => {
    if (!formData.dependencies.includes(taskId)) {
      setFormData(prev => ({
        ...prev,
        dependencies: [...prev.dependencies, taskId]
      }));
    }
  };

  const handleRemoveDependency = (taskId) => {
    setFormData(prev => ({
      ...prev,
      dependencies: prev.dependencies.filter(id => id !== taskId)
    }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files.map(file => ({
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type
      }))]
    }));
  };

  const handleRemoveAttachment = (attachmentId) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter(att => att.id !== attachmentId)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Task title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Task description is required';
    }

    if (!formData.project) {
      newErrors.project = 'Project selection is required';
    }

    if (!formData.assignee) {
      newErrors.assignee = 'Assignee is required';
    }

    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required';
    }

    if (!formData.estimatedHours || formData.estimatedHours <= 0) {
      newErrors.estimatedHours = 'Valid estimated hours required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your API
      onNavigate('task-kanban');
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': 'text-[#CA2030] bg-red-100',
      'medium': 'text-[#FFC107] bg-yellow-100',
      'low': 'text-[#4CAF50] bg-green-100'
    };
    return colors[priority] || 'text-[#666666] bg-gray-100';
  };

  // Layout: Neumorphic Form Design
  return (
    <div className="p-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Add New Task</h1>
        <p className="text-[#666666]">Create a new task with detailed specifications and assignments</p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-8xl ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
           <BasicInfo
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
        />
            {/* Assignment & Timeline */}
           <AssignmentTimeline
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
          teamMembers={teamMembers}
        />
            {/* Tags */}
           <TagsSection
        formData={formData}
        newTag={newTag}
        setNewTag={setNewTag}
        handleAddTag={handleAddTag}
        handleRemoveTag={handleRemoveTag}
        predefinedTags={predefinedTags}
        setFormData={setFormData}
      />
            {/* Dependencies */}
          <DependenciesSection
          formData={formData}
          availableTasks={availableTasks}
          handleAddDependency={handleAddDependency}
          handleRemoveDependency={handleRemoveDependency}
        />
            {/* File Attachments */}
        <FileAttachments
        attachments={formData.attachments}
        handleFileUpload={handleFileUpload}
        handleRemoveAttachment={handleRemoveAttachment}
        formatFileSize={formatFileSize}
      />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Task Preview */}
            <div className="neu-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[#333333] mb-4">Task Preview</h3>
              <div className="space-y-3">
                <div className="neu-small p-3 rounded-xl">
                  <div className="text-[#666666] text-sm">Priority</div>
                  <div className={`inline-block px-2 py-1 rounded-lg text-sm font-medium ${getPriorityColor(formData.priority)}`}>
                    {formData.priority}
                  </div>
                </div>
                
                <div className="neu-small p-3 rounded-xl">
                  <div className="text-[#666666] text-sm">Status</div>
                  <div className="font-medium text-[#333333] capitalize">{formData.status.replace('-', ' ')}</div>
                </div>
                
                {formData.estimatedHours && (
                  <div className="neu-small p-3 rounded-xl">
                    <div className="text-[#666666] text-sm">Estimated Time</div>
                    <div className="font-medium text-[#333333]">{formData.estimatedHours} hours</div>
                  </div>
                )}
                
                {formData.tags.length > 0 && (
                  <div className="neu-small p-3 rounded-xl">
                    <div className="text-[#666666] text-sm mb-2">Tags</div>
                    <div className="flex flex-wrap gap-1">
                      {formData.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-[#E8EBEF] text-[#666666] rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {formData.tags.length > 3 && (
                        <span className="px-2 py-1 bg-[#E8EBEF] text-[#666666] rounded text-xs">
                          +{formData.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="neu-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[#333333] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => onNavigate('task-kanban')}
                  className="w-full neu-button p-3 rounded-xl hover:text-[#CA2030] transition-colors"
                >
                  <X size={16} className="inline mr-2" />
                  Cancel
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    // Save as draft functionality
                    console.log('Saving as draft...');
                  }}
                  className="w-full neu-button p-3 rounded-xl hover:text-[#2C318E] transition-colors"
                >
                  <Clock size={16} className="inline mr-2" />
                  Save as Draft
                </button>
              </div>
            </div>

            {/* Form Actions */}
            <div className="neu-card p-6 rounded-2xl">
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full neu-primary py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center"
                >
                  <Save size={16} className="mr-2" />
                  Create Task
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    if (validateForm()) {
                      // Create and assign to current user
                      console.log('Creating and assigning to me...');
                    }
                  }}
                  className="w-full neu-secondary py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center"
                >
                  <User size={16} className="mr-2" />
                  Create & Assign to Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};