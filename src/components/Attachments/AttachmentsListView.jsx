// AttachmentsListView.jsx
import React from 'react';
import { Eye, Download, Trash2, FileText, Image, File } from 'lucide-react';

export const AttachmentsListView = ({ sortedAttachments }) => {

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
    <div className="space-y-4">

      {/* Header row */}
      <div className="neu-small p-4 rounded-2xl">
        <div className="grid grid-cols-12 gap-4 font-medium text-[#666666] text-sm">
          <div className="col-span-4">File Name</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Size</div>
          <div className="col-span-2">Uploaded By</div>
          <div className="col-span-1">Date</div>
          <div className="col-span-1">Actions</div>
        </div>
      </div>

      {/* List Items */}
      {sortedAttachments.map((attachment) => (
        <div 
          key={attachment.id}
          className="neu-small p-4 rounded-2xl hover:scale-105 transition-transform duration-200"
        >
          <div className="grid grid-cols-12 gap-4 items-center">

            {/* File name & meeting */}
            <div className="col-span-4 flex items-center space-x-3">
              <div className="neu-card-inset p-2 rounded-lg">
                {getFileIcon(attachment.type)}
              </div>
              <div>
                <div className="font-medium text-[#333333] truncate">
                  {attachment.name}
                </div>
                <div className="text-sm text-[#666666] truncate">
                  {attachment.meetingTitle}
                </div>
              </div>
            </div>

            {/* Type */}
            <div className="col-span-2">
              <div
                className={`neu-small px-3 py-1 rounded-xl text-xs font-medium ${getCategoryColor(
                  attachment.category
                )} inline-block`}
              >
                {attachment.type}
              </div>
            </div>

            {/* Size */}
            <div className="col-span-2 text-[#333333] font-medium">
              {attachment.size}
            </div>

            {/* Uploaded By */}
            <div className="col-span-2 text-[#666666]">
              {attachment.uploadedBy}
            </div>

            {/* Date */}
            <div className="col-span-1 text-[#666666] text-sm">
              {new Date(attachment.uploadDate).toLocaleDateString()}
            </div>

            {/* Actions */}
            <div className="col-span-1 flex items-center space-x-2">
              <button className="neu-button p-2 rounded-xl text-[#2C318E] hover:text-[#048ba8] transition-colors">
                <Eye className="w-4 h-4" />
              </button>
              <button className="neu-button p-2 rounded-xl text-[#666666] hover:text-[#333333] transition-colors">
                <Download className="w-4 h-4" />
              </button>
              <button className="neu-button p-2 rounded-xl text-[#CA2030] hover:text-[#d4471f] transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      ))}

    </div>
  );
};
