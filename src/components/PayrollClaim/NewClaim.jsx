import React, { useState } from 'react';
import { Calendar, UploadCloud, Trash2 } from 'lucide-react';

const NewClaim = () => {
  const [files, setFiles] = useState([
    { id: 1, name: 'bank_statement.pdf', size: '2.4 MB' },
  ]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files || []).map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Employee Information */}
      <div className="neu-card p-4 sm:p-6 md:p-8 rounded-3xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#333333] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F15B5B]" />
          <span>Employee Information</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#555555]">Employee ID</label>
            <input
              type="text"
              placeholder="EMP-2024-1547"
              className="w-full px-4 py-2.5 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#555555]">Employee Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#555555]">Department</label>
            <select
              className="w-full px-4 py-2.5 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Cpath fill=\'%23666\' d=\'M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z\'/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center]"
              defaultValue=""
            >
              <option value="" disabled>
                Select Department
              </option>
              <option>Engineering</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Sales</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#555555]">UAN Number</label>
            <input
              type="text"
              placeholder="Enter 12-digit UAN"
              className="w-full px-4 py-2.5 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm"
            />
            <p className="text-xs text-[#999999]">Must be 12 digits</p>
          </div>
        </div>
      </div>

      {/* Claim Details */}
      <div className="neu-card p-4 sm:p-6 md:p-8 rounded-3xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#333333] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F15B5B]" />
          <span>Claim Details</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#555555]">Claim Type</label>
            <select
              className="w-full px-4 py-2.5 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Cpath fill=\'%23666\' d=\'M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z\'/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center]"
              defaultValue=""
            >
              <option value="" disabled>
                Select Claim Type
              </option>
              <option>Medical Emergency</option>
              <option>Retirement</option>
              <option>Home Loan</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#555555]">Date of Application</label>
            <div className="relative">
              <input
                type="date"
                className="w-full px-4 py-2.5 pr-11 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999]" size={18} />
            </div>
          </div>

          <div className="md:col-span-2 space-y-1">
            <label className="block text-sm font-medium text-[#555555]">Reason for Claim</label>
            <textarea
              rows={2}
              placeholder="E.g., Medical Emergency, Retirement, Home Loan, etc."
              className="w-full px-4 py-2.5 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm resize-none"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#555555]">Claim Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999999] text-sm">₹</span>
              <input
                type="number"
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-2.5 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#555555]">Bank Account Number</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX 1234"
              className="w-full px-4 py-2.5 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm"
            />
          </div>

          <div className="md:col-span-2 space-y-1">
            <label className="block text-sm font-medium text-[#555555]">IFSC Code</label>
            <input
              type="text"
              placeholder="E.g., SBIN0001234"
              className="w-full px-4 py-2.5 rounded-2xl border border-[#E0E0E0] bg-[#FDFDFE] text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4D7CFE] focus:border-transparent shadow-sm"
            />
            <p className="text-xs text-[#999999]">11-character bank code</p>
          </div>
        </div>
      </div>

      {/* Supporting Documents */}
      <div className="neu-card p-4 sm:p-6 md:p-8 rounded-3xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#333333] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F15B5B]" />
          <span>Supporting Documents</span>
        </h2>

        <div className="border-2 border-dashed border-[#CFD9F2] rounded-3xl bg-[#FBFCFF] px-4 sm:px-8 py-8 flex flex-col items-center justify-center text-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#EDF2FF] flex items-center justify-center text-[#4D7CFE] mb-1">
            <UploadCloud size={28} />
          </div>
          <p className="text-sm sm:text-base text-[#555555] font-medium">
            Drag &amp; Drop files here
          </p>
          <p className="text-xs sm:text-sm text-[#777777]">or click to browse</p>
          <label className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-2xl bg-[#4D7CFE] text-white text-xs sm:text-sm font-medium cursor-pointer shadow-md hover:bg-[#3C66D9] transition-colors">
            <span>Upload Files</span>
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleFileChange}
            />
          </label>
          <p className="text-xs text-[#999999] mt-2">
            Supported formats: PDF, JPG, PNG (Max 5MB)
          </p>
        </div>

        <div className="space-y-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#FFF7F7] border border-[#F9DCDC] text-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFE3E3] flex items-center justify-center text-[#E24D4D] text-xs font-bold">
                  PDF
                </div>
                <div>
                  <p className="text-[#333333] font-medium leading-tight">{file.name}</p>
                  <p className="text-xs text-[#999999]">{file.size}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveFile(file.id)}
                className="text-[#E24D4D] hover:text-[#c73c3c] p-1 rounded-full hover:bg-[#FFE3E3] transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewClaim;
