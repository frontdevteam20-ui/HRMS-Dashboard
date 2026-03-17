import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const OnboardingTrends = ({ data }) => {
  return (
    <div className="neu-card-inset p-3 sm:p-4 rounded-2xl">
      <div className="h-[250px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d1d9e6" />
            <XAxis 
              dataKey="month" 
              stroke="#666666" 
              tick={{ fontSize: 12 }}
              tickMargin={8}
            />
            <YAxis 
              stroke="#666666" 
              tick={{ fontSize: 12 }}
              tickMargin={8}
              width={30}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ECF0F3',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
                fontSize: '12px',
                padding: '8px 12px'
              }}
            />
            <Line
              type="monotone"
              dataKey="new"
              stroke="#CA2030"
              strokeWidth={2}
              dot={{ fill: '#CA2030', strokeWidth: 2, r: 4, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 2 }}
              name="New Hires"
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#2C318E"
              strokeWidth={2}
              dot={{ fill: '#2C318E', strokeWidth: 2, r: 4, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 2 }}
              name="Completed"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
