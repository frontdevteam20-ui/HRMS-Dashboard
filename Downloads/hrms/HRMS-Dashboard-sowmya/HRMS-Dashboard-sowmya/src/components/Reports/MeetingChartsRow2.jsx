import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, PieChart as RechartsPieChart, Pie } from 'recharts';

export const MeetingChartsRow2 = ({
  departmentParticipationData,
  meetingTypesData,
  meetingDurationData
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Department Participation */}
      <div className="neu-card p-8 rounded-3xl">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#333333] mb-2">Department Participation</h3>
          <p className="text-[#666666]">Participation rate by department</p>
        </div>
        <div className="neu-card-inset p-4 rounded-2xl">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentParticipationData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d9e6" />
              <XAxis type="number" domain={[0, 100]} stroke="#666666" />
              <YAxis type="category" dataKey="department" stroke="#666666" width={80} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ECF0F3',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
                }}
                formatter={(value) => [`${value}%`, 'Participation Rate']} 
              />
              <Bar dataKey="participation" radius={[0, 8, 8, 0]}>
                {departmentParticipationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Meeting Types */}
      <div className="neu-card p-8 rounded-3xl">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#333333] mb-2">Meeting Types</h3>
          <p className="text-[#666666]">Distribution of meeting types</p>
        </div>
        <div className="neu-card-inset p-4 rounded-2xl">
          <ResponsiveContainer width="100%" height={250}>
            <RechartsPieChart>
              <Pie
                data={meetingTypesData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {meetingTypesData.map((entry, index) => (
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
                formatter={(value) => [`${value}%`, 'Meetings']} 
              />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-1 gap-2 mt-4">
            {meetingTypesData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs text-[#666666] flex-1">{item.name}</span>
                <span className="text-xs text-[#333333] font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meeting Duration Distribution */}
      <div className="neu-card p-8 rounded-3xl">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#333333] mb-2">Meeting Duration</h3>
          <p className="text-[#666666]">Distribution of meeting lengths</p>
        </div>
        <div className="space-y-4">
          {meetingDurationData.map((item, index) => (
            <div key={index} className="neu-small p-4 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-[#333333]">{item.duration}</span>
                <span className="text-[#666666]">{item.count} meetings</span>
              </div>
              <div className="neu-card-inset rounded-xl overflow-hidden">
                <div 
                  className="h-3 bg-gradient-to-r from-[#2C318E] to-[#048ba8] transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-[#2C318E] font-medium">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
