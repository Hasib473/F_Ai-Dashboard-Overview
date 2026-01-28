import { NavLink } from "react-router";
import {
  Home,
  Phone,
  Calendar,
  Settings,
  LogOut,
  Zap,
} from "lucide-react";

const Sidebar = () => {

const linkClass = ({ isActive }) => `
  flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium transition-all
${isActive 
  ? "text-white border border-white/30 shadow-[0_6px_10px_rgba(255,255,255,0.25)]" 
  : "text-gray-400 hover:text-white"
}
`;


  return (
    <div className="h-full bg-[rgba(17,27,60,1)] p-4 shadow-[6px_0_25px_rgba(0,102,255,0.1)]">
    
      <div className="text-xl font-bold mb-8 flex justify-center pt-5 items-center gap-2">
        <div className="
        relative flex items-center justify-center 
        w-12 h-12 rounded-[14px] 
        bg-gradient-to-tr from-[#00ff87] via-[#00f2a9] to-[#00d4ff]
        
        shadow-[0_0_20px_rgba(0,242,169,0.1)]
        before:absolute before:inset-0 before:rounded-[14px] before:bg-white/10 before:pointer-events-none
      ">
        
        {/* Lucide Zap Icon */}
        <Zap 
          size={24} 
          fill="black" 
          stroke="black" 
          strokeWidth={2.5} 
          className="relative z-10" 
        />
        
      </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={linkClass}>
          <Home size={18} /> Dashboard Overview
        </NavLink>

        <NavLink to="/calls" className={linkClass}>
          <Phone size={18} /> Call Logs
        </NavLink>

        <NavLink to="/appointments" className={linkClass}>
          <Calendar size={18} /> Appointments
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <Settings size={18} /> Settings
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 left-4 right-4">
        <button className="flex items-center gap-3 text-red-400 hover:text-red-500">
          <LogOut size={18} /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
