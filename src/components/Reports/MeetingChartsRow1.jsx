import React from 'react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export const MeetingChartsRow1 = ({ monthlyMeetingsData, attendanceRateData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Monthly Meetings Trend */}
      <div className="neu-card p-8 rounded-3xl">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#333333] mb-2">Monthly Meeting Trends</h3>
          <p className="text-[#666666]">Number of meetings and participants over time</p>
        </div>
        <div className="neu-card-inset p-4 rounded-2xl">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyMeetingsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d9e6" />
              <XAxis dataKey="month" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ECF0F3',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="meetings" 
                stackId="1" 
                stroke="#2C318E" 
                fill="#2C318E" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Attendance Rate */}
      <div className="neu-card p-8 rounded-3xl">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#333333] mb-2">Attendance Rate Trends</h3>
          <p className="text-[#666666]">Monthly attendance percentage</p>
        </div>
        <div className="neu-card-inset p-4 rounded-2xl">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceRateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d9e6" />
              <XAxis dataKey="month" stroke="#666666" />
              <YAxis stroke="#666666" domain={[80, 100]} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ECF0F3',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
                }}
                formatter={(value) => [`${value}%`, 'Attendance Rate']} 
              />
              <Line 
                type="monotone" 
                dataKey="rate" 
                stroke="#4CAF50" 
                strokeWidth={3}
                dot={{ fill: '#4CAF50', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
