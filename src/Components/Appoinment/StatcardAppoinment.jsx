import React from 'react';
import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

const StatscardAppoinment = () => {
  const stats = [
    {
      title: "Total Booked",
      value: "34",
      subtext: "+8 this week",
      subtextColor: "text-emerald-500",
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "AI Booked",
      value: "28",
      subtext: "82% of total",
      subtextColor: "text-gray-400",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Pending",
      value: "3",
      subtext: "Awaiting confirmation",
      subtextColor: "text-gray-400",
      icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-[rgba(17,27,60,1)] border border-gray-700/30 rounded-2xl p-6 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            {stat.icon}
            <span className="text-gray-400 font-medium">{stat.title}</span>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-4xl font-bold text-white tracking-tight">
              {stat.value}
            </h3>
            <p className={`text-sm font-medium ${stat.subtextColor}`}>
              {stat.subtext}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatscardAppoinment;