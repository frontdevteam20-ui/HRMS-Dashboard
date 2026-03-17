import React from 'react';
import { Eye, Download } from 'lucide-react';

export const ReportTemplates = ({ reportTemplates }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#333333]">Report Templates</h2>
        <button className="neu-button px-4 py-2 rounded-xl text-sm hover:text-[#EF5226] transition-colors">
          Create Custom Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportTemplates.map(template => {
          const Icon = template.icon;
          return (
            <div
              key={template.id}
              className="neu-small p-6 rounded-xl hover:shadow-lg transition-all group cursor-pointer"
            >
              <div
                className="neu-small p-3 rounded-xl mb-4 group-hover:shadow-md transition-all"
                style={{ backgroundColor: template.color }}
              >
                <Icon size={24} className="text-white" />
              </div>

              <h3 className="font-bold text-[#333333] mb-2 group-hover:text-[#EF5226] transition-colors">
                {template.name}
              </h3>

              <p className="text-[#666666] text-sm mb-4">{template.description}</p>

              <div className="flex space-x-2">
                <button className="flex-1 neu-button py-2 rounded-xl text-sm hover:text-[#05A7CC] transition-colors">
                  <Eye size={12} className="inline mr-1" />
                  Preview
                </button>

                <button
                  className="flex-1 neu-primary py-2 rounded-xl text-sm hover:shadow-lg transition-all"
                  style={{
                    background: `linear-gradient(145deg, ${template.color}, ${template.color}dd)`
                  }}
                >
                  <Download size={12} className="inline mr-1" />
                  Generate
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
