import React from 'react';
import { useNavigate } from 'react-router-dom';
import LiquidGlass from '../components/LiquidGlassPanel';

/* ============================================================
   Trang Đăng nhập (Login Page)
   - Giao diện mock, không có backend thực
   - Nhấn "Đăng nhập" sẽ chuyển thẳng đến Dashboard
   - Hỗ trợ đăng nhập qua Facebook, TikTok, Google
   ============================================================ */
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/app/dashboard');
  };

  const handleSocialLogin = () => {
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f5f8] relative overflow-hidden font-display">
      {/* ===== VIDEO BACKGROUND ===== */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`/LiveBridge/Image/video_background.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/20" />
      </div>

      {/* Card Đăng nhập chính */}
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
          {/* Logo & Tiêu đề */}
          <div className="text-center mb-8">
            <img src="/logo.png" alt="LiveBridge Logo" className="w-16 h-16 rounded-2xl mb-5 shadow-[0_8px_25px_rgba(14,165,233,0.3)] border border-white/40 object-cover" />
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">LiveBridge</h1>
            <p className="text-slate-500 text-sm font-medium">
              Nền tảng Trợ lý AI Hỗ trợ Bán hàng qua Livestream
            </p>
          </div>

          {/* Đăng nhập bằng mạng xã hội */}
          <div className="space-y-3 mb-6">
            {/* Facebook */}
            <button
              onClick={handleSocialLogin}
              className="login-social-btn w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
              style={{ background: 'linear-gradient(135deg, #1877f2, #0d5dbf)' }}
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="flex-1 text-center">Đăng nhập với Facebook</span>
            </button>

            {/* TikTok */}
            <button
              onClick={handleSocialLogin}
              className="login-social-btn w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
              style={{ background: 'linear-gradient(135deg, #010101, #2d2d2d)' }}
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.82a8.18 8.18 0 0 0 4.77 1.52V6.9a4.83 4.83 0 0 1-1-.21z"/>
              </svg>
              <span className="flex-1 text-center">Đăng nhập với TikTok</span>
            </button>

            {/* Google */}
            <button
              onClick={handleSocialLogin}
              className="login-social-btn w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm text-slate-700 bg-white border border-slate-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-md active:scale-95"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="flex-1 text-center">Đăng nhập với Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 font-semibold">hoặc đăng nhập bằng email</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Form đăng nhập */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                defaultValue="admin@livebridge.vn"
                className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300 transition-all backdrop-blur-sm shadow-inner"
                placeholder="email@cua-ban.com"
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

          {/* Ghi chú */}
          <div className="mt-6 pt-5 border-t border-slate-200/60 text-center">
            <p className="text-[11px] text-slate-400 font-medium">
              Chưa có tài khoản?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/login'); }} className="text-sky-500 font-bold hover:underline">
                Đăng ký miễn phí
              </a>
            </p>
          </div>
        </LiquidGlass>

        {/* Feature highlights bên dưới card */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <LiquidGlass cornerRadius={16} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-4 text-center">
            <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center mx-auto mb-2">
              <span className="material-symbols-outlined text-sky-500 text-lg">videocam</span>
            </div>
            <span className="text-[11px] text-slate-600 font-semibold">Livestream AI</span>
          </LiquidGlass>
          <LiquidGlass cornerRadius={16} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-4 text-center">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center mx-auto mb-2">
              <span className="material-symbols-outlined text-indigo-500 text-lg">chat</span>
            </div>
            <span className="text-[11px] text-slate-600 font-semibold">Trả lời tự động</span>
          </LiquidGlass>
          <LiquidGlass cornerRadius={16} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-4 text-center">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center mx-auto mb-2">
              <span className="material-symbols-outlined text-purple-500 text-lg">smart_toy</span>
            </div>
            <span className="text-[11px] text-slate-600 font-semibold">AI Thông minh</span>
          </LiquidGlass>
        </div>
      </div>
    </div>
  );
};

export default Login;
