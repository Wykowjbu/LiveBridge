import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LiquidGlass from '../components/LiquidGlassPanel';

/* ============================================================
   Landing Page - Glassmorphism UI + Video Background
   Phiên bản tiếng Việt đầy đủ cho thị trường Việt Nam
   ============================================================ */

const pricingPlans = [
  {
    name: 'Starter',
    price: '299.000',
    oldPrice: '399.000',
    badge: 'Miễn phí tháng đầu',
    badgeColor: 'from-emerald-400 to-teal-500',
    color: 'from-sky-400 to-blue-600',
    shadow: 'shadow-sky-500/20',
    features: [
      '200 tin nhắn AI/ngày',
      'Tự động trả lời comment livestream',
      'Tự động trả lời inbox',
      'Huấn luyện AI theo shop',
      'Dashboard quản lý',
    ],
    cta: 'Dùng thử ngay',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '649.000',
    oldPrice: '899.000',
    badge: 'Phổ biến nhất',
    badgeTrial: 'Miễn phí tháng đầu',
    badgeColor: 'from-violet-500 to-purple-600',
    color: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-500/30',
    features: [
      '500 tin nhắn AI/ngày',
      'AI phản hồi comment livestream',
      'AI inbox tự động',
      'Custom AI training',
      'Dashboard analytics',
    ],
    cta: 'Chọn gói Pro',
    highlight: true,
  },
  {
    name: 'Business',
    price: '1.999.000',
    oldPrice: '2.499.000',
    badge: null,
    badgeColor: '',
    color: 'from-amber-400 to-orange-500',
    shadow: 'shadow-amber-500/20',
    features: [
      'Không giới hạn tin nhắn AI',
      'AI livestream auto reply',
      'AI inbox automation',
      'Custom AI agent',
      'Hỗ trợ ưu tiên 24/7',
    ],
    cta: 'Liên hệ tư vấn',
    highlight: false,
  },
  {
    name: 'Pay As You Go',
    price: null,
    oldPrice: null,
    badge: 'Linh hoạt',
    badgeColor: 'from-rose-400 to-pink-500',
    color: 'from-rose-400 to-pink-500',
    shadow: 'shadow-rose-500/20',
    paygo: [
      { amount: '50.000đ', messages: '4.000 tin nhắn AI' },
      { amount: '200.000đ', messages: '12.500 tin nhắn AI' },
      { amount: '700.000đ', messages: '50.000 tin nhắn AI' },
    ],
    features: ['Không cần đăng ký gói tháng', 'Nạp khi cần dùng', 'Không hết hạn số dư'],
    cta: 'Mua ngay',
    highlight: false,
  },
];

