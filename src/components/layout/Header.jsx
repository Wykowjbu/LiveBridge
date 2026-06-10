import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useSidebar } from '@/context/sidebar';

const Header = ({ title = "Dashboard" }) => {
  const { setMobileOpen } = useSidebar();

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-6 glass-header sticky top-0 z-10 shrink-0">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-slate-500 hover:text-slate-800 hover:bg-white/50 -ml-1"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <h2 className="text-base sm:text-lg font-bold highlight-text">{title}</h2>

        <Separator orientation="vertical" className="h-6 mx-1 hidden sm:block" />

        <div className="items-center gap-2 hidden sm:flex">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600">
            Hệ thống Đồng bộ
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative hidden sm:block">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined" style={{ fontSize: '18px' }}>search</span>
          <Input
            className="glass-input text-sm text-slate-800 rounded-xl pl-10 pr-4 h-9 w-48 lg:w-64 focus-visible:ring-sky-400/50 placeholder:text-slate-400 border-white/40 bg-white/40 backdrop-blur-md"
            placeholder="Tìm kiếm..."
            type="text"
          />
        </div>

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
