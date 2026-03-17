import React, { useState } from 'react';
import { Save, ArrowLeft, Upload, X, Plus, Users, Calendar, Clock, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { useNavigate } from 'react-router-dom';
import { BasicInformation } from '../../NewMeeting/BasicInformation';
import { ScheduleSection } from '../../NewMeeting/ScheduleSection';
import { MeetingSummary } from '../../NewMeeting/MeetingSummary';
import { SelectedParticipants } from '../../NewMeeting/SelectedParticipants';
import { AgendaSection } from '../../NewMeeting/AgendaSection';

const initialForm = {
  title: '',
  description: '',
  department: '',
  date: '',
  startTime: '',
  endTime: '',
  location: '',
  meetingType: 'in-person',
  agenda: [''],
  participants: [],
  recurringType: 'none',
  reminderTime: '15',
  priority: 'medium'
};

const availableParticipants = [
  { id: '1', name: 'Lion', email: 'john.doe@company.com', role: 'Team Lead', department: 'Engineering' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@company.com', role: 'Senior Developer', department: 'Engineering' },
  { id: '3', name: 'Mike Johnson', email: 'mike.johnson@company.com', role: 'Frontend Developer', department: 'Engineering' },
  { id: '4', name: 'Sarah Wilson', email: 'sarah.wilson@company.com', role: 'Backend Developer', department: 'Engineering' },
  { id: '5', name: 'Alice Johnson', email: 'alice.johnson@company.com', role: 'Product Manager', department: 'Product' },
  { id: '6', name: 'Bob Brown', email: 'bob.brown@company.com', role: 'UX Designer', department: 'Design' },
  { id: '7', name: 'Carol Davis', email: 'carol.davis@company.com', role: 'Marketing Manager', department: 'Marketing' },
  { id: '8', name: 'David Miller', email: 'david.miller@company.com', role: 'DevOps Engineer', department: 'Engineering' }
];

export const NewMeeting = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showParticipantSearch, setShowParticipantSearch] = useState(false);
  const [participantSearch, setParticipantSearch] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAgendaChange = (index, value) => {
    const newAgenda = [...formData.agenda];
    newAgenda[index] = value;
    setFormData(prev => ({
      ...prev,
      agenda: newAgenda
    }));
  };

  const addAgendaItem = () => {
    setFormData(prev => ({
      ...prev,
      agenda: [...prev.agenda, '']
    }));
  };

  const removeAgendaItem = (index) => {
    const newAgenda = formData.agenda.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      agenda: newAgenda
    }));
  };

  const addParticipant = (participant) => {
    if (!formData.participants.find(p => p.id === participant.id)) {
      setFormData(prev => ({
        ...prev,
        participants: [...prev.participants, participant]
      }));
    }
    setParticipantSearch('');
    setShowParticipantSearch(false);
  };

  const removeParticipant = (participantId) => {
    setFormData(prev => ({
      ...prev,
      participants: prev.participants.filter(p => p.id !== participantId)
    }));
  };

  const handleFileUpload = (fileName) => {
    setUploadedFiles(prev => [...prev, fileName]);
  };

  const removeFile = (fileName) => {
    setUploadedFiles(prev => prev.filter(file => file !== fileName));
  };

  const handleSave = () => {
    console.log('Creating meeting:', formData);
    // Handle save logic here
    onNavigate('meeting-confirmation');
  };

  const filteredParticipants = availableParticipants.filter(participant =>
    participant.name.toLowerCase().includes(participantSearch.toLowerCase()) ||
    participant.email.toLowerCase().includes(participantSearch.toLowerCase()) ||
    participant.role.toLowerCase().includes(participantSearch.toLowerCase())
  );

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/meetings')}
              className="neu-button p-3 rounded-2xl text-[#666666] hover:text-[#333333] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-[#333333] mb-2">New Meeting</h1>
              <p className="text-[#666666]">Schedule a new meeting with agenda and participants</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => navigate('/meetings')}
              className="neu-button px-6 py-3 rounded-2xl text-[#666666] hover:text-[#333333] transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="neu-primary px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-1.5 sm:space-x-2 hover:scale-105 transition-transform text-xs sm:text-sm md:text-base w-full sm:w-auto"
            >
              <Save className="w-5 h-5" />
              <span className="font-medium">Create Meeting</span>
            </button>
          </div>
        </div>
    

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Information */}
       <BasicInformation 
        formData={formData} 
        handleInputChange={handleInputChange} 
      />


          {/* Date & Time */}
        <ScheduleSection 
  formData={formData} 
  handleInputChange={handleInputChange} 
/>


          {/* Agenda */}
       <AgendaSection
  agenda={formData.agenda}
  handleAgendaChange={handleAgendaChange}
  addAgendaItem={addAgendaItem}
  removeAgendaItem={removeAgendaItem}
/>


          {/* Attachments */}
          <div className="neu-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-[#333333] mb-6">Attachments</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neu-card-inset p-8 rounded-2xl border-2 border-dashed border-[#d1d9e6] text-center">
                <Upload className="w-12 h-12 text-[#666666] mx-auto mb-4" />
                <p className="text-[#666666] mb-4">Drag and drop files or click to upload</p>
                <button 
                  onClick={() => handleFileUpload('meeting_document.pdf')}
                  className="neu-button px-6 py-3 rounded-2xl text-[#05A7CC] hover:text-[#048ba8]"
                >
                  Browse Files
                </button>
              </div>

              {uploadedFiles.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-4">Uploaded Files</h3>
                  <div className="space-y-3">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="neu-small p-4 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="neu-card-inset p-2 rounded-lg">
                            <Upload className="w-4 h-4 text-[#666666]" />
                          </div>
                          <span className="text-[#333333] font-medium">{file}</span>
                        </div>
                        <button 
                          onClick={() => removeFile(file)}
                          className="neu-button p-2 rounded-lg text-[#EF5226] hover:text-[#d4471f]"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Participants */}
          <div className="neu-card p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#333333]">Participants</h3>
              <button 
                onClick={() => setShowParticipantSearch(!showParticipantSearch)}
                className="neu-button p-3 rounded-2xl text-[#05A7CC] hover:text-[#048ba8]"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Search Participants */}
            {showParticipantSearch && (
              <div className="mb-4">
                <div className="neu-input p-4 rounded-2xl mb-3">
                  <input
                    type="text"
                    value={participantSearch}
                    onChange={(e) => setParticipantSearch(e.target.value)}
                    className="w-full bg-transparent outline-none text-[#333333] placeholder-[#999999]"
                    placeholder="Search participants..."
                  />
                </div>
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {filteredParticipants.map((participant) => (
                    <button
                      key={participant.id}
                      onClick={() => addParticipant(participant)}
                      className="w-full neu-small p-3 rounded-2xl text-left hover:scale-105 transition-transform"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder-avatar.jpg" />
                          <AvatarFallback className="bg-[#05A7CC] text-white text-sm">
                            {participant.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-[#333333] text-sm">{participant.name}</div>
                          <div className="text-xs text-[#666666]">{participant.role}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Participants */}
         <SelectedParticipants 
  participants={formData.participants} 
  removeParticipant={removeParticipant} 
/>

          </div>

          {/* Meeting Summary */}
         <MeetingSummary formData={formData} />

        </div>
      </div>
    </div>
  );
};

export default NewMeeting;