import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

/* ============================================================
   Layout chính (Main Layout)
   - Sidebar bên trái (chung toàn bộ app)
   - Nền tím gradient orbs (giống trang AI Settings)
   - Outlet hiển thị nội dung từng trang
   ============================================================ */
const MainLayout = () => {
  return (
    <div className="font-display text-slate-800 h-screen flex overflow-hidden selection:bg-indigo-500/30 selection:text-slate-900 bg-[#f4f5f8]">
      {/* Hiệu ứng nền tím gradient orbs (Purple background orbs) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(116,54,242,0.15)] blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[rgba(54,152,242,0.15)] blur-[120px] opacity-60"></div>
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-[rgba(242,54,179,0.1)] blur-[120px] opacity-60"></div>
      </div>
      
      {/* Sidebar chung (Common Sidebar) */}
      <Sidebar />
      
      {/* Nội dung chính (Main Content Area) */}
      <main className="flex-1 flex flex-col min-w-0 relative z-10 w-full overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