const reviews = [
  {
    name: 'Nguyễn Thị Mai',
    shop: 'Shop Mỹ Phẩm Hana',
    avatar: 'M',
    color: 'from-pink-400 to-rose-500',
    stars: 5,
    text: 'LiveBridge giúp shop mình trả lời comment livestream tự động. Doanh thu tăng rõ rệt sau 2 tuần dùng thử!',
  },
  {
    name: 'Trần Văn Hùng',
    shop: 'VH Fashion Store',
    avatar: 'H',
    color: 'from-sky-400 to-blue-500',
    stars: 5,
    text: 'Khách hỏi giá rất nhiều khi livestream, AI trả lời ngay lập tức nên không bị mất khách. Siêu tiện!',
  },
  {
    name: 'Lê Thị Bích',
    shop: 'Bích Organic Foods',
    avatar: 'B',
    color: 'from-emerald-400 to-teal-500',
    stars: 5,
    text: 'Trước đây phải thuê 2 người trả lời comment, giờ chỉ cần LiveBridge, tiết kiệm hơn 10 triệu/tháng.',
  },
  {
    name: 'Phạm Đức Long',
    shop: 'Long Tech Accessories',
    avatar: 'L',
    color: 'from-violet-400 to-purple-500',
    stars: 5,
    text: 'AI học được cách trả lời đúng phong cách shop mình. Khách hàng cứ tưởng có người thật đang trả lời.',
  },
  {
    name: 'Hoàng Minh Châu',
    shop: 'Châu Baby Store',
    avatar: 'C',
    color: 'from-amber-400 to-orange-500',
    stars: 5,
    text: 'Dashboard phân tích rất chi tiết, biết được giờ nào khách tương tác nhiều nhất để tập trung livestream.',
  },
  {
    name: 'Vũ Thị Hoa',
    shop: 'Hoa Home Decor',
    avatar: 'H',
    color: 'from-teal-400 to-cyan-500',
    stars: 5,
    text: 'Inbox tự động xử lý đơn hàng 24/7, ngủ dậy thấy đã có hàng chục đơn chốt xong rồi. Quá tuyệt vời!',
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.landing-fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
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
            <button onClick={scrollToPricing} className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-300">
              Bảng giá
            </button>
            <a href="#integration" className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-300">
              Tích hợp
            </a>
            <a href="#about" className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-300">
              Về chúng tôi
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
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">Nền tảng AI cho Livestream Bán hàng</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
            <span className="landing-gradient-text">Trợ lý AI</span>
            <br />
            <span className="text-white drop-shadow-2xl">Bán hàng Livestream</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Nền tảng hỗ trợ bán hàng trực tuyến thông minh — Tự động trả lời bình luận,
            quản lý đơn hàng &amp; phân tích dữ liệu trong thời gian thực.
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
              onClick={scrollToPricing}
              className="landing-glass-btn-outline px-8 py-4 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">payments</span>
                Xem bảng giá
              </span>
            </button>
          </div>

          {/* Floating stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: '99%', label: 'Uptime' },
              { value: '<1s', label: 'Phản hồi' },
              { value: '24/7', label: 'AI Hoạt động' },
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
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg ${feature.shadow} border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-white text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-medium">{feature.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-white/40 group-hover:text-white/70 transition-colors duration-300">
                  <span className="text-xs font-bold uppercase tracking-wider">Tìm hiểu thêm</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING PLAN SECTION ===== */}
      <section ref={pricingRef} id="pricing" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 landing-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full landing-glass-badge text-xs font-bold text-white/80 uppercase tracking-widest mb-4">
              Bảng giá
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Gói phù hợp với <span className="landing-gradient-text">mọi shop</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
              Linh hoạt lựa chọn gói theo nhu cầu — tất cả đều bao gồm AI thông minh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`landing-fade-up relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 ${
                  plan.highlight ? 'landing-pricing-highlight' : 'landing-glass-card'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${plan.color}`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Badge row */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[28px]">
                    {plan.badge && (
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-white bg-gradient-to-r ${plan.badgeColor}`}>
                        {plan.badge}
                      </span>
                    )}
                    {plan.badgeTrial && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-500">
                        {plan.badgeTrial}
                      </span>
                    )}
                  </div>

                  {/* Plan name */}
                  <h3 className="text-xl font-black text-white mb-4">{plan.name}</h3>

                  {/* Price */}
                  {plan.price ? (
                    <div className="mb-6">
                      {plan.oldPrice && (
                        <div className="text-white/40 text-sm font-medium line-through mb-1">
                          {plan.oldPrice}đ / tháng
                        </div>
                      )}
                      <div className="flex items-end gap-1">
                        <span className={`text-3xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                          {plan.price}đ
                        </span>
                        <span className="text-white/50 text-sm mb-1">/ tháng</span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <div className="text-white/60 text-sm font-semibold mb-3">Nạp theo nhu cầu:</div>
                      <div className="space-y-2">
                        {plan.paygo.map((tier, ti) => (
                          <div key={ti} className="flex items-center justify-between landing-paygo-row px-3 py-2 rounded-xl">
                            <span className={`text-sm font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>{tier.amount}</span>
                            <span className="text-white/70 text-xs font-semibold">→ {tier.messages}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-white/75 font-medium">
                        <span className={`mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <span className="material-symbols-outlined text-white text-[10px]">check</span>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => navigate('/login')}
                    className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
                      plan.highlight
                        ? `bg-gradient-to-r ${plan.color} text-white shadow-lg shadow-violet-500/30 border border-white/20`
                        : 'landing-glass-btn-outline text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER REVIEW SECTION ===== */}
      <section id="reviews" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 landing-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full landing-glass-badge text-xs font-bold text-white/80 uppercase tracking-widest mb-4">
              Đánh giá
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Khách hàng nói gì về <span className="landing-gradient-text">LiveBridge</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
              Hàng nghìn chủ shop đã tin tưởng LiveBridge để tăng doanh thu
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <LiquidGlass
                key={i}
                cornerRadius={24}
                blurAmount={0.02}
                saturation={120}
                displacementScale={6}
                aberrationIntensity={1}
                elasticity={0.2}
                overLight={false}
                className="p-6 landing-fade-up transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.stars }).map((_, si) => (
                    <span key={si} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-white/75 text-sm leading-relaxed font-medium mb-6 italic">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-black text-base flex-shrink-0 border border-white/20`}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{review.name}</div>
                    <div className="text-white/50 text-xs font-medium">{review.shop}</div>
                  </div>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATION SECTION ===== */}
      <section id="integration" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto landing-fade-up">
          <LiquidGlass cornerRadius={32} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={1} elasticity={0.15} overLight={false} className="p-12 md:p-16">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full landing-glass-badge text-xs font-bold text-white/80 uppercase tracking-widest mb-4">
                Tích hợp hệ thống
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Kết nối LiveBridge vào <span className="landing-gradient-text">hệ thống của bạn</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                LiveBridge cung cấp API và giải pháp tích hợp linh hoạt — dễ dàng kết nối với phần mềm quản lý, website, app, hay bất kỳ hệ thống nào của bạn.
              </p>
            </div>

            {/* Platform icons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {[
                { label: 'Shopee', color: 'from-orange-400 to-red-500' },
                { label: 'TikTok Shop', color: 'from-slate-700 to-slate-900' },
                { label: 'Facebook', color: 'from-blue-500 to-blue-700' },
                { label: 'Zalo', color: 'from-blue-400 to-cyan-500' },
                { label: 'Website', color: 'from-violet-500 to-purple-600' },
                { label: 'Hệ thống ERP', color: 'from-emerald-500 to-teal-600' },
              ].map((p, i) => (
                <div key={i} className={`px-4 py-2 rounded-full bg-gradient-to-r ${p.color} text-white text-sm font-bold border border-white/20 shadow-lg`}>
                  {p.label}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: 'api', value: 'REST API', label: 'Dễ tích hợp' },
                { icon: 'webhook', value: 'Webhook', label: 'Thời gian thực' },
                { icon: 'lock', value: 'OAuth 2.0', label: 'Bảo mật cao' },
                { icon: 'support_agent', value: '24/7', label: 'Hỗ trợ kỹ thuật' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <span className="material-symbols-outlined text-3xl text-sky-400 mb-2 block">{item.icon}</span>
                  <div className="text-xl font-black text-white">{item.value}</div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="mailto:contact@livebridge.vn"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 rounded-2xl text-white font-bold text-base shadow-[0_8px_30px_rgba(14,165,233,0.4)] hover:shadow-[0_15px_50px_rgba(14,165,233,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
                Liên hệ chúng tôi
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <p className="text-white/40 text-xs font-medium mt-4">Đội ngũ kỹ thuật sẽ phản hồi trong vòng 24 giờ</p>
            </div>
          </LiquidGlass>
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'groups', value: '1.000+', label: 'Người bán' },
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
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Cột 1: Logo + Mô tả */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white text-lg">leak_add</span>
                </div>
                <span className="text-lg font-black text-white">LiveBridge</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed font-medium">
                Nền tảng AI giúp tự động trả lời comment và inbox khi livestream bán hàng.
              </p>
              <div className="mt-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/40 font-medium">Hệ thống đang hoạt động</span>
              </div>
            </div>

            {/* Cột 2: Sản phẩm */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Sản phẩm</h4>
              <ul className="space-y-3">
                {['Bảng giá', 'Tính năng', 'AI Agent', 'Dashboard'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="landing-footer-link text-white/50 hover:text-white text-sm font-medium transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 3: Công ty */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Công ty</h4>
              <ul className="space-y-3">
                {['Giới thiệu', 'Liên hệ', 'Chính sách bảo mật', 'Điều khoản sử dụng'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="landing-footer-link text-white/50 hover:text-white text-sm font-medium transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 4: Mạng xã hội */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Kết nối với chúng tôi</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Facebook', href: '#' },
                  {label: 'TikTok', href: '#' },
                  { label: 'YouTube', href: '#' },
                  { label: 'contact@livebridge.vn', href: 'mailto:contact@livebridge.vn' },
                ].map((social, i) => (
                  <li key={i}>
                    <a href={social.href} className="landing-footer-link flex items-center gap-2.5 text-white/50 hover:text-white text-sm font-medium transition-colors duration-300">
                      <span className="material-symbols-outlined text-base">{social.icon}</span>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 font-medium">
              © 2026 LiveBridge. All rights reserved. Được vận hành bởi AI.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-white/30 hover:text-white/60 font-medium transition-colors">Chính sách bảo mật</a>
              <a href="#" className="text-xs text-white/30 hover:text-white/60 font-medium transition-colors">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
