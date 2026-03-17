import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const DepartmentExitDistribution = ({ departmentExits }) => {
  return (
    <div className="neu-card p-8 rounded-3xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#333333] mb-2">Department Exit Distribution</h3>
        <p className="text-[#666666]">Employee departures by department</p>
      </div>
      <div className="neu-card-inset p-4 rounded-2xl">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={departmentExits}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="count"
            >
              {departmentExits.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ECF0F3',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {departmentExits.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs text-[#666666]">{item.department} ({item.count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentExitDistribution;
