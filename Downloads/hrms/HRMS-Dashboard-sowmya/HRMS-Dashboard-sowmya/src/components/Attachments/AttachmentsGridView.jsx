// AttachmentsGridView.jsx
import React from 'react';
import { Eye, Download, Trash2, FileText, Image, File } from 'lucide-react';

export const AttachmentsGridView = ({ sortedAttachments }) => {

  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-[#CA2030]" />;
      case 'image':
      case 'jpg':
      case 'png':
        return <Image className="w-8 h-8 text-[#4CAF50]" />;
      default:
        return <File className="w-8 h-8 text-[#666666]" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'document':
        return 'bg-[#2C318E] text-white';
      case 'presentation':
        return 'bg-[#9C27B0] text-white';
      case 'image':
        return 'bg-[#4CAF50] text-white';
      case 'media':
        return 'bg-[#FF9800] text-white';
      default:
        return 'bg-[#666666] text-white';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sortedAttachments.map((attachment) => (
        <div
          key={attachment.id}
          className="neu-small p-6 rounded-2xl hover:scale-105 transition-transform duration-200"
        >
          <div className="space-y-4">
            {/* File Icon */}
            <div className="neu-card-inset w-full h-32 rounded-2xl flex items-center justify-center">
              {getFileIcon(attachment.type)}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`neu-small px-3 py-1 rounded-xl text-xs font-medium ${getCategoryColor(
                    attachment.category
                  )}`}
                >
                  {attachment.category.toUpperCase()}
                </div>
                <span className="text-xs text-[#666666]">{attachment.size}</span>
              </div>

              <h3
                className="font-bold text-[#333333] mb-2 truncate"
                title={attachment.name}
              >
                {attachment.name}
              </h3>

              <div className="text-sm text-[#666666] space-y-1">
                <div>From: {attachment.meetingTitle}</div>
                <div>By: {attachment.uploadedBy}</div>
                <div>{new Date(attachment.uploadDate).toLocaleDateString()}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button className="flex-1 neu-button p-3 rounded-2xl text-[#2C318E] hover:text-[#048ba8] transition-colors">
                <Eye className="w-4 h-4 mx-auto" />
              </button>
              <button className="flex-1 neu-button p-3 rounded-2xl text-[#666666] hover:text-[#333333] transition-colors">
                <Download className="w-4 h-4 mx-auto" />
              </button>
              <button className="flex-1 neu-button p-3 rounded-2xl text-[#CA2030] hover:text-[#d4471f] transition-colors">
                <Trash2 className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
