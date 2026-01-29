import { Bell } from 'lucide-react';
import React from 'react';

const CallLogsNavbar = () => {
    return (
         <div className="navbar bg-[rgba(17,27,60,1)] shadow-md">
  <div className="flex-1">
    <h1 className='font-normal text-[32px] pl-3'>Call Logs & History</h1>
  </div>
  <div className="flex items-center gap-6">
    <div className="dropdown dropdown-end">
      <Bell />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default CallLogsNavbar;