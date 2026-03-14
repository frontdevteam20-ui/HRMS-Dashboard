import React from 'react';
import { Plus, X } from 'lucide-react';

export const AgendaSection = ({
  agenda,
  handleAgendaChange,
  addAgendaItem,
  removeAgendaItem
}) => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#333333]">Meeting Agenda</h2>
        <button 
          onClick={addAgendaItem}
          className="neu-button p-3 rounded-2xl text-[#05A7CC] hover:text-[#048ba8]"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {agenda.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="neu-card-inset w-10 h-10 rounded-xl flex items-center justify-center">
              <span className="text-sm font-bold text-[#05A7CC]">{index + 1}</span>
            </div>

            <div className="flex-1 neu-input p-4 rounded-2xl">
              <input
                type="text"
                value={item}
                onChange={(e) => handleAgendaChange(index, e.target.value)}
                className="w-full bg-transparent outline-none text-[#333333] placeholder-[#999999]"
                placeholder="Enter agenda item"
              />
            </div>

            {agenda.length > 1 && (
              <button 
                onClick={() => removeAgendaItem(index)}
                className="neu-button p-3 rounded-2xl text-[#EF5226] hover:text-[#d4471f]"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
