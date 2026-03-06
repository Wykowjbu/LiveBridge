import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LiquidGlass from '../components/LiquidGlassPanel';

/* ============================================================
   Landing Page - Glassmorphism UI + Video Background
   Lấy cảm hứng từ glassFolio (AmreshSinha/glassFolio)
   - Video nền fullscreen, autoplay, loop, muted
   - Các phần tử sử dụng hiệu ứng kính mờ (frosted glass)
   ============================================================ */

const LandingPage = () => {
  const navigate = useNavigate();
  const featuresRef = useRef(null);

  /* Scroll-reveal animation cho các section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('landing-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.landing-fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-display text-white">

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
        {/* Dark overlay gradient để text dễ đọc */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Subtle color tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/20" />
      </div>

      {/* ===== GLASSMORPHISM NAVBAR ===== */}
      <LiquidGlass
        cornerRadius={0}
        blurAmount={0.01}
        saturation={115}
        displacementScale={3}
        aberrationIntensity={1}
        elasticity={0.1}
        overLight={false}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
        className="px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/30 border border-white/20">
              <span className="material-symbols-outlined text-white text-xl">leak_add</span>
            </div>
            <span className="text-xl font-black tracking-tight text-white drop-shadow-lg">LiveBridge</span>
          </div>

          {/* Nav Links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={scrollToFeatures} className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-300">
              Tính năng
            </button>
            <a href="#about" className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-300">
              Về chúng tôi
            </a>
            <a href="#contact" className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-300">
              Liên hệ
            </a>
          </div>

          {/* CTA Button */}
          <LiquidGlass
            cornerRadius={100}
            blurAmount={0.02}
            saturation={115}
            displacementScale={8}
            aberrationIntensity={1}
            elasticity={0.35}
            overLight={false}
            onClick={() => navigate('/login')}
            className="px-6 py-2.5 text-sm font-bold text-white cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">login</span>
              Đăng nhập
            </span>
          </LiquidGlass>
        </div>
      </LiquidGlass>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center landing-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full landing-glass-badge mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">AI-Powered Live Commerce</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
            <span className="landing-gradient-text">Trợ lý AI</span>
            <br />
            <span className="text-white drop-shadow-2xl">Bán hàng Livestream</span>
          </h1>

          {/* 2 Sub Heading */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Nền tảng hỗ trợ bán hàng trực tuyến thông minh — Tự động trả lời bình luận, 
            quản lý đơn hàng & phân tích dữ liệu trong thời gian thực.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="group px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 rounded-2xl text-white font-bold text-base shadow-[0_8px_30px_rgba(14,165,233,0.4)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
            >
              <span className="flex items-center gap-2">
                Bắt đầu ngay
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </button>

            <button
              onClick={scrollToFeatures}
              className="landing-glass-btn-outline px-8 py-4 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">expand_more</span>
                Tìm hiểu thêm
              </span>
            </button>
          </div>

          {/* Floating stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: '99%', label: 'Uptime' },
              { value: '<1s', label: 'Phản hồi' },
              { value: '24/7', label: 'AI Active' },
            ].map((stat, i) => (
              <LiquidGlass
                key={i}
                cornerRadius={16}
                blurAmount={0.02}
                saturation={120}
                displacementScale={8}
                aberrationIntensity={1}
                elasticity={0.2}
                overLight={false}
                className="p-4 text-center"
              >
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-white/60 uppercase tracking-wider">{stat.label}</div>
              </LiquidGlass>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white/40 text-3xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section ref={featuresRef} id="features" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20 landing-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full landing-glass-badge text-xs font-bold text-white/80 uppercase tracking-widest mb-4">
              Tính năng nổi bật
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Mọi thứ bạn cần cho <span className="landing-gradient-text">Livestream</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
              Tích hợp AI thông minh để tối ưu hóa trải nghiệm bán hàng trực tuyến của bạn
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'smart_toy',
                color: 'from-violet-500 to-purple-600',
                shadow: 'shadow-violet-500/30',
                title: 'AI Trả lời Tự động',
                desc: 'Chatbot AI phản hồi bình luận trong livestream tức thì, hỗ trợ đặt hàng và giải đáp thắc mắc 24/7.',
              },
              {
                icon: 'shopping_cart',
                color: 'from-sky-400 to-blue-600',
                shadow: 'shadow-sky-500/30',
                title: 'Quản lý Đơn hàng',
                desc: 'Tự động tạo và theo dõi đơn hàng từ bình luận livestream. Đồng bộ với Shopee, TikTok Shop, Zalo.',
              },
              {
                icon: 'analytics',
                color: 'from-emerald-400 to-teal-600',
                shadow: 'shadow-emerald-500/30',
                title: 'Phân tích Thời gian thực',
                desc: 'Dashboard trực quan hiển thị lượt xem, tương tác, doanh số — tất cả trong thời gian thực khi livestream.',
              },
            ].map((feature, i) => (
              <LiquidGlass
                key={i}
                cornerRadius={24}
                blurAmount={0.02}
                saturation={120}
                displacementScale={8}
                aberrationIntensity={1}
                elasticity={0.2}
                overLight={false}
                className="group p-8 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 landing-fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg ${feature.shadow} border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-white text-2xl">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-medium">{feature.desc}</p>

                {/* Subtle arrow link */}
                <div className="mt-6 flex items-center gap-2 text-white/40 group-hover:text-white/70 transition-colors duration-300">
                  <span className="text-xs font-bold uppercase tracking-wider">Tìm hiểu thêm</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto landing-fade-up">
          <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={1} elasticity={0.15} overLight={false} className="p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Tại sao chọn <span className="landing-gradient-text">LiveBridge</span>?
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium mb-10">
              LiveBridge là nền tảng trợ lý AI hỗ trợ bán hàng qua livestream đầu tiên tại Việt Nam. 
              Chúng tôi giúp bạn tự động hóa quy trình bán hàng, tăng doanh số và tiết kiệm thời gian 
              — tất cả trong một nền tảng duy nhất.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'groups', value: '1000+', label: 'Người bán' },
                { icon: 'package_2', value: '50K+', label: 'Đơn hàng/tháng' },
                { icon: 'store', value: '4+', label: 'Sàn TMĐT' },
                { icon: 'speed', value: '0.3s', label: 'Phản hồi TB' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <span className="material-symbols-outlined text-3xl text-sky-400 mb-2 block">{item.icon}</span>
                  <div className="text-2xl font-black text-white">{item.value}</div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </LiquidGlass>
        </div>
      </section>

      {/* ===== CONTACT / CTA SECTION ===== */}
      <section id="contact" className="relative z-10 py-32 px-6">
        <div className="max-w-3xl mx-auto text-center landing-fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Sẵn sàng <span className="landing-gradient-text">bắt đầu</span>?
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 font-medium">
            Đăng ký ngay hôm nay để trải nghiệm sức mạnh của AI trong livestream bán hàng.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="group px-10 py-5 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 rounded-2xl text-white font-bold text-lg shadow-[0_8px_30px_rgba(14,165,233,0.4)] hover:shadow-[0_15px_50px_rgba(14,165,233,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl">rocket_launch</span>
              Bắt đầu miễn phí
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 py-10 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">leak_add</span>
            </div>
            <span className="text-sm font-bold text-white/70">LiveBridge</span>
          </div>
          <p className="text-xs text-white/40 font-medium">
            © 2026 LiveBridge. All rights reserved. Powered by AI.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
              <span className="material-symbols-outlined text-xl">language</span>
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
              <span className="material-symbols-outlined text-xl">forum</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
