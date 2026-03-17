import React from 'react';
import { Plus } from 'lucide-react';

export const KanbanBoard = ({
  kanbanColumns,
  filteredTasks,
  navigate,
  TaskCard,
  handleDragOver,
  handleDragEnter,
  handleDragLeave,
  handleDrop
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {kanbanColumns.map((column) => (
        <div
          key={column.id}
          className="neu-card p-6 rounded-2xl h-fit transition-all duration-200"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, column.id)}
        >
          {/* Column Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-3"
                style={{ backgroundColor: column.color }}
              ></div>
              <h3 className="text-lg font-bold text-[#333333]">{column.title}</h3>
            </div>
            <div
              className="px-3 py-1 rounded-full text-white text-sm font-medium neu-small"
              style={{ backgroundColor: column.color }}
            >
              {filteredTasks.filter((task) => task.status === column.id).length}
            </div>
          </div>

          {/* Tasks in Column */}
          <div
            className="space-y-4 min-h-96 transition-all duration-200"
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, column.id)}
            data-column-id={column.id}
          >
            {filteredTasks
              .filter((task) => task.status === column.id)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}

            {/* Empty State */}
            {filteredTasks.filter((task) => task.status === column.id).length === 0 && (
              <div className="neu-card-inset p-8 rounded-xl text-center">
                <div className="text-[#666666] mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8EBEF] flex items-center justify-center mx-auto mb-3">
                    <Plus size={24} className="text-[#666666]" />
                  </div>
                  <p className="text-sm">No tasks in {column.title.toLowerCase()}</p>
                  <p className="text-xs mt-1">Drag tasks here or create new ones</p>
                </div>
              </div>
            )}
          </div>

          {/* Add Task Button */}
          <button
            onClick={() => navigate('/new-task', { defaultStatus: column.id })}
            className="w-full mt-6 neu-button py-3 rounded-xl flex items-center justify-center hover:text-[#CA2030] transition-colors group"
          >
            <Plus size={16} className="mr-2 group-hover:text-[#CA2030]" />
            Add Task to {column.title}
          </button>
        </div>
      ))}
    </div>
  );
};
