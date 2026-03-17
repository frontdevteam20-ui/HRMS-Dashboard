import React from "react";
import { CheckCircle } from "lucide-react";

export const CurrentGoals = ({ goals }) => (
  <div className="neu-card p-8 rounded-3xl">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#333333] mb-2">Current Goals</h3>
      <p className="text-[#666666]">Active performance objectives</p>
    </div>

    <div className="space-y-4">
      {goals.map((goal, index) => (
        <div key={index} className="neu-small p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-[#333333] text-sm">{goal.title}</h4>
            <span className="text-xs text-[#666666]">{goal.progress}%</span>
          </div>
          <div className="w-full h-2 bg-[#E8EBEF] rounded-full mb-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                goal.progress === 100 ? "bg-[#4CAF50]" : "bg-[#05A7CC]"
              }`}
              style={{ width: `${goal.progress}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-xs text-[#999999]">
            <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>
            {goal.progress === 100 && (
              <span className="text-[#4CAF50] flex items-center">
                <CheckCircle size={12} className="mr-1" />
                Completed
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
