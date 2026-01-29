import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', calls: 45 },
  { name: 'Tue', calls: 62 },
  { name: 'Wed', calls: 58 },
  { name: 'Thu', calls: 75 },
  { name: 'Fri', calls: 90 },
  { name: 'Sat', calls: 98 },
  { name: 'Sun', calls: 55 },
];

const CallTrendsChart = () => {
  return (
    <div className="bg-[rgba(17,27,60,1)] p-6 rounded-xl border border-white/10 shadow-lg text-white">
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">Call Trends - This Week</h3>
          <p className="text-sm text-gray-400">Total: 472 calls</p>
        </div>
        <select className="bg-[#1e293b] text-sm border border-white/10 rounded-md px-3 py-1 outline-none">
          <option>This Week</option>
        </select>
      </div>

      
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
            
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area 
              type="monotone" 
              dataKey="calls" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCalls)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallTrendsChart;