import React from "react";
import { Users } from "lucide-react";

const ResourceAllocation = ({ resourceAllocation }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#333333]">Resource Allocation</h2>
        <Users size={20} className="text-[#2C318E]" />
      </div>

      <div className="space-y-4">
        {resourceAllocation.map((team) => (
          <div key={team.team} className="neu-small p-4 rounded-xl">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: team.color }}
                ></div>
                <span className="font-medium text-[#333333]">{team.team}</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-sm text-[#666666]">{team.tasks} tasks</span>

                <span className="text-sm font-bold" style={{ color: team.color }}>
                  {team.allocated}%
                </span>
              </div>
            </div>

            <div className="neu-card-inset rounded-lg p-1">
              <div
                className="h-3 rounded-lg transition-all duration-300"
                style={{
                  width: `${team.allocated}%`,
                  backgroundColor: team.color,
                }}
              ></div>
            </div>

            <div className="flex justify-between text-xs text-[#666666] mt-2">
              <span>Allocated: {team.allocated}/{team.capacity}</span>
              <span>{team.capacity - team.allocated} available</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceAllocation;
