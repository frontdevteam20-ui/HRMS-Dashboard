import React from 'react';
import { Calendar, Globe, MapPin, Building } from 'lucide-react';

// ... existing imports ...

export const HolidayStats = ({ holidays = [] }) => {  // Added default empty array to prevent errors
  const stats = [
    {
      label: 'Total Holidays',
      value: holidays.length,
      icon: Calendar,
      bgColor: 'bg-[#EF5226]',
      textColor: 'text-[#333333]'
    },
    {
      label: 'National Holidays',
      value: holidays.filter(h => h.type === 'national').length,
      icon: Globe,
      bgColor: 'bg-[#05A7CC]',
      textColor: 'text-[#05A7CC]'
    },
    {
      label: 'Religious Holidays',
      value: holidays.filter(h => h.type === 'religious').length,
      icon: MapPin,
      bgColor: 'bg-purple-600',
      textColor: 'text-purple-600'
    },
    {
      label: 'Company Holidays',
      value: holidays.filter(h => h.type === 'company').length,
      icon: Building,
      bgColor: 'bg-[#CA2030]',
      textColor: 'text-[#CA2030]'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="neu-card p-6 rounded-2xl hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</h3>
                <p className="text-[#666666] text-sm">{stat.label}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor} text-white`}>
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};