import React from 'react';
import { NavLink } from 'react-router-dom';
import LiquidGlass from './LiquidGlassPanel';

const Sidebar = () => {
  /* Danh sách menu điều hướng (Navigation menu items) */
  const navItems = [
    { name: 'Dashboard', path: '/app/dashboard', icon: 'dashboard' },
    { name: 'Inbox', path: '/app/inbox', icon: 'inbox', badge: 36 },
    { name: 'Orders', path: '/app/orders', icon: 'local_shipping' },
    { name: 'Products', path: '/app/products', icon: 'inventory_2' },
    { name: 'Analytics', path: '/app/analytics', icon: 'analytics' },
    { name: 'AI Settings', path: '/app/ai-settings', icon: 'psychology' },
    { name: 'Connections', path: '/app/platform-connect', icon: 'hub' },
  ];

  return (
    <LiquidGlass
      cornerRadius={0}
      blurAmount={0.01}
      saturation={120}
      displacementScale={3}
      aberrationIntensity={0.3}
      elasticity={0.12}
      overLight={true}
      className="w-64 flex-shrink-0 flex flex-col z-20 relative border-r border-white/60"
    >
      <div className="h-16 flex items-center gap-3 px-6 border-b border-white/60">
        {/* Logo từ thư mục Image (Logo from Image folder) */}
        <img src="/logo.png" alt="LiveBridge Logo" className="h-9 w-9 rounded-xl object-contain" />
        <div className="flex flex-col">
          <h1 className="text-slate-800 text-base font-bold leading-none tracking-tight">LiveBridge</h1>
          <p className="text-slate-500 text-xs font-medium mt-1">Unified Command</p>
        </div>
      </div>
      
      {/* Thông tin user (User Info) */}
      <div className="px-4 py-6">
        <LiquidGlass
          cornerRadius={16}
          blurAmount={0.02}
          saturation={120}
          displacementScale={8}
          aberrationIntensity={1}
          elasticity={0.2}
          overLight={true}
          className="flex items-center gap-3 p-3"
        >
          <div className="relative">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk7vOeBV9k_2-I4tKGPs0PBjPJTRNVysRoVvX1FdaTVAT6kDHBBMlflGQPHfZYRqV4h8Eik5EMNUDR8TXGHThU1Uqdla1jaGs-bBnyBTzp-l1xkVOYS3c0QD9geYIyLGMHXe0wSPP8IB1I2JTS3AFoZelqliPJfDSxoMO0Qm-SQcsdXGlx_XxoDS_b9U1paIMivTp--ZnrtBNrASVqyp0w-HMqs1qbkIh5pmy3onDTs9umbGIotmxLlXPWBC6r2S7GT92OQOXLApka")' }}
            ></div>
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white shadow-[0_0_8px_rgba(34,197,94,0.3)]"></div>
          </div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-slate-800 text-sm font-semibold truncate">Alex Morgan</p>
            <p className="text-slate-500 text-xs truncate">Stream Host</p>
          </div>
        </LiquidGlass>
      </div>

      {/* Menu Điều hướng (Navigation) */}
      <nav className="flex-1 overflow-y-auto px-4 space-y-1.5 custom-scrollbar">
        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 mt-2">Menu</p>
        
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-gradient-to-r from-sky-500/10 to-blue-500/5 text-sky-700 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]' 
                  : 'text-slate-600 hover:bg-white/50 hover:text-slate-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span 
                  className={`material-symbols-outlined transition-colors ${
                    isActive ? 'text-sky-500 fill-1' : 'group-hover:text-sky-500'
                  }`} 
                  style={{ fontSize: '20px' }}
                >
                  {item.icon}
                </span>
                <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {item.name}
                </span>
                {item.badge && (
                  <span className="ml-auto bg-sky-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-[0_2px_4px_rgba(14,165,233,0.3)]">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/60">
        <LiquidGlass
          cornerRadius={16}
          blurAmount={0.02}
          saturation={120}
          displacementScale={8}
          aberrationIntensity={1}
          elasticity={0.35}
          overLight={true}
          onClick={() => {}}
          className="flex w-full items-center justify-center gap-2 h-12 bg-gradient-to-r from-sky-400 to-blue-500 hover:brightness-105 text-white text-sm font-bold shadow-[0_4px_10px_rgba(14,165,233,0.3)] transition-all border border-white/40 cursor-pointer"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>podcasts</span>
          <span>Go Live</span>
        </LiquidGlass>
      </div>
    </LiquidGlass>
  );
};

export default Sidebar;
