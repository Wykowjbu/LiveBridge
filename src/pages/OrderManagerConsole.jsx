import React from 'react';
import Header from '../components/Header';
import LiquidGlass from '../components/LiquidGlassPanel';

const OrderManagerConsole = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header title="Quản lý Đơn hàng" />
      
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-6 custom-scrollbar">
        <div className="flex h-full gap-6 min-w-max">
          
          {/* View Pending Payment (Chờ thanh toán) */}
          <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="flex flex-col w-[340px] h-full p-1">
            <div className="p-4 flex items-center justify-between border-b border-white/40 bg-white/20 rounded-t-[20px]">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"></div>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">Chờ thanh toán</span>
              </div>
              <span className="bg-white/60 backdrop-blur-md text-[10px] px-2.5 py-1 rounded-full text-slate-800 font-bold border border-white/80">2</span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
              {/* Order Card */}
              <LiquidGlass cornerRadius={16} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-4 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-xl bg-cover bg-center border border-white/60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvschqju4-poPkufUEOxXs8k9qRBYWBlGaYJP0zuOcaSvXwJX4CY_z_5avgWeyyuNTx5wzz8uF_OGtClQ_V3uXwXRBxXvWEpqbAsY2iC-XL0rVOWyUxM24kyWaGnLWXKdre9bSdMMB7uN1hutRqOT4vkMr_IelsoVGyoMOeEElXBXA_TAESfLEWc63J34JQNHuNCLf0-6u6llmaQi5HGfhrWR--n4c3L908pXK1Zkq2pl6LxBQrvmvETthUYRnMLL5S6Vp9OvPVDW6')" }}></div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">Smart Watch Series 7</h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">Sarah Jenkins</p>
                    </div>
                  </div>
                  <div className="platform-icon-glass shopee-badge size-7 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-black">S</span>
                  </div>
                </div>
                <div className="flex items-end justify-between pt-2 border-t border-slate-200">
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono mb-0.5">ID: #3024</p>
                    <span className="text-sm font-bold text-slate-800">$249.00</span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-orange-100 text-orange-600 border border-orange-200 uppercase tracking-wider backdrop-blur-md shadow-sm">Chưa xử lý</span>
                </div>
              </LiquidGlass>
            </div>
          </LiquidGlass>

          {/* View Processing (Đang xử lý) */}
          <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="flex flex-col w-[340px] h-full p-1">
            <div className="p-4 flex items-center justify-between border-b border-white/40 bg-white/20 rounded-t-[20px]">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">Đang xử lý</span>
              </div>
              <span className="bg-white/60 backdrop-blur-md text-[10px] px-2.5 py-1 rounded-full text-slate-800 font-bold border border-white/80">1</span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
              <LiquidGlass cornerRadius={16} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-4 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-xl bg-cover bg-center border border-white/60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsu2onB3wYHOovXY7pundOWtjxk6xF6GLQKk_aCjI8T011-PwRLotWJEzdSCC9XhSalWrnW2NgZYJTsYg3hG0YxSsJvVKx3yNCf6zqCG1xduGAaxFJvcajamm700BbwLNH6nwvqvTNuUhEVd707YW7kJgvDNQYBZE41k5KzgZQ3qYfFy9jFsA-mEcERJh0w6SkJtDXLNdZ-BP0MKPpvMP5C0k-ugt1F5Ewvhe5BQojDQ3FHzQr799XMOZnAOjGjgjELH1PcDd83f86')" }}></div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">iPhone 13 Case</h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">Emma Wilson</p>
                    </div>
                  </div>
                  <div className="platform-icon-glass zalo-badge size-7 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-black">Z</span>
                  </div>
                </div>
                <div className="flex items-end justify-between pt-2 border-t border-slate-200">
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono mb-0.5">ID: #3018</p>
                    <span className="text-sm font-bold text-slate-800">$35.00</span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-blue-100 text-blue-600 border border-blue-200 uppercase tracking-wider backdrop-blur-md shadow-sm">Đã thanh toán</span>
                </div>
              </LiquidGlass>
            </div>
          </LiquidGlass>
          
          {/* Order Details Panel (Chi tiết Đơn hàng) */}
          <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="w-[420px] shrink-0 h-full flex flex-col overflow-hidden ml-6 relative z-50">
            <div className="px-8 pt-10 pb-6 flex items-start justify-between relative z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight drop-shadow-sm">Đơn hàng #3021</h3>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-orange-100 text-orange-600 border border-orange-200 uppercase tracking-wider shadow-sm">Chưa xử lý</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="platform-icon-glass shopee-badge rounded-full px-3 py-1 text-[10px] font-bold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-[#EE4D2D] shadow-[0_0_4px_#EE4D2D]"></span>
                    Shopee Store
                  </div>
                  <span className="text-slate-500 text-[11px] font-medium tracking-wide flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> Oct 24, 2023 • 4:32 PM
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto px-8 space-y-8 custom-scrollbar pb-10 relative z-10">
              <LiquidGlass cornerRadius={16} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-5 relative overflow-hidden group">
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">inventory_2</span> Sản phẩm (1)
                </h4>
                <div className="flex gap-5">
                  <div className="size-20 rounded-xl bg-cover bg-center border border-white/60 shrink-0 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfAdKiISVsuy_fldOHx0LuMSf2WKLJ1lWGhoOBbUCcuZ7lP1udYLq4QTTD_bDt_sgEERsWkZDDd4kFZS7HMRseJp9oWXTPlB9cY-ySVbN353qgLXbMsmSvMRfPWsaWRajwahZB7leNOByJFfCGC4IkyBR3ct_473nS77IATNEz6NvBOYJYm4gPcTiukJ8kzOV5w15jQSe0jplslaZDl4SYNC3bZ9ZtE6eLM62VIV7Z6LTNAeUgWVLf9I9hhT3LRiWRuyoEtfjtr3yk')" }}></div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="text-sm font-bold text-slate-800 truncate drop-shadow-sm">Nike Air Max 90</h5>
                      <span className="text-sm font-bold text-slate-800 bg-white/60 px-2 py-0.5 rounded-md border border-white/80 shadow-sm">$129.50</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-mono mb-3">SKU: NK-AM90-RW-10</p>
                    <div className="flex flex-wrap gap-2">
                       <span className="bg-slate-800 text-white px-2 py-1 rounded text-[10px] font-bold">SL: 1</span>
                    </div>
                  </div>
                </div>
              </LiquidGlass>
              
              <section>
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">local_shipping</span> Thông tin Giao hàng
                </h4>
                <LiquidGlass cornerRadius={16} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-5 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="size-8 rounded-full bg-white/60 border border-white/80 flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-slate-600 text-sm">person</span>
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-slate-800 drop-shadow-sm">Michael Chen</p>
                      <p className="text-slate-500 mt-1 text-[12px] font-mono">+1 (555) 902-1244</p>
                    </div>
                  </div>
                </LiquidGlass>
              </section>
            </div>
            
            <div className="w-full p-6 bg-white/80 backdrop-blur-2xl border-t border-white/80 space-y-3 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
              <button className="w-full bg-slate-800 backdrop-blur-md text-white h-12 rounded-xl text-sm font-bold hover:bg-slate-700 transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                  <span className="material-symbols-outlined text-lg">receipt_long</span> Gửi hóa đơn nền tảng
              </button>
            </div>
          </LiquidGlass>
        </div>
      </div>
    </div>
  );
};

export default OrderManagerConsole;
