import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Download, Eye, Trash2, Upload, FileText, Image, File, Grid, List } from 'lucide-react';
import { AttachmentsGridView } from '../../Attachments/AttachmentsGridView';
import { AttachmentsListView } from '../../Attachments/AttachmentsListView';
import { AttachmentsStats } from '../../Attachments/AttachmentsStats';
import { attachments } from '../../Attachments/attachmentsData';


export const MeetingAttachments = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMeeting, setSelectedMeeting] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('date');

  const filteredAttachments = attachments.filter(attachment => {
    const matchesSearch = attachment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         attachment.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         attachment.meetingTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || attachment.category === selectedCategory;
    const matchesMeeting = selectedMeeting === 'all' || attachment.meetingTitle === selectedMeeting;
    
    return matchesSearch && matchesCategory && matchesMeeting;
  });

 

  const uniqueMeetings = [...new Set(attachments.map(att => att.meetingTitle))];

  const sortedAttachments = [...filteredAttachments].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'size':
        return parseFloat(b.size) - parseFloat(a.size);
      case 'type':
        return a.type.localeCompare(b.type);
      case 'date':
      default:
        return new Date(b.uploadDate) - new Date(a.uploadDate);
    }
  });

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className='mb-4 sm:mb-0'>
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Meeting Attachments</h1>
            <p className="text-[#666666]">Browse and manage all meeting documents and files</p>
          </div>
          <button 
            onClick={() => navigate('/new-meeting')}
            className="neu-primary px-8 py-4 rounded-2xl flex items-center space-x-3 hover:scale-105 transition-transform"
          >
            <Plus className="w-5 h-5" />
            <span className="font-medium">Upload Files</span>
          </button>
        </div>
 {/* Stats Cards */}
     <AttachmentsStats attachments={attachments} />

     
      {/* Filters and Controls */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="neu-input p-4 rounded-2xl flex items-center">
                <Search className="text-[#666666] mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Search files by name, uploader, or meeting..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-[#333333] placeholder-[#999999]"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <div className="neu-input p-4 rounded-2xl">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-transparent outline-none text-[#333333]"
                >
                  <option value="all">All Categories</option>
                  <option value="document">Documents</option>
                  <option value="presentation">Presentations</option>
                  <option value="image">Images</option>
                  <option value="media">Media</option>
                </select>
              </div>
            </div>

            {/* Meeting Filter */}
            <div>
              <div className="neu-input p-4 rounded-2xl">
                <select
                  value={selectedMeeting}
                  onChange={(e) => setSelectedMeeting(e.target.value)}
                  className="w-full bg-transparent outline-none text-[#333333]"
                >
                  <option value="all">All Meetings</option>
                  {uniqueMeetings.map(meeting => (
                    <option key={meeting} value={meeting}>{meeting}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort */}
            <div className="neu-input p-3 rounded-2xl">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent outline-none text-[#333333]"
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="size">Sort by Size</option>
                <option value="type">Sort by Type</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="neu-card-inset p-2 rounded-2xl flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-all ${
                  viewMode === 'grid' 
                    ? 'neu-primary text-white' 
                    : 'text-[#666666] hover:text-[#333333]'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-all ${
                  viewMode === 'list' 
                    ? 'neu-primary text-white' 
                    : 'text-[#666666] hover:text-[#333333]'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

     


      {/* Files Display */}
      <div className="neu-card p-8 rounded-3xl">
        {viewMode === 'grid' ? (
          /* Grid View */
           <AttachmentsGridView sortedAttachments={sortedAttachments} />

        ) : (
          /* List View */
           <AttachmentsListView sortedAttachments={sortedAttachments} />

        )}

        {sortedAttachments.length === 0 && (
          <div className="text-center py-12">
            <div className="neu-card-inset p-8 rounded-3xl inline-block">
              <Upload className="w-16 h-16 text-[#666666] mx-auto mb-4" />
              <h3 className="text-xl font-medium text-[#333333] mb-2">No attachments found</h3>
              <p className="text-[#666666]">Try adjusting your search filters or upload new files.</p>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      {sortedAttachments.length > 0 && (
        <div className="neu-card p-6 rounded-3xl">
          <div className="flex items-center justify-between">
            <div className="text-[#666666]">
              Showing {sortedAttachments.length} of {attachments.length} files
            </div>
            <div className="flex items-center space-x-2">
              <button className="neu-button px-4 py-2 rounded-xl text-[#666666] hover:text-[#333333]">
                Previous
              </button>
              <div className="neu-card-inset px-4 py-2 rounded-xl">
                <span className="font-medium text-[#333333]">1</span>
              </div>
              <button className="neu-button px-4 py-2 rounded-xl text-[#666666] hover:text-[#333333]">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};