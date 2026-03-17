// src/components/kpi/KPICards.jsx
import React from 'react';
import { Users, Plus, Clock, ClipboardList, Percent } from 'lucide-react';
import PropTypes from 'prop-types';

const KPICards = ({ 
  totalEmployees = 0,
  newHires = 0,
  attendanceRate = 0,
  openPositions = 0
}) => {
  const cards = [
    {
      title: 'Total Employees',
      value: totalEmployees,
      icon: Users,
      color: '#2C318E',
      bgColor: 'bg-[#2C318E]/10'
    },
    {
      title: 'New Hires',
      value: newHires,
      icon: Plus,
      color: '#CA2030',
      bgColor: 'bg-[#CA2030]/10'
    },
    {
      title: 'Attendance Rate',
      value: `${attendanceRate}%`,
      icon: Percent,
      color: '#4CAF50',
      bgColor: 'bg-[#4CAF50]/10'
    },
    {
      title: 'Open Positions',
      value: openPositions,
      icon: ClipboardList,
      color: '#F7C948',
      bgColor: 'bg-[#F7C948]/10',
      textColor: 'text-[#333333]'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {cards.map((card, index) => (
        <div key={index} className="neu-card p-6 rounded-3xl hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-[#333333]">
                {card.value}
              </p>
              <p className="text-[#666666] text-sm mt-1">{card.title}</p>
            </div>
            <div className={`p-3 rounded-2xl ${card.bgColor}`}>
              <card.icon 
                className={`w-5 h-5 sm:w-6 sm:h-6 ${card.textColor || 'text-white'}`} 
                style={{ color: card.color }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

KPICards.propTypes = {
  totalEmployees: PropTypes.number,
  newHires: PropTypes.number,
  attendanceRate: PropTypes.number,
  openPositions: PropTypes.number
};

export default KPICards;