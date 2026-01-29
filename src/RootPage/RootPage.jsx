import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const RootPage = () => {
    return (
        <div className="flex h-screen bg-[#0B1220] text-white">
      
      <div className="w-64 fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

    
      <div className="ml-64 flex-1 bg-[#0b1c41] overflow-y-auto ">
        <Outlet />
      </div>
    </div>
    );
};

export default RootPage;