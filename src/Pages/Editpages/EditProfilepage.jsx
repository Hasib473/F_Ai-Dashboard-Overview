import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import SettingsNavbar from '../../Components/Settings/SettingsNavbar';

const EditProfilePage = () => {
  return (
    <>
    <div>
  <SettingsNavbar/>

    </div>
    <div className="min-h-screen text-white p-8 bg-transparent">
        
      
      <div className="flex gap-10 mb-12 border-b border-gray-700/30">
        <button className="pb-4 text-xl font-medium text-white border-b-2 border-blue-500">
          Profile
        </button>
        <button className="pb-4 text-xl font-medium text-gray-400 hover:text-gray-200 transition-colors">
          Password Settings
        </button>
      </div>

      <div className="max-w-5xl">
        
        <div className="mb-10">
          <h3 className="text-gray-200 text-lg mb-4">Profile Image</h3>
          <div className="relative w-24 h-24">
            <img 
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-2 border-blue-500/20"
            />
            
            <button className="absolute bottom-0 right-0 bg-[#00c853] p-2 rounded-lg shadow-lg hover:bg-[#00a846] transition-colors">
              <FiEdit2 className="text-white w-4 h-4" />
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-200">Full Name</label>
            <input 
              type="text" 
              defaultValue="Jane D."
              className="w-full bg-[#111827]/50 border border-gray-700/50 rounded-xl px-4 py-4 text-gray-300 focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-200">Email</label>
            <input 
              type="email" 
              defaultValue="jane@gmail.com"
              className="w-full bg-[#111827]/50 border border-gray-700/50 rounded-xl px-4 py-4 text-gray-300 focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-200">Store Name</label>
            <input 
              type="text" 
              defaultValue="Ubreakfix Store"
              className="w-full bg-[#111827]/50 border border-gray-700/50 rounded-xl px-4 py-4 text-gray-300 focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-200">Store Address</label>
            <input 
              type="text" 
              defaultValue="123 Main Street, New York"
              className="w-full bg-[#111827]/50 border border-gray-700/50 rounded-xl px-4 py-4 text-gray-300 focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>

    
        <div className="flex justify-center">
          <button className="w-full max-w-sm bg-[#00c853] hover:bg-[#00a846] text-white font-bold py-2 rounded-xl text-xl shadow-[0_0_20px_rgba(0,200,83,0.3)] transition-all">
            Save
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default EditProfilePage;