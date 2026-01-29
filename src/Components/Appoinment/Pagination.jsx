import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 py-8 mt-auto">
      {/* Previous Button */}
      <button className="flex items-center gap-1 text-gray-500 hover:text-white transition-colors px-3">
        <ChevronLeft size={18} />
        <span className="text-sm font-medium">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        <button className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-white/5 rounded-md transition-all">
          1
        </button>
        
        {/* Active Page */}
        <button className="w-8 h-8 flex items-center justify-center bg-blue-400 text-[#0d1436] font-bold rounded-md shadow-[0_0_10px_rgba(96,165,250,0.5)]">
          2
        </button>

        <button className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-white/5 rounded-md">
          3
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-white/5 rounded-md">
          4
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-white/5 rounded-md">
          5
        </button>

        <span className="text-gray-500 px-1">...</span>

        <button className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-white/5 rounded-md">
          11
        </button>
      </div>

      {/* Next Button */}
      <button className="flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors px-3">
        <span className="text-sm font-medium">Next</span>
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;