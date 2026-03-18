import React from 'react';
import Header from '../components/Header';
import LiquidGlass from '../components/LiquidGlassPanel';

const Analytics = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header title="Phân tích dữ liệu" />
      
      <div className="flex-1 overflow-y-auto w-full max-w-[1440px] mx-auto p-6 custom-scrollbar">
        
        <div className="flex flex-wrap items-end justify-between gap-4 pb-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">Phân Tích Hiệu Suất Live</h1>
                <p className="text-slate-600 text-lg font-medium tracking-wide">Dữ liệu thời gian thực cho buổi phát đa nền tảng đang diễn ra.</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-white/60 border border-white/80 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_32px_0_rgba(0,0,0,0.05)] rounded-2xl px-4 py-2 flex items-center gap-3">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse"></span>
                    <span className="text-sm font-bold text-red-500 uppercase tracking-widest">Đang Live • 00:42:15</span>
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-white/60 border border-white/80 backdrop-blur-md px-5 py-2.5 text-sm font-bold text-slate-800 hover:bg-white/80 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">share</span> Chia sẻ Báo cáo
                </button>
                <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 py-2.5 text-sm font-bold text-white hover:from-red-500 hover:to-red-400 transition-colors shadow-[0_4px_10px_rgba(239,68,68,0.3)] border border-red-400/50">
                    <span className="material-symbols-outlined text-[18px]">stop_circle</span> Kết thúc Live
                </button>
            </div>
        </div>

        {/* Tổng quan chỉ số (Metrics Overview) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
            {/* Doanh thu (Revenue) */}
            <LiquidGlass cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="relative overflow-hidden p-6 flex flex-col gap-2">
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent opacity-80 pointer-events-none"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Tổng Doanh Thu</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500 border border-teal-500/20 shadow-sm">
                        <span className="material-symbols-outlined">attach_money</span>
                    </div>
                </div>
                <p className="relative z-10 mt-2 text-4xl font-black text-slate-900 tracking-tighter" style={{ textShadow: '0 0 15px rgba(20, 184, 166, 0.4)' }}>$12,450</p>
                <div className="relative z-10 flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 bg-teal-500/10 text-teal-500 px-2 py-0.5 rounded text-xs font-bold border border-teal-500/20">
                        <span className="material-symbols-outlined text-sm">trending_up</span> +15%
                    </span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">so với live trước</span>
                </div>
            </LiquidGlass>

            {/* Conversion */}
            <LiquidGlass cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="relative overflow-hidden p-6 flex flex-col gap-2">
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent opacity-80 pointer-events-none"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Tỉ lệ chuyển đổi</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 border border-sky-500/20 shadow-sm">
                        <span className="material-symbols-outlined">shopping_cart_checkout</span>
                    </div>
                </div>
                <p className="relative z-10 mt-2 text-4xl font-black text-slate-900 tracking-tighter" style={{ textShadow: '0 0 15px rgba(14, 165, 233, 0.4)' }}>4.2%</p>
                <div className="relative z-10 flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 bg-teal-500/10 text-teal-500 px-2 py-0.5 rounded text-xs font-bold border border-teal-500/20">
                        <span className="material-symbols-outlined text-sm">trending_up</span> +0.8%
                    </span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">TB: 3.4%</span>
                </div>
            </LiquidGlass>

            {/* Viewers */}
            <LiquidGlass cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="relative overflow-hidden p-6 flex flex-col gap-2">
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent opacity-80 pointer-events-none"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Người xem Trực tiếp</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shadow-sm">
                        <span className="material-symbols-outlined">group</span>
                    </div>
                </div>
                <p className="relative z-10 mt-2 text-4xl font-black text-slate-900 tracking-tighter" style={{ textShadow: '0 0 15px rgba(99, 102, 241, 0.4)' }}>2,845</p>
                <div className="relative z-10 flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-xs font-bold border border-red-500/20">
                        <span className="material-symbols-outlined text-sm">trending_down</span> -2%
                    </span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">so với 10ph trước</span>
                </div>
            </LiquidGlass>

            {/* Top Platform */}
            <LiquidGlass cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="relative overflow-hidden p-6 flex flex-col gap-2">
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent opacity-80 pointer-events-none"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Nền tảng Top 1</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 border border-pink-500/20 shadow-sm">
                        <span className="material-symbols-outlined">podium</span>
                    </div>
                </div>
                <p className="relative z-10 mt-2 text-3xl font-black text-slate-900 tracking-tight truncate" style={{ textShadow: '0 0 15px rgba(236, 72, 153, 0.4)' }}>TikTok Shop</p>
                <div className="relative z-10 flex items-center gap-1 mt-3">
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-pink-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-xs font-bold text-slate-600 ml-2">65%</p>
                </div>
            </LiquidGlass>
        </div>

        {/* Dãy Biểu đồ (Charts Row) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
             {/* Biểu đồ chính (Main Chart) */}
            <LiquidGlass cornerRadius={20} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="relative z-10 lg:col-span-2 p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                        <h3 className="text-xl font-black text-slate-900 tracking-wide">Doanh thu theo thời gian</h3>
                        <p className="text-sm font-medium text-slate-500 mt-1">Biểu đồ lợi nhuận trên tất cả nền tảng đang kích hoạt</p>
                    </div>
                </div>
                <div className="relative h-[320px] w-full">
                     {/* Dummy Chart Background lines */}
                    <div className="absolute inset-0 flex flex-col justify-between text-xs font-bold text-slate-400">
                        <div className="w-full border-b border-dashed border-slate-200 pb-1 relative"><span className="absolute -top-3 left-0 bg-transparent px-1">$15k</span></div>
                        <div className="w-full border-b border-dashed border-slate-200 pb-1 relative"><span className="absolute -top-3 left-0 bg-transparent px-1">$10k</span></div>
                        <div className="w-full border-b border-dashed border-slate-200 pb-1 relative"><span className="absolute -top-3 left-0 bg-transparent px-1">$5k</span></div>
                        <div className="w-full border-b border-solid border-slate-300 pb-1 relative"><span className="absolute -top-3 left-0 bg-transparent px-1">$0</span></div>
                    </div>
                    {/* SVG Chart Placeholder */}
                    <svg className="absolute inset-0 h-full w-full overflow-visible ml-8" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="chartGradientPrimary" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3"></stop>
                                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M0,90 C10,90 10,70 20,65 C30,60 30,75 40,50 C50,25 50,40 60,35 C70,30 70,20 80,15 C90,10 90,25 100,5 L100,100 L0,100 Z" fill="url(#chartGradientPrimary)" stroke="none"></path>
                        <path d="M0,80 C15,80 15,75 30,78 C45,81 45,70 60,72 C75,74 75,65 90,68 L100,65" fill="none" stroke="#6366f1" strokeDasharray="2,3" strokeLinecap="round" strokeWidth="1.2" vectorEffect="non-scaling-stroke"></path>
                        <path d="M0,90 C10,90 10,70 20,65 C30,60 30,75 40,50 C50,25 50,40 60,35 C70,30 70,20 80,15 C90,10 90,25 100,5" fill="none" stroke="#0ea5e9" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                        <circle cx="60" cy="35" fill="#fff" r="2" stroke="#0ea5e9" strokeWidth="1"></circle>
                        <circle cx="20" cy="65" fill="#0ea5e9" r="1.5"></circle>
                        <circle cx="40" cy="50" fill="#0ea5e9" r="1.5"></circle>
                        <circle cx="80" cy="15" fill="#0ea5e9" r="1.5"></circle>
                    </svg>
                    
                    <div className="absolute left-[calc(60%+2rem)] top-[25%] -translate-x-1/2 -translate-y-[120%] pb-2 z-20">
                        <div className="rounded-xl bg-white/80 backdrop-blur-xl border border-white px-3 py-2 text-sm font-bold text-slate-900 shadow-sm">
                            <span className="text-sky-500">$9,240</span> <span className="text-slate-500 text-xs ml-1 font-medium">@ 35m</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-between text-xs font-bold text-slate-500 ml-8">
                    <span>Bắt đầu</span><span>10m</span><span>20m</span><span>30m</span><span>40m</span><span>50m</span><span>Hiện tại</span>
                </div>
            </LiquidGlass>

            {/* Phân bổ tương tác (Distribution) */}
            <LiquidGlass cornerRadius={20} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="relative z-10 p-8 flex flex-col">
                <div className="mb-8">
                    <h3 className="text-xl font-black text-slate-900 tracking-wide">Phân bổ tương tác</h3>
                    <p className="text-sm font-medium text-slate-500 mt-1">Hành vi & mức độ tương tác của người dùng</p>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-6">
                    <div className="flex flex-1 items-end justify-around gap-6 px-2 h-[240px]">
                        <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
                            <div className="relative w-full rounded-t-xl bg-slate-100 border border-slate-200 border-b-0 h-[40%] overflow-hidden shadow-sm">
                                <div className="absolute bottom-0 w-full rounded-t-xl bg-gradient-to-t from-sky-500 to-sky-500/40 h-full"></div>
                            </div>
                            <span className="text-sm font-bold text-slate-800">Mua</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
                            <div className="relative w-full rounded-t-xl bg-slate-100 border border-slate-200 border-b-0 h-[65%] overflow-hidden shadow-sm">
                                <div className="absolute bottom-0 w-full rounded-t-xl bg-gradient-to-t from-indigo-500 to-indigo-500/40 h-full"></div>
                            </div>
                            <span className="text-sm font-bold text-slate-800">Giỏ hàng</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
                            <div className="relative w-full rounded-t-xl bg-slate-100 border border-slate-200 border-b-0 h-[25%] overflow-hidden shadow-sm">
                                <div className="absolute bottom-0 w-full rounded-t-xl bg-gradient-to-t from-teal-500 to-teal-500/40 h-full"></div>
                            </div>
                            <span className="text-sm font-bold text-slate-800">Hỏi đáp</span>
                        </div>
                         <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
                            <div className="relative w-full rounded-t-xl bg-slate-100 border border-slate-200 border-b-0 h-[15%] overflow-hidden shadow-sm">
                                <div className="absolute bottom-0 w-full rounded-t-xl bg-gradient-to-t from-pink-400 to-pink-400/40 h-full"></div>
                            </div>
                            <span className="text-sm font-bold text-slate-800">Chia sẻ</span>
                        </div>
                    </div>
                     <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tổng Tương Tác</span>
                            <span className="text-2xl font-black text-slate-900 mt-1">850</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-sm font-bold text-teal-600 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">+12%</span>
                            <span className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">so với TB</span>
                        </div>
                    </div>
                </div>
            </LiquidGlass>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
