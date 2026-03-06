import React from 'react';
import { useNavigate } from 'react-router-dom';
import LiquidGlass from '../components/LiquidGlassPanel';

/* ============================================================
   Trang Đăng nhập (Login Page)
   - Giao diện mock, không có backend thực
   - Nhấn "Đăng nhập" sẽ chuyển thẳng đến Dashboard
   - Sử dụng liquid-glass-react cho hiệu ứng kính lỏng
   ============================================================ */
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - chuyển thẳng đến Dashboard (Phase 1 không có backend)
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f5f8] relative overflow-hidden font-display">
      {/* Hiệu ứng nền tím (Purple background orbs) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(116,54,242,0.15)] blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(54,152,242,0.15)] blur-[120px] opacity-60"></div>
        <div className="absolute top-[30%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-[rgba(242,54,179,0.1)] blur-[100px] opacity-60"></div>
      </div>

      {/* Card Đăng nhập chính (Login Card) */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <LiquidGlass
          cornerRadius={24}
          blurAmount={0.01}
          saturation={120}
          displacementScale={5}
          aberrationIntensity={0.5}
          elasticity={0.15}
          overLight={true}
          className="p-10"
        >
          {/* Logo & Tiêu đề (Logo & Title) */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 mb-5 shadow-[0_8px_25px_rgba(14,165,233,0.3)] border border-white/40">
              <span className="material-symbols-outlined text-white text-3xl">leak_add</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">LiveBridge</h1>
            <p className="text-slate-500 text-sm font-medium">
              Nền tảng Trợ lý AI Hỗ trợ Bán hàng qua Livestream
            </p>
          </div>

          {/* Form đăng nhập (Login Form) */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                defaultValue="admin@livebridge.vn"
                className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300 transition-all backdrop-blur-sm shadow-inner"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mật khẩu</label>
              <input
                type="password"
                defaultValue="password123"
                className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300 transition-all backdrop-blur-sm shadow-inner"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(14,165,233,0.3)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.4)] transition-all border border-white/40 flex items-center justify-center gap-2 text-sm"
            >
              <span className="material-symbols-outlined text-lg">login</span>
              Đăng nhập
            </button>
          </form>

          {/* Ghi chú Phase 1 (Phase note) */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 text-center">
            <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
              Phase 1 MVP • Mock Login • Không cần backend
            </p>
          </div>
        </LiquidGlass>

        {/* Feature highlights bên dưới card (Feature cards) */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <LiquidGlass
            cornerRadius={16}
            blurAmount={0.02}
            saturation={120}
            displacementScale={8}
            aberrationIntensity={1}
            elasticity={0.2}
            overLight={true}
            className="p-4 text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center mx-auto mb-2">
              <span className="material-symbols-outlined text-sky-500 text-lg">videocam</span>
            </div>
            <span className="text-[11px] text-slate-600 font-semibold">Live Stream</span>
          </LiquidGlass>
          <LiquidGlass
            cornerRadius={16}
            blurAmount={0.02}
            saturation={120}
            displacementScale={8}
            aberrationIntensity={1}
            elasticity={0.2}
            overLight={true}
            className="p-4 text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center mx-auto mb-2">
              <span className="material-symbols-outlined text-indigo-500 text-lg">chat</span>
            </div>
            <span className="text-[11px] text-slate-600 font-semibold">Realtime Chat</span>
          </LiquidGlass>
          <LiquidGlass
            cornerRadius={16}
            blurAmount={0.02}
            saturation={120}
            displacementScale={8}
            aberrationIntensity={1}
            elasticity={0.2}
            overLight={true}
            className="p-4 text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center mx-auto mb-2">
              <span className="material-symbols-outlined text-purple-500 text-lg">smart_toy</span>
            </div>
            <span className="text-[11px] text-slate-600 font-semibold">AI Assistant</span>
          </LiquidGlass>
        </div>
      </div>
    </div>
  );
};

export default Login;
