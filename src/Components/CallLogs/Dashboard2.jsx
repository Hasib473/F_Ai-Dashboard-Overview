import React from 'react';
import { Search, Phone, Play, FileText, ChevronDown, CircleCheckBig } from 'lucide-react';

const Dashboard = () => {
  const calls = [
    { id: 1, phone: '+1 (555) 345-6789', time: '09:42 AM', status: 'AI Resolved', tag: 'Screen', duration: '5:23', outcome: 'Quote Provided' },
    { id: 2, phone: '+1 (555) 345-6789', time: '09:42 AM', status: 'Warm Transfer', tag: 'Software', duration: '5:23', outcome: 'Escalated to technician', active: true },
    { id: 3, phone: '+1 (555) 345-6789', time: '09:42 AM', status: 'Appointment', tag: 'Battery', duration: '5:23', outcome: 'Appointment Booked' },
    { id: 4, phone: '+1 (555) 345-6789', time: '09:42 AM', status: 'Dropped', tag: 'Unknown', duration: '0:20', outcome: 'Call Dropped' },
    { id: 1, phone: '+1 (555) 345-6789', time: '09:42 AM', status: 'AI Resolved', tag: 'Screen', duration: '5:23', outcome: 'Quote Provided' },
  ];

  return (
    <div className="min-h-screen text-slate-300 p-6 font-sans">
      {/* Top Navigation / Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search by phone number, issue type..." 
            className="w-full bg-[rgba(17,27,60,1)] border border-slate-800 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <FilterButton label="All Type" />
        <FilterButton label="All Issues" />
        <FilterButton label="Today" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Call List */}
        <div className="bg-[rgba(17,27,60,1)] rounded-xl border border-slate-800 py-4">
          <h2 className="text-xl font-semibold mb-4 text-white border-b border-blue-500 p-4">Call List</h2>
          <div className="space-y-3 px-2">
            {calls.map((call) => (
              <div 
                key={call.id} 
                className='py-4 border-b border-blue-300 transition-all'
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{call.phone}</p>
                      <p className="text-xs text-slate-500">2025-12-16 • {call.time}</p>
                    </div>
                  </div>
                  <StatusBadge status={call.status} />
                </div>
                <div className="flex items-center gap-4 text-xs mt-3 text-slate-400">
                  <span className="flex items-center gap-1"><span className="opacity-50">🕒</span> {call.duration}</span>
                  <span className="flex items-center gap-1"><CircleCheckBig className='w-3' /> {call.outcome}</span>
                  <span className=" bg-[rgba(17,27,60,1)] px-2 py-0.5 rounded text-blue-400">{call.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Call Details */}
        <div className="bg-[rgba(17,27,60,1)] rounded-xl border border-slate-800 p-6">
          <h2 className="text-xl font-semibold mb-6 border-b p-2.5 border-blue-500 text-white">Call Details</h2>
          
          <div className="grid grid-cols-2 gap-y-6 mb-8">
            <DetailItem label="Phone Number" value="+1 (555) 123-4567" highlight />
            <DetailItem label="Duration" value="4:32" />
            <DetailItem label="Date & Time" value="2025-12-16 10:45 AM" />
            <DetailItem label="Issue Type" value="Screen" />
            <div className="col-span-1">
               <p className="text-xs text-slate-500 mb-1">Call Type</p>
               <StatusBadge status="AI Resolved" />
            </div>
            <DetailItem label="Outcome" value="Quote provided" />
          </div>

          <button className="w-full bg-[#3d2b56] hover:bg-[#4d366d] text-purple-200 py-3 rounded-xl flex items-center justify-center gap-2 mb-8 transition-colors">
            <Play size={18} fill="currentColor" /> Play Audio Recording
          </button>

          <div className="space-y-4">
  <div className="flex items-center gap-2 text-white font-medium mb-4">
    <FileText size={18} /> Conversation Transcript
  </div>
  
  <div className="bg-[#0f172a] rounded-2xl p-6 h-auto space-y-6 text-[15px] border border-slate-800/50 leading-relaxed">
    
    {/* AI Assistant Block */}
    <div className="space-y-1">
      <div className="text-[#22c55e] font-semibold">AI Assistant:</div>
      <div className="text-slate-200">Thank you for calling UBreakiFix! How can I help you today?</div>
    </div>

    {/* Customer Block */}
    <div className="space-y-1">
      <div className="text-[#3b82f6] font-semibold">Customer:</div>
      <div className="text-slate-200">Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</div>
    </div>

    {/* AI Assistant Block */}
    <div className="space-y-1">
      <div className="text-[#22c55e] font-semibold">AI Assistant:</div>
      <div className="text-slate-200">
        I can help you with that! For an iPhone 13 screen repair, our price is $199. 
        This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?
      </div>
    </div>

    {/* Customer Block */}
    <div className="space-y-1">
      <div className="text-[#3b82f6] font-semibold">Customer:</div>
      <div className="text-slate-200">Yes, please! When are you available?</div>
    </div>

    {/* AI Assistant Block */}
    <div className="space-y-1">
      <div className="text-[#22c55e] font-semibold">AI Assistant:</div>
      <div className="text-slate-200">
        Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?
      </div>
    </div>

  </div>
</div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const FilterButton = ({ label }) => (
  <button className="bg-[rgba(17,27,60,1)] border border-slate-800 px-4 py-2 rounded-md flex items-center gap-4 hover:bg-[#1f263d] text-sm">
    {label} <ChevronDown size={14} />
  </button>
);

const DetailItem = ({ label, value, highlight }) => (
  <div>
    <p className="text-xs text-slate-500 mb-1">{label}</p>
    <p className={`text-sm ${highlight ? 'text-white font-bold  inline-block' : 'text-slate-200'}`}>{value}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    'AI Resolved': 'bg-green-900/30 text-green-400 border-green-800/50',
    'Warm Transfer': 'bg-orange-900/30 text-orange-400 border-orange-800/50',
    'Appointment': 'bg-blue-900/30 text-blue-400 border-blue-800/50',
    'Dropped': 'bg-red-900/30 text-red-400 border-red-800/50'
  };
  return <span className={`text-[10px] px-2 py-0.5 rounded border ${styles[status]}`}>{status}</span>;
};

const ChatBubble = ({ role, message, isAI }) => (
  <div>
    <p className={`font-bold text-xs mb-1 ${role === 'AI Assistant' ? 'text-green-500' : 'text-blue-400'}`}>{role}:</p>
    <p className="text-slate-300 leading-relaxed">{message}</p>
  </div>
);

export default Dashboard;