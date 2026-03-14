import React from 'react';

export const PerformanceMetrics = ({ metrics }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-[#333333] mb-4">Performance Metrics</h3>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="neu-small p-4 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#666666] text-sm">{metric.label}</span>
              <span className="font-bold" style={{ color: metric.color }}>
                {metric.value}{metric.label.includes('Rate') || metric.label.includes('Score') ? '%' : ''}
              </span>
            </div>
            <div className="neu-card-inset rounded-lg p-1">
              <div
                className="h-2 rounded-lg transition-all duration-300"
                style={{ width: `${(metric.value / metric.max) * 100}%`, backgroundColor: metric.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
