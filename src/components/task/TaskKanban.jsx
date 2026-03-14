import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus, User, Calendar, Flag, Paperclip, MessageCircle, Eye, MoreHorizontal } from 'lucide-react';
import { BoardStatistics } from './Kanban/BoardStatistics';
import { initialTasks, kanbanColumns } from '../task/data/taskData';
import { KanbanBoard } from './Kanban/KanbanBoard';

export const TaskKanban = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState('all');
  const [draggedTask, setDraggedTask] = useState(null);
  const [taskList, setTaskList] = useState(initialTasks);

  // Define kanban columns at component level
  

  // Update column counts when tasks change
  useEffect(() => {
    kanbanColumns.forEach(column => {
      column.count = taskList.filter(task => task.status === column.id).length;
    });
  }, [taskList]);

  const getPriorityColor = (priority) => {
    const colors = {
      'high': '#CA2030',
      'medium': '#FFC107',
      'low': '#4CAF50'
    };
    return colors[priority] || '#666666';
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('text/plain', task.id);
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.classList.add('opacity-50');
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove('opacity-50');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('ring-2', 'ring-[#CA2030]');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('ring-2', 'ring-[#CA2030]');
  };

  const handleDrop = (e, targetStatus) => {
    e.preventDefault();
    e.currentTarget.classList.remove('ring-2', 'ring-[#CA2030]');
    
    if (!draggedTask || draggedTask.status === targetStatus) return;

    // Update the task status in the state
    setTaskList(prevTasks => 
      prevTasks.map(task => 
        task.id === draggedTask.id 
          ? { ...task, status: targetStatus } 
          : task
      )
    );
    
    // In a real app, you would make an API call here to update the task status in the backend
    console.log(`Moving task ${draggedTask.id} to ${targetStatus}`);
    
    // Reset dragged task
    setDraggedTask(null);
  };

  const TaskCard = ({ task }) => (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, task)}
      onDragEnd={handleDragEnd}
      className="p-4 rounded-xl mb-4 cursor-move transition-all duration-200 group border-l-4 draggable-task bg-white shadow-sm hover:shadow-md"
      style={{ borderLeftColor: task.assignee.color }}
      data-task-id={task.id}
    >
      {/* Task Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-[#333333] text-sm mb-1 group-hover:text-[#CA2030] transition-colors">
            {task.title}
          </h4>
          <span className="text-xs text-[#666666] bg-[#E8EBEF] px-2 py-1 rounded">
            {task.id}
          </span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => navigate('/task-details', { taskId: task.id })}
            className="neu-small p-1 rounded-lg hover:text-[#CA2030] transition-colors"
          >
            <Eye size={12} />
          </button>
        </div>
      </div>

      {/* Task Description */}
      <p className="text-xs text-[#666666] mb-3 line-clamp-2">
        {task.description}
      </p>

      {/* Progress Bar (for in-progress tasks) */}
      {task.status === 'in-progress' && (
        <div className="mb-3">
          <div className="flex justify-between text-xs text-[#666666] mb-1">
            <span>Progress</span>
            <span>{task.completedHours}/{task.estimatedHours}h</span>
          </div>
          <div className="neu-card-inset rounded-lg p-1">
            <div 
              className="h-2 neu-secondary rounded-lg transition-all duration-300"
              style={{ width: `${(task.completedHours / task.estimatedHours) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {task.tags.slice(0, 2).map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-[#E8EBEF] text-[#666666] rounded text-xs">
            {tag}
          </span>
        ))}
        {task.tags.length > 2 && (
          <span className="px-2 py-1 bg-[#E8EBEF] text-[#666666] rounded text-xs">
            +{task.tags.length - 2}
          </span>
        )}
      </div>

      {/* Task Meta */}
      <div className="flex items-center justify-between text-xs text-[#666666] mb-3">
        <div className="flex items-center">
          <Calendar size={12} className="mr-1" />
          {task.dueDate}
        </div>
        <div className="flex items-center space-x-2">
          <Flag size={12} style={{ color: getPriorityColor(task.priority) }} />
          <span style={{ color: getPriorityColor(task.priority) }}>
            {task.priority}
          </span>
        </div>
      </div>

      {/* Task Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div 
            className="neu-small w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: task.assignee.color }}
            title={task.assignee.name}
          >
            {task.assignee.avatar}
          </div>
          <span className="text-xs text-[#666666]">{task.assignee.name}</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-[#666666]">
          {task.attachments > 0 && (
            <div className="flex items-center">
              <Paperclip size={12} className="mr-1" />
              {task.attachments}
            </div>
          )}
          <div className="flex items-center">
            <MessageCircle size={12} className="mr-1" />
            {task.comments}
          </div>
        </div>
      </div>
    </div>
  );

  const filteredTasks = taskList.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProject = selectedProject === 'all' || task.project === selectedProject;
    return matchesSearch && matchesProject;
  });

  const projects = [...new Set(taskList.map(task => task.project))];

  // Layout: Kanban Board with Drag & Drop
  return (
    <div className="p-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Task Status (Kanban)</h1>
        <p className="text-[#666666]">Manage tasks with drag-and-drop kanban board</p>
      </div>

      {/* Filters */}
      <div className="neu-card p-6 rounded-2xl mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-4 top-[60%] transform -translate-y-1/2 text-[#CA2030]" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 neu-input rounded-xl text-[#333333] placeholder-[#666666] focus:ring-2 focus:ring-[#CA2030] transition-all"
              />
            </div>

            {/* Project Filter */}
            <div className="relative">
              <select 
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="neu-input px-4 py-3 pr-10 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all appearance-none w-full min-w-[180px]"
              >
                <option value="all">All Projects</option>
                {projects.map(project => (
                  <option key={project} value={project}>{project}</option>
                ))}
              </select>
              <div className="absolute right-3 top-[65%] -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-[#CA2030]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="neu-button px-6 py-3 rounded-xl flex items-center hover:text-[#CA2030] transition-colors">
              <Filter size={16} className="mr-2" />
              More Filters
            </button>
            <button 
              onClick={() => navigate('/new-task')}
              className="neu-primary px-6 py-3 rounded-xl flex items-center hover:shadow-xl transition-all"
            >
              <Plus size={16} className="mr-2" />
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
            <KanbanBoard
          kanbanColumns={kanbanColumns}
          filteredTasks={filteredTasks}
          navigate={navigate}
          TaskCard={TaskCard}
          handleDragOver={handleDragOver}
          handleDragEnter={handleDragEnter}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
        />
      {/* Kanban Stats */}
     <BoardStatistics tasks={filteredTasks} />

    </div>
  );
};