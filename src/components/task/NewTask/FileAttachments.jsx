// src/components/task/NewTask/FileAttachments.jsx
import React from 'react';
import { Upload, Paperclip, Trash2 } from 'lucide-react';

export const FileAttachments = ({ attachments, handleFileUpload, handleRemoveAttachment, formatFileSize }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h2 className="text-xl font-bold text-[#333333] mb-6 flex items-center">
        <Paperclip size={20} className="mr-2 text-[#FFC107]" />
        Attachments
      </h2>
      
      <div className="space-y-4">
        <div className="neu-card-inset p-6 rounded-xl border-2 border-dashed border-[#E8EBEF] text-center">
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.gif"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload size={32} className="text-[#666666] mx-auto mb-2" />
            <p className="text-[#666666] mb-1">Click to upload files</p>
            <p className="text-[#888] text-sm">PDF, DOC, XLS, Images up to 10MB</p>
          </label>
        </div>

        {attachments.length > 0 && (
          <div className="space-y-2">
            {attachments.map(attachment => (
              <div key={attachment.id} className="neu-small p-3 rounded-xl flex items-center justify-between">
                <div className="flex items-center">
                  <Paperclip size={16} className="text-[#666666] mr-2" />
                  <div>
                    <span className="text-[#333333] font-medium">{attachment.name}</span>
                    <span className="text-[#666666] text-sm ml-2">({formatFileSize(attachment.size)})</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveAttachment(attachment.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
