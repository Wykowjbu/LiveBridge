import React from 'react';
import Header from '../components/Header';
import LiquidGlass from '../components/LiquidGlassPanel';

const MessageInbox = () => {
  const messages = [
    {
      id: 1,
      sender: 'Nguyễn Thị Hoa',
      time: '2 phút trước',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      platform: 'facebook',
      isVip: true,
      text: 'Mẫu này có màu đỏ size M không shop? Có giao hỏa tốc không?',
      intent: 'Hỏi Mua',
      aiReply: 'Dạ có sẵn màu Đỏ size M ạ!',
      active: true,
    },
    {
      id: 2,
      sender: 'Nguyễn Văn A',
      time: '3 phút trước',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      platform: 'shopee',
      text: 'Đơn hàng #SPX88291 bao giờ giao vậy shop? Mình cần gấp.',
      intent: 'Trạng thái đơn',
      aiReply: 'Đã đóng gói',
    },
    {
      id: 3,
      sender: 'Minh Tú',
      time: '8 phút trước',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      platform: 'tiktok',
      text: 'Combo này có kèm serum không? Xin giá inbox.',
      intent: 'Hỏi Sản Phẩm',
    }
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <Header title="Hộp thư" />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Danh sách tin nhắn (Messages List) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
              Cần Xử Lý Gấp
            </h3>
            <span className="text-xs text-slate-400">Sắp xếp theo ưu tiên</span>
          </div>

          <div className="flex flex-col gap-4">
            {messages.map((msg) => (
              <LiquidGlass key={msg.id} cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.18} overLight={true} className={`group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 ${msg.id === 1 ? 'neon-glow-high' : 'neon-glow-medium'} hover:border-sky-300 transition-all cursor-pointer relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${msg.id === 1 ? 'from-red-50' : 'from-amber-50'} to-transparent pointer-events-none`}></div>
                
                {/* Avatar & Platform Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="size-14 rounded-full bg-cover bg-center ring-2 ring-white shadow-md" style={{ backgroundImage: `url("${msg.avatar}")` }}></div>
                  <div className="absolute -bottom-1 -right-1 bg-white backdrop-blur-sm rounded-full p-1 border border-slate-100 shadow-sm flex flex-col items-center justify-center size-6 ring-2 ring-white">
                    {msg.platform === 'facebook' && (
                        <svg fill="#1877F2" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                        </svg>
                    )}
                    {msg.platform === 'shopee' && (
                        <svg fill="#EE4D2D" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.387 7.031c.325.758.325 1.708.325 1.708s1.616-.271 1.616-.832c0-2.484-3.525-4.52-7.85-4.52-4.325 0-7.85 2.036-7.85 4.52 0 .561 1.616.832 1.616.832s0-.95.325-1.708c.575-1.34 3.016-2.27 5.909-2.27 2.893 0 5.334.93 5.909 2.27zm.983 2.96c-.475-.084-2.85-.312-2.85-.312s-.758 1.628-2.616 1.628c-1.858 0-2.616-1.628-2.616-1.628s-2.375.228-2.85.312c-2.85.498-3.083 2.534-3.083 2.534-.233 2.534 2.125 4.392 3.842 4.392.367 0 .733-.036 1.1-.108v-2.09c-.583-.156-1.008-.684-1.008-1.308 0-.75.608-1.356 1.358-1.356.75 0 1.358.606 1.358 1.356 0 .624-.425 1.152-1.008 1.308v2.09c.367.072.733.108 1.1.108 1.717 0 4.075-1.858 3.842-4.392 0 0-.233-2.036-3.083-2.534z"></path>
                        </svg>
                    )}
                    {msg.platform === 'tiktok' && (
                        <svg fill="black" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.589 6.686a4.793 4.793 0 0 1-1.29-.181 5.378 5.378 0 0 1-.958-.354c-.31-.17-.61-.39-.897-.648a5.275 5.275 0 0 1-.724-.871 4.316 4.316 0 0 1-.502-1.02A4.908 4.908 0 0 1 15 2.185V2.18h-3.41v12.213a3.546 3.546 0 0 1-.362 1.547 3.546 3.546 0 0 1-1.026 1.258 3.546 3.546 0 0 1-1.468.685 3.546 3.546 0 0 1-3.32-.685 3.546 3.546 0 0 1-1.258-1.258 3.546 3.546 0 0 1-.462-1.547c0-1.95 1.583-3.535 3.535-3.535.485 0 .96.096 1.405.283V7.527a6.953 6.953 0 0 0-1.405-.141C3.385 7.386 0 10.771 0 14.945c0 4.175 3.385 7.56 7.56 7.56 4.175 0 7.56-3.385 7.56-7.56V8.583c1.07.766 2.36 1.218 3.75 1.233v-3.414a5.617 5.617 0 0 1-.281.284z"></path>
                        </svg>
                    )}
                  </div>
                </div>
                
                {/* Nội dung tin nhắn (Message Content) */}
                <div className="flex-1 min-w-0 z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-slate-800 font-bold text-base tracking-wide">{msg.sender}</h4>
                    {msg.isVip && <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-purple-100 text-purple-600 border border-purple-200 backdrop-blur-md">VIP</span>}
                    <span className="text-xs text-slate-400 ml-auto">{msg.time}</span>
                  </div>
                  <p className="text-slate-600 text-sm truncate pr-4">{msg.text}</p>
                  
                  {/* Labels / AI Suggestions */}
                  <div className="flex items-center gap-2 mt-3 block">
                    <span className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-green-50 text-green-600 border border-green-200 backdrop-blur-md">
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>shopping_cart</span> {msg.intent}
                    </span>
                    {msg.aiReply && (
                      <span className="flex items-center gap-1 text-xs text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>smart_toy</span> Gợi ý: {msg.aiReply}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="hidden group-hover:flex items-center gap-2 sm:ml-4 z-10">
                   <button className="p-2.5 rounded-xl glass-button text-sky-600 hover:text-sky-700 transition-colors bg-white/50">
                     <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>reply</span>
                   </button>
                   <button className="p-2.5 rounded-xl bg-white/40 hover:bg-red-50 hover:text-red-500 text-slate-400 transition-colors border border-white/80 backdrop-blur-md shadow-sm">
                     <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
                   </button>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>

        {/* Khung chat chi tiết (Conversation Thread Detail) */}
        <LiquidGlass cornerRadius={0} blurAmount={0.01} saturation={120} displacementScale={3} aberrationIntensity={1} elasticity={0.12} overLight={true} className="w-[400px] flex-shrink-0 flex flex-col z-20 hidden lg:flex relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>
          
          <div className="p-6 pb-4 border-b border-white/60 relative z-10">
             <div className="flex gap-2 mb-2">
                 <h2 className="text-2xl font-bold text-slate-800 tracking-wide">Nguyễn Thị Hoa</h2>
             </div>
             <div className="flex gap-3 mt-4">
                <LiquidGlass cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="flex-1 p-3 text-center">
                   <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Giá trị</p>
                   <p className="text-lg font-bold text-green-600">11.500.000₫</p>
                </LiquidGlass>
                <LiquidGlass cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="flex-1 p-3 text-center bg-purple-50">
                   <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Hạng</p>
                   <p className="text-lg font-bold text-purple-600">VIP</p>
                </LiquidGlass>
             </div>
          </div>
          
          {/* Lịch sử chat (Chat History) */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 relative z-10">
             <div className="flex gap-4">
               <div className="size-10 flex-shrink-0 rounded-full bg-cover bg-center shadow-md ring-2 ring-white" style={{ backgroundImage: 'url("https://randomuser.me/api/portraits/women/44.jpg")' }}></div>
               <div className="glass-card text-slate-700 text-sm p-4 rounded-tl-none max-w-[85%] leading-relaxed bg-white/60">
                 Mẫu này có màu đỏ size M không shop? Có giao hỏa tốc không?
               </div>
             </div>
             
             {/* Gợi ý AI (AI Suggestion Frame) */}
             <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.18} overLight={true} className="p-5 border-sky-200 shadow-[0_8px_32px_rgba(14,165,233,0.05)] relative overflow-hidden group bg-gradient-to-br from-white/80 to-white/40">
               <p className="text-xs text-sky-600 font-bold mb-3 uppercase tracking-widest relative z-10 flex items-center gap-2">
                 <span className="size-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.4)]"></span> AI Gợi Ý Phản Hồi
               </p>
               <p className="text-sm text-slate-700 mb-5 leading-relaxed relative z-10">
                 Chào bạn! Cửa hàng vẫn còn sẵn màu Đỏ size M nhé! 🛍️ Shop có hỗ trợ giao hỏa tốc nhận trong ngày ạ. <br/><br/>
                 <a className="inline-flex items-center gap-1 text-sky-600 bg-sky-50 hover:bg-sky-100 px-2 py-1 rounded-lg border border-sky-200 transition-colors text-xs font-medium mt-1" href="#">
                     <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>link</span> [Shopee: Váy Đỏ size M - Mua Ngay]
                 </a>
               </p>
               <div className="flex gap-3 relative z-10">
                 <button className="flex-1 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm font-bold py-2.5 px-4 rounded-xl transition-all hover:brightness-105 flex items-center justify-center gap-2">
                     <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span> Gửi
                 </button>
               </div>
             </LiquidGlass>
          </div>
          
          {/* Box nhập liệu chữ (Input Box) */}
          <div className="p-5 border-t border-white/60 glass-header relative z-10">
             <div className="glass-input rounded-2xl p-3 focus-within:ring-2 focus-within:ring-sky-400/50 focus-within:border-sky-300 transition-all bg-white/60">
                <textarea className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 border-none focus:ring-0 resize-none px-2 py-1" placeholder="Nhập tin nhắn phản hồi thủ công..." rows="2"></textarea>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-200/50">
                  <div className="flex gap-3 text-slate-400">
                    <span className="material-symbols-outlined cursor-pointer hover:text-sky-500" style={{ fontSize: '22px' }}>image</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-[#EE4D2D]" style={{ fontSize: '22px' }}>shopping_bag</span>
                  </div>
                  <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full p-2.5 shadow-[0_4px_10px_rgba(14,165,233,0.3)] border border-white/40">
                     <span className="material-symbols-outlined block" style={{ fontSize: '20px' }}>send</span>
                  </button>
                </div>
             </div>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default MessageInbox;
