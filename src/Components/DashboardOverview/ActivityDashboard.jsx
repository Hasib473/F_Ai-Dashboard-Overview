import React from 'react';

const ActivityDashboard = () => {
  const activities = [
    { id: 1, text: "AI booked appointment for iPhone 13 screen repair", time: "2 min ago", color: "bg-green-500" },
    { id: 2, text: "Warm transfer to technician - Software issue", time: "5 min ago", color: "bg-orange-500" },
    { id: 3, text: "Quote provided for iPad battery replacement", time: "8 min ago", color: "bg-green-500" },
    { id: 4, text: "Call dropped after 12 seconds", time: "15 min ago", color: "bg-red-500" },
  ];

  const repairs = [
    { name: "Screen Repair", count: 156, width: "85%" },
    { name: "Battery Replacement", count: 89, width: "55%" },
    { name: "Back Glass Repair", count: 67, width: "40%" },
    { name: "Software Issues", count: 45, width: "25%" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6   text-white font-sans">
      
      
      <div className="flex-1 bg-[rgba(17,27,60,1)] p-6 rounded-2xl border border-white/5">
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((item) => (
            <div key={item.id} className="bg-[#1a2b5a]/40 p-4 rounded-xl border border-white/5 transition-hover hover:bg-[#1a2b5a]/60">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 mt-2 rounded-full ${item.color} shadow-[0_0_8px_rgba(34,197,94,0.6)]`} />
                <div>
                  <p className="text-sm text-gray-200">{item.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex-1 bg-[rgba(17,27,60,1)] p-6 rounded-2xl border border-white/5">
        <h2 className="text-xl font-semibold mb-6">Top Repair Requests</h2>
        <div className="space-y-6">
          {repairs.map((repair, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">{repair.name}</span>
                <span className="text-gray-400">{repair.count} requests</span>
              </div>
              
              <div className="w-full bg-[#1a2b5a] h-2 rounded-full overflow-hidden">
            
                <div 
                  className="h-full bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-1000"
                  style={{ width: repair.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ActivityDashboard;