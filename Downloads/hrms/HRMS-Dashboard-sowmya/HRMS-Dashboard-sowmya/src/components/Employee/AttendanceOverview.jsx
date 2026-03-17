import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const AttendanceOverview = ({ data }) => (
  <div className="neu-card p-8 rounded-3xl">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#333333] mb-2">Attendance Overview</h3>
      <p className="text-[#666666]">Monthly attendance pattern</p>
    </div>
    <div className="neu-card-inset p-4 rounded-2xl">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d1d9e6" />
          <XAxis dataKey="month" stroke="#666666" />
          <YAxis stroke="#666666" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ECF0F3",
              border: "none",
              borderRadius: "12px",
              boxShadow: "4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff",
            }}
          />
          <Bar dataKey="present" fill="#4CAF50" radius={[4, 4, 0, 0]} name="Present" />
          <Bar dataKey="absent" fill="#ef5226" radius={[4, 4, 0, 0]} name="Absent" />
          <Bar dataKey="late" fill="#FFC107" radius={[4, 4, 0, 0]} name="Late" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);
