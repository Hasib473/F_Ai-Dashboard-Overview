import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi'; // npm install react-icons

const BookingDashboard = () => {
  const [bookingLink] = useState("https://techstore.com/book?id=store123");

  const appointments = [
    { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: 1, time: "09:00" },
    { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: 1, time: "10:00" },
    { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: 1, time: "11:00" },
    { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: 1, time: "12:00" },
    { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: 1, time: "02:00" },
    { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: 1, time: "03:00" },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bookingLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[rgba(17,27,60,1)] p-8 text-gray-300 font-sans">
      {/* Booking Link Section */}
     <div className="mb-10">
  <h2 className="text-lg font-medium mb-4">Booking Link</h2>
  <div className="flex items-center gap-4">
    {/* Background-এ আপনার দেওয়া ইমেজের কালার দিয়ে গ্রেডিয়েন্ট অ্যাড করা হয়েছে */}
    <div className="flex-1 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700/50 rounded-md px-4 py-3 text-gray-400">
      {bookingLink}
    </div>
    
    <button 
      onClick={copyToClipboard}
      className="flex items-center gap-2 bg-[#253366] hover:bg-[#2d3d7a] px-6 py-3 rounded-xl border border-blue-400/30 transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
    >
      <FiCopy className="text-xl" />
      <span className="font-semibold text-white">Copy Link</span>
    </button>
  </div>
</div>

      {/* Appointment Table Section */}
      <div className="overflow-x-auto rounded-lg border border-gray-800 shadow-2xl">
        <table className="w-full text-left border-collapse bg-[#0d1436]/50">
          <thead>
            <tr className="border-b border-gray-800 text-sm">
              <th className="px-6 py-5 font-normal">Client Name</th>
              <th className="px-6 py-5 font-normal">Client Phone</th>
              <th className="px-6 py-5 font-normal">Client mail</th>
              <th className="px-6 py-5 font-normal">Device</th>
              <th className="px-6 py-5 font-normal">Repair Type</th>
              <th className="px-6 py-5 font-normal">Date</th>
              <th className="px-6 py-5 font-normal text-center">Slot no</th>
              <th className="px-6 py-5 font-normal text-right">Start Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {appointments.map((item, index) => (
              <tr key={index} className="hover:bg-blue-900/10 transition-colors text-[13px]">
                <td className="px-6 py-5 text-blue-400 font-medium">
                  <a href="#" className="hover:underline">{item.name}</a>
                </td>
                <td className="px-6 py-5">{item.phone}</td>
                <td className="px-6 py-5">{item.email}</td>
                <td className="px-6 py-5">{item.device}</td>
                <td className="px-6 py-5">{item.repair}</td>
                <td className="px-6 py-5">{item.date}</td>
                <td className="px-6 py-5 text-center">{item.slot}</td>
                <td className="px-6 py-5 text-right">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDashboard;