import React from 'react';
import { Link } from 'react-router'; // অথবা আপনার রাউটিং লাইব্রেরি অনুযায়ী

const ProfileSection = () => {
  const profileData = {
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York, NY 10001",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
  };

  return (
    <div className="text-white p-8 max-w-4xl">

    <div className="flex gap-10 mb-12 border-b border-gray-700/30">
  <button
    className="
      pb-4 text-2xl font-medium
      text-white
      transition-all
    "
  >
    Profile
  </button>

  <button
    className=" pb-4 text-2xl font-medium text-gray-400 hover:text-whitetransition-all "
  >
    Password Settings
  </button>
</div>


      <h2 className="text-xl font-medium mb-6">Profile Image</h2>
      
      {/* Avatar and Edit Button Section */}
      <div className="flex items-center gap-6 mb-10">
        <div className="relative">
          <img 
            src={profileData.imageUrl} 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500/30"
          />
        </div>
        
        {/* Edit Profile Button with Link */}
        <Link 
          to="/ediprofile" 
          className="bg-[#253366] hover:bg-[#2d3d7a] text-xs font-semibold px-4 py-2 rounded-lg border border-blue-400/30 transition-all shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        >
          Edit Profile
        </Link>
      </div>

      {/* Profile Details List */}
      <div className="space-y-0 max-w-2xl">
        <ProfileField label="Full Name:" value={profileData.fullName} />
        <ProfileField label="Email:" value={profileData.email} />
        <ProfileField label="Store Name:" value={profileData.storeName} />
        <ProfileField label="Store Address:" value={profileData.storeAddress} isLast />
      </div>
    </div>
  );
};

// ছোট হেল্পার কম্পোনেন্ট টেক্সট এবং বর্ডারের জন্য
const ProfileField = ({ label, value, isLast }) => (
  <div className={`flex py-5 ${!isLast ? 'border-b border-gray-700/50' : ''}`}>
    <span className="w-40 font-semibold text-gray-200">{label}</span>
    <span className="text-gray-300">{value}</span>
  </div>
);

export default ProfileSection;