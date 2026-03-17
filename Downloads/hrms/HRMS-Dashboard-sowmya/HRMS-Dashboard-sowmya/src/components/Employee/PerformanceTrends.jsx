import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const PerformanceTrends = ({ data }) => (
  <div className="neu-card p-8 rounded-3xl">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#333333] mb-2">Performance Trends</h3>
      <p className="text-[#666666]">Monthly performance rating and productivity</p>
    </div>
    <div className="neu-card-inset p-4 rounded-2xl">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d1d9e6" />
          <XAxis dataKey="month" stroke="#666666" />
          <YAxis stroke="#666666" domain={[0, 5]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ECF0F3",
              border: "none",
              borderRadius: "12px",
              boxShadow: "4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff",
            }}
          />
          <Line
            type="monotone"
            dataKey="rating"
            stroke="#ef5226"
            strokeWidth={3}
            dot={{ fill: "#ef5226", strokeWidth: 2, r: 6 }}
            name="Rating"
          />
          <Line
            type="monotone"
            dataKey="productivity"
            stroke="#05A7CC"
            strokeWidth={3}
            dot={{ fill: "#05A7CC", strokeWidth: 2, r: 6 }}
            name="Productivity %"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
