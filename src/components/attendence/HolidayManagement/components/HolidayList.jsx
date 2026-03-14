import React from 'react';
import { Globe, MapPin, Building, Edit3, Trash2 } from 'lucide-react';

export const HolidayList = ({ 
  filteredHolidays, 
  onHolidaySelect, 
  getTypeIcon, 
  getTypeColor 
}) => {
  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {filteredHolidays.map(holiday => {
        const TypeIcon = getTypeIcon(holiday.type);
        return (
          <div 
            key={holiday.id} 
            className="neu-small p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group"
            onClick={() => onHolidaySelect(holiday)}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center">
                <div className="neu-small p-2 rounded-lg mr-3" style={{ backgroundColor: holiday.color }}>
                  <TypeIcon size={14} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#333333] group-hover:text-[#CA2030] transition-colors">
                    {holiday.name}
                  </div>
                  <div className="text-[#666666] text-xs">
                    {new Date(holiday.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                <button className="neu-small p-1 rounded-lg hover:text-[#CA2030]">
                  <Edit3 size={12} />
                </button>
                <button className="neu-small p-1 rounded-lg hover:text-red-500">
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
            <div className="text-xs text-[#666666] mb-2">
              {holiday.description.substring(0, 60)}
              {holiday.description.length > 60 && '...'}
            </div>
            <div className="flex items-center justify-between">
              <span className={`inline-block px-2 py-1 rounded-lg text-xs font-medium border ${getTypeColor(holiday.type)}`}>
                {holiday.type}
              </span>
              <span className={`text-xs font-medium ${
                holiday.optional ? 'text-yellow-600' : 'text-green-600'
              }`}>
                {holiday.optional ? 'Optional' : 'Mandatory'}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
