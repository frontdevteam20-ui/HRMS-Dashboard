// AttachmentsStats.jsx
import React from 'react';
import { FileText, Image, FileArchive, HardDrive } from 'lucide-react';

export const AttachmentsStats = ({ attachments }) => {
  const totalSizeMB = attachments.reduce((total, att) => {
    // Convert sizes with KB or MB to MB for consistent calculation
    const sizeParts = att.size.split(' ');
    let sizeInMB = parseFloat(sizeParts[0]);
    if (sizeParts[1].toLowerCase() === 'kb') {
      sizeInMB = sizeInMB / 1024;
    }
    return total + sizeInMB;
  }, 0);

  const documentCount = attachments.filter(att => att.category === 'document').length;
  const imageCount = attachments.filter(att => att.category === 'image').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {/* Total Files */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-[#2C318E] mb-2">{attachments.length}</div>
            <div className="text-[#666666]">Total Files</div>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#2C318E]">
            <FileText size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-[#05A7CC] mb-2">{documentCount}</div>
            <div className="text-[#666666]">Documents</div>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#05A7CC]">
            <FileText size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-[#4CAF50] mb-2">{imageCount}</div>
            <div className="text-[#666666]">Images</div>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#4CAF50]">
            <Image size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Total Size */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-[#9C27B0] mb-2">{totalSizeMB.toFixed(1)} MB</div>
            <div className="text-[#666666]">Total Size</div>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#9C27B0]">
            <HardDrive size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};