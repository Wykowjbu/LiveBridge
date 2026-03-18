import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useEulerStream } from '../hooks/useEulerStream';
import LiquidGlass from '../components/LiquidGlassPanel';

/* ============================================================
   Trang chính Dashboard - LiveBridge Studio
   - Kết nối TikTok Live qua WebSocket (Eulerstream)
   - Hiển thị livestream placeholder
   - CommentBox realtime
   - Thống kê và gợi ý AI (mock data)
   ============================================================ */
const LiveStudioDashboard = () => {
  /* ---- State quản lý TikTok ID ---- */
  const [tiktokId, setTiktokId] = useState('');
  const { isConnected, messages, error, connect, disconnect } = useEulerStream();
  const messagesEndRef = useRef(null);

  /* ---- Tự động cuộn xuống comment mới nhất ---- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /* ---- Xử lý kết nối/ngắt kết nối ---- */
  const handleToggleConnect = () => {
    if (isConnected) {
      disconnect();
    } else {
      if (tiktokId.trim()) {
        connect(tiktokId.trim());
      }
    }
  };

  /* ---- Mock data cho AI Suggestions (Dữ liệu mẫu cho gợi ý AI) ---- */
  const aiSuggestions = [
    {
      type: 'Gợi ý',
      icon: 'lightbulb',
      color: 'text-amber-500',
      action: 'ÁP DỤNG',
      content: 'Tương tác đang giảm. Cân nhắc mở "Bình chọn" về màu sắc sản phẩm tiếp theo.',
    },
    {
      type: 'Chốt Sale',
      icon: 'campaign',
      color: 'text-emerald-500',
      action: 'NÓI CÂU NÀY',
      content: '"Chỉ còn 8 chiếc váy với mức giá sale này! Hết hôm nay giá sẽ quay về gốc nhé."',
      isItalic: true,
    }
  ];

  /* ---- Khai báo giao diện (UI Definition) ---- */
  return (
    <div className="flex flex-col h-full w-full">
      <Header title="LiveBridge Studio" />
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-hidden h-full z-10 relative">
        
        {/* ===============================================
            CỘT TRÁI: Kết nối & Stream Preview (Left Column)
            =============================================== */}
        <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="lg:col-span-3 p-5 flex flex-col gap-5 overflow-y-auto scrollbar-hide">
          
          {/* Khu vực nhập TikTok ID (TikTok ID Input) */}
          <div className="rounded-2xl p-5 shadow-sm bg-white/60 border border-white/80">
            <h3 className="text-slate-800 text-sm font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-sky-500">person_search</span>
              Kết nối TikTok Live
            </h3>
            
            {/* Ô nhập ID (ID Input field) */}
            <div className="flex gap-2 mb-3">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold select-none">@</span>
                <input
                  type="text"
                  value={tiktokId}
                  onChange={(e) => setTiktokId(e.target.value)}
                  disabled={isConnected}
                  placeholder="tên người dùng tiktok"
                  onKeyDown={(e) => e.key === 'Enter' && handleToggleConnect()}
                  className="w-full bg-white/70 border border-slate-200 rounded-xl py-2.5 pl-8 pr-3 text-sm text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-inner backdrop-blur-sm"
                />
              </div>
              <button
                onClick={handleToggleConnect}
                disabled={!tiktokId.trim() && !isConnected}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 shrink-0 border border-white/40 ${
                  isConnected
                    ? 'bg-red-500/10 text-red-600 hover:bg-red-500/20 border-red-200'
                    : 'bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-[0_4px_10px_rgba(14,165,233,0.3)] hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{isConnected ? 'stop_circle' : 'play_arrow'}</span>
                {isConnected ? 'Ngắt' : 'Kết nối'}
              </button>
            </div>

            {/* Trạng thái kết nối (Connection Status) */}
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold ${
              isConnected 
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                : 'bg-slate-50 text-slate-500 border border-slate-200'
            }`}>
              <span className={`size-2 rounded-full ${isConnected ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-slate-400'}`}></span>
              {isConnected ? `Đang kết nối @${tiktokId}` : 'Chưa kết nối'}
            </div>

            {/* Hiển thị lỗi nếu có (Error display) */}
            {error && (
              <div className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 text-xs font-medium border border-red-200">
                <span className="material-symbols-outlined text-sm">error</span>
                {error}
              </div>
            )}
          </div>

          {/* Khung giả lập Livestream (Livestream Placeholder) */}
          <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden group ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            {isConnected ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center mb-4 animate-pulse border border-sky-400/30">
                    <span className="material-symbols-outlined text-sky-400 text-3xl">videocam</span>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-1">Đang phát trực tiếp</h3>
                  <p className="text-slate-400 text-xs font-medium mb-4 max-w-[200px]">TikTok không hỗ trợ nhúng iframe livestream trực tiếp.</p>
                  <a 
                    href={`https://www.tiktok.com/@${tiktokId}/live`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-xs font-bold transition-colors bg-sky-500/10 px-4 py-2 rounded-full border border-sky-400/30"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    Xem trên TikTok
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <span className="material-symbols-outlined text-slate-400 text-5xl mb-3">videocam_off</span>
                  <p className="text-slate-500 text-sm font-medium">Nhập TikTok ID và nhấn "Kết nối"</p>
                </div>
              </>
            )}
            
            {/* Live badge khi đang kết nối */}
            {isConnected && (
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="glass-capsule text-white text-xs font-semibold px-3 py-1.5 flex items-center gap-1.5 bg-black/30 border-white/20">
                  <span className="size-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                  LIVE
                </div>
                <div className="glass-capsule text-white text-xs font-semibold px-3 py-1.5 flex items-center gap-1.5 bg-black/30 border-white/20">
                  <span className="material-symbols-outlined text-[14px] text-yellow-400">chat</span>
                  {messages.length}
                </div>
              </div>
            )}
          </div>

          {/* Chỉ số nhanh (Key Metrics) */}
          <div className="grid grid-cols-2 gap-4">
            <LiquidGlass cornerRadius={16} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-4 flex flex-col">
              <span className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Doanh thu</span>
              <span className="text-slate-800 text-xl font-bold">12.540.000đ</span>
              <span className="text-emerald-700 text-xs font-medium flex items-center mt-2 bg-emerald-100 px-2 py-1 rounded-full w-fit border border-emerald-200">
                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +8%
              </span>
            </LiquidGlass>
            <LiquidGlass cornerRadius={16} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-4 flex flex-col">
              <span className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Đơn hàng</span>
              <span className="text-slate-800 text-xl font-bold">142</span>
              <span className="text-emerald-700 text-xs font-medium flex items-center mt-2 bg-emerald-100 px-2 py-1 rounded-full w-fit border border-emerald-200">
                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +5%
              </span>
            </LiquidGlass>
          </div>
        </LiquidGlass>

        {/* ===============================================
            CỘT GIỮA: CommentBox - Bình luận Realtime (Middle Column)
            =============================================== */}
        <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="lg:col-span-6 flex flex-col h-full relative overflow-hidden">
          {/* Header CommentBox */}
          <div className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white/40 backdrop-blur-md sticky top-0 z-10 shadow-sm">
            <div className="flex items-center gap-3">
              <h3 className="text-slate-800 font-bold text-lg">Khung Chat</h3>
              {isConnected && (
                <span className="glass-capsule bg-indigo-50 border-indigo-200 text-indigo-700 text-xs px-3 py-1 shadow-sm">
                  {messages.length} bình luận
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <button className="glass-capsule size-10 flex items-center justify-center text-slate-500 hover:text-slate-800">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
              </button>
            </div>
          </div>
          
          {/* Khu vực hiển thị bình luận (Comments Area) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {!isConnected && messages.length === 0 ? (
              /* Trạng thái chưa kết nối (Not connected state) */
              <div className="h-full flex flex-col items-center justify-center text-center px-6">
                <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-slate-400 text-4xl">forum</span>
                </div>
                <h3 className="text-slate-700 text-lg font-bold mb-2">Chưa có bình luận</h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  Nhập TikTok Username ở cột bên trái và nhấn "Kết nối" để bắt đầu nhận bình luận realtime.
                </p>
              </div>
            ) : (
              /* Danh sách bình luận realtime (Realtime comment list) */
              <>
                {messages.map((msg, idx) => (
                  <div key={idx} className="flex gap-3 group animate-[fadeIn_0.3s_ease-out]">
                    {/* Avatar */}
                    <div className="size-10 rounded-full flex-shrink-0 bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-sm border-2 border-white">
                      <span className="text-white text-xs font-bold">
                        {(msg.nickname || msg.uniqueId || '?').charAt(0).toUpperCase()}
                      </span>
                    </div>
                    
                    {/* Nội dung bình luận (Comment content) */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-slate-800 text-sm font-bold truncate">{msg.nickname || msg.uniqueId || 'Anonymous'}</span>
                        {msg.uniqueId && (
                          <span className="text-[10px] text-slate-400 font-medium">@{msg.uniqueId}</span>
                        )}
                      </div>
                      <div className="message-glass p-3 rounded-tr-2xl rounded-br-2xl rounded-bl-sm rounded-tl-2xl">
                        <p className="text-slate-700 text-sm leading-relaxed break-words">{msg.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
          
          {/* Ô nhập tin nhắn dưới cùng (Bottom message input) */}
          <div className="p-6 border-t border-slate-200 bg-white/60 backdrop-blur-xl sticky bottom-0">
            <div className="relative">
              <input 
                className="w-full glass-capsule pl-5 pr-14 py-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-inner" 
                placeholder="Nhập tin nhắn để gửi đến tất cả nền tảng..." 
                type="text" 
              />
              <button className="absolute right-2 top-2 p-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full text-white hover:opacity-90 transition-opacity flex items-center justify-center border border-white/40 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </div>
        </LiquidGlass>

        {/* ===============================================
            CỘT PHẢI: Sản phẩm ghim & Gợi ý AI (Right Column)
            =============================================== */}
        <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="lg:col-span-3 p-5 flex flex-col h-full gap-5 overflow-y-auto scrollbar-hide">
          {/* Sản phẩm đang ghim (Now Pinned) */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">Đang ghim</h3>
              <span className="text-xs text-indigo-600 font-bold cursor-pointer">Đổi sản phẩm</span>
            </div>
            <div className="rounded-2xl border border-indigo-100 p-4 shadow-sm relative overflow-hidden bg-indigo-50/80">
               <div className="absolute top-3 right-3 z-10">
                 <span className="glass-capsule bg-red-100 border-red-200 text-red-600 text-[10px] font-bold px-2.5 py-1 animate-pulse">CÒN 8</span>
               </div>
               <div className="flex gap-4 relative z-10">
                 <div className="w-24 h-24 bg-cover bg-center rounded-xl shrink-0 border border-white" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApgnwkjsu3dJ95-eCPSyvGnodjqT69-VMX5D-8_0c3m0-_jkszAYVZP8N4yiu0gIz1SoANOf_KbYBa5lC-0BWtK7c1Y-3BkU_4MFRjoLYTGEzgxPBoiF8YjrISTe4h51WSFRSh6ywaF6h23LGsWNnF9mMX5ZutM03tbkWsKFlLxZFBN6QzkHsKbdk5yRwOnL1Ot-8t2ne5cW92J9HHhRus0L3wJR4mpOjx3I1JzHuujTbSevrYlSA3TwYLTSREA2LLCFXTCVeMDr01")' }}></div>
                 <div className="flex flex-col justify-center">
                   <h4 className="text-slate-800 font-bold text-sm leading-snug mb-1">Áo khoác Denim Vintage Wash</h4>
                   <p className="text-slate-500 text-xs font-mono">SKU: DJ-042-BLU</p>
                   <div className="flex items-end gap-2 mt-2">
                     <span className="text-slate-800 font-black text-xl">450.000đ</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Gợi ý AI (AI Assistant) */}
          <div className="flex flex-col gap-3 flex-1 min-h-0">
             <div className="flex justify-between items-center px-1">
               <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">Trợ lý AI</h3>
             </div>
             <div className="rounded-2xl p-4 flex flex-col gap-3 flex-1 overflow-y-auto bg-white/50 border border-white/80">
                {aiSuggestions.map((sug, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white hover:border-indigo-200 transition-all cursor-pointer group shadow-sm border border-white/80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-700 font-bold flex items-center gap-1.5 uppercase tracking-wide">
                        <span className={`material-symbols-outlined text-[16px] ${sug.color}`}>{sug.icon}</span> {sug.type}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 text-indigo-600 text-[10px] font-black transition-opacity bg-indigo-50 px-2 py-0.5 rounded-full">{sug.action}</span>
                    </div>
                    <p className={`text-slate-600 text-xs leading-relaxed font-medium ${sug.isItalic ? 'italic' : ''}`}>{sug.content}</p>
                  </div>
                ))}
             </div>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default LiveStudioDashboard;
