import React from 'react';

const Header = ({ title = "Dashboard" }) => {
  return (
    <header className="h-16 flex items-center justify-between px-6 glass-header sticky top-0 z-10 shrink-0">
      <div className="flex items-center gap-4">
        {/* Tiêu đề Trang (Page Title) */}
        <h2 className="text-lg font-bold highlight-text">{title}</h2>
        <div className="h-6 w-px bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-2">
           <span className="flex h-2 w-2 relative">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
           </span>
           <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600">
             System Sync Active
           </span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Tìm kiếm (Global Search) */}
        <div className="relative group hidden sm:block">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined" style={{ fontSize: '18px' }}>search</span>
          <input 
            className="glass-input text-sm text-slate-800 rounded-xl pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-sky-400/50 placeholder:text-slate-400 transition-all backdrop-blur-md" 
            placeholder="Search everything..." 
            type="text"
          />
        </div>
        
        {/* Các nút hành động (Action Buttons) */}
        <button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-white/50 rounded-xl transition-colors relative">
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
          <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-white/50 rounded-xl transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
