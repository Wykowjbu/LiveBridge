import React from 'react';
import Header from '../components/Header';
import LiquidGlass from '../components/LiquidGlassPanel';

const MessageInbox = () => {
  const messages = [
    {
      id: 1,
      sender: 'Sarah Jenkins',
      time: '2m ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-isua0d4bD_Poy0xNmdIqcsIGlpVZHDLuGCVRSY-rJx66A9jsz8Nv9EejqVuzE3F14UdJnRDEzYTjeGx60qIa-5ef3y9ID3aV4CbfRQyDlwAfjVGtp5KJksnv7we28IE_WwvCdcz2cKY64agWxf40aPj4LPSI44lBaFqLrJ_xsqhzOaVia2s7HnZ2OJAv0KFW0qj1of4yBLogxLhMeco_5zkkI6wqcbBcjdk4-9lBh7ZCGRi51bFjvrerRr7eifv_safCw_R-kaHu',
      platform: 'TikTok',
      platformIcon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY85FBWNatZrMKLHs-UZnWx__N7E2Pvb1xa1vfnKicrTRMDRfM1BNxkwqFOjMfeCeufnJYRpelgWQhhG5uoFxaTOtud1SVb1zag338Kixw3NLgHxlK5oITUA5GmTJU5byCSaUQ6iLd_hXm0-wGncAlmgbFg3zk-aNalE8gMLh0oNau5R-uFjh-9V3bzvk6ynC0hlcHwikGHXOvxegfzn48c2rspuLkoMbH4tqGzQ3jQeWjOYAX5rINamyX8ar6duwFVjyJdEglncMU',
      isVip: true,
      text: 'Is this available in red size M? Also do you ship to Canada?',
      intent: 'Buying Interest',
      aiReply: 'Yes, red M is in stock!',
      active: true,
    },
    {
      id: 2,
      sender: 'Nguyen Van A',
      time: '3m ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdEXcmYY5m0z59XB500gbBtziImDIR7lvoHJb20LUnLG43ZgCkY3VPfDFU6eHpB6XIiJNWW3TIPncREMc_AKg4LruwVD6FASXN-JZowC4wGcr6MBiOORvs71aZFnG9t2PalYa_hJf7QtUus09CvD6ESHCsd6etXODKJVmnfj7S-2UZA7zU9xYJxFI1V1X6IKNVjSXYRo9gB55S8D4rlanEqJa7nL4Qx_03OgAe6lY0S-sP0-VVr1FdjaadUJDZ-cPS81iwzMjbBzMc',
      isShopee: true,
      text: 'When will my order #SPX88291 be shipped? I need it by Friday.',
      intent: 'Order Status',
      aiReply: 'Packed & Ready',
    },
    {
      id: 3,
      sender: 'Minh Tu',
      time: '8m ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKvAgi5tz9anEkvbQkQV-FirfBA_6EZ_39HytRKVru4garM9uI0cy-D92yksoRIB8SDNGxEMnM-taEafYDyKQgmDn0lgk14umvAhxwXOaeKkTeoV8ucJOQAOVAXJ8X-8P1BT0GR5I1vUeyZk3pyI_tb2WBQDU_TX3HS4dhOqokFlHinj2GuPJkTgaY-pt3q_5eZ6AzPgsbNVeuYlhdqlOppHwBpgmUn8hkpeFcc30zpQRaAxk0SYEoasLxg_TkMLgk0dy1m7BZ18FD',
      isZalo: true,
      text: 'Does this combo come with the serum? Price inbox pls.',
      intent: 'Product Inquiry',
    }
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <Header title="Inbox" />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Danh sách tin nhắn (Messages List) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
              Priority Attention Required
            </h3>
            <span className="text-xs text-slate-400">Sorted by Priority Score</span>
          </div>

          <div className="flex flex-col gap-4">
            {messages.map((msg) => (
              <LiquidGlass key={msg.id} cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.18} overLight={true} className={`group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 ${msg.id === 1 ? 'neon-glow-high' : 'neon-glow-medium'} hover:border-sky-300 transition-all cursor-pointer relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${msg.id === 1 ? 'from-red-50' : 'from-amber-50'} to-transparent pointer-events-none`}></div>
                
                {/* Avatar & Platform Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="size-14 rounded-full bg-cover bg-center ring-2 ring-white shadow-md" style={{ backgroundImage: `url("${msg.avatar}")` }}></div>
                  <div className="absolute -bottom-1 -right-1 bg-white backdrop-blur-sm rounded-full p-1 border border-slate-100 shadow-sm">
                    {msg.platformIcon && <img alt={msg.platform} className="w-4 h-4" src={msg.platformIcon} />}
                    {msg.isShopee && <span className="w-4 h-4 text-[#EE4D2D] font-bold text-[10px] flex items-center justify-center">S</span>}
                    {msg.isZalo && <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">Z</div>}
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
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>smart_toy</span> Suggested: {msg.aiReply}
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
                 <h2 className="text-2xl font-bold text-slate-800 tracking-wide">Sarah Jenkins</h2>
             </div>
             <div className="flex gap-3 mt-4">
                <LiquidGlass cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="flex-1 p-3 text-center">
                   <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">LTV</p>
                   <p className="text-lg font-bold text-green-600">$450.00</p>
                </LiquidGlass>
                <LiquidGlass cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="flex-1 p-3 text-center bg-purple-50">
                   <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Status</p>
                   <p className="text-lg font-bold text-purple-600">VIP</p>
                </LiquidGlass>
             </div>
          </div>
          
          {/* Lịch sử chat (Chat History) */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 relative z-10">
             <div className="flex gap-4">
               <div className="size-10 flex-shrink-0 rounded-full bg-cover bg-center shadow-md ring-2 ring-white" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdEXcmYY5m0z59XB500gbBtziImDIR7lvoHJb20LUnLG43ZgCkY3VPfDFU6eHpB6XIiJNWW3TIPncREMc_AKg4LruwVD6FASXN-JZowC4wGcr6MBiOORvs71aZFnG9t2PalYa_hJf7QtUus09CvD6ESHCsd6etXODKJVmnfj7S-2UZA7zU9xYJxFI1V1X6IKNVjSXYRo9gB55S8D4rlanEqJa7nL4Qx_03OgAe6lY0S-sP0-VVr1FdjaadUJDZ-cPS81iwzMjbBzMc")' }}></div>
               <div className="glass-card text-slate-700 text-sm p-4 rounded-tl-none max-w-[85%] leading-relaxed bg-white/60">
                 Is this available in red size M? Also do you ship to Canada?
               </div>
             </div>
             
             {/* Gợi ý AI (AI Suggestion Frame) */}
             <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.18} overLight={true} className="p-5 border-sky-200 shadow-[0_8px_32px_rgba(14,165,233,0.05)] relative overflow-hidden group bg-gradient-to-br from-white/80 to-white/40">
               <p className="text-xs text-sky-600 font-bold mb-3 uppercase tracking-widest relative z-10 flex items-center gap-2">
                 <span className="size-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.4)]"></span> AI Suggested Reply
               </p>
               <p className="text-sm text-slate-700 mb-5 leading-relaxed relative z-10">
                 Hey Sarah! Yes, we have the Red M in stock! 🛍️ And we definitely ship to Canada. Shipping usually takes 5-7 business days. <br/><br/>
                 <a className="inline-flex items-center gap-1 text-sky-600 bg-sky-50 hover:bg-sky-100 px-2 py-1 rounded-lg border border-sky-200 transition-colors text-xs font-medium mt-1" href="#">
                     <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>link</span> [Shopee: Red Dress M - Buy Now]
                 </a>
               </p>
               <div className="flex gap-3 relative z-10">
                 <button className="flex-1 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm font-bold py-2.5 px-4 rounded-xl transition-all hover:brightness-105 flex items-center justify-center gap-2">
                     <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span> Send
                 </button>
               </div>
             </LiquidGlass>
          </div>
          
          {/* Box nhập liệu chữ (Input Box) */}
          <div className="p-5 border-t border-white/60 glass-header relative z-10">
             <div className="glass-input rounded-2xl p-3 focus-within:ring-2 focus-within:ring-sky-400/50 focus-within:border-sky-300 transition-all bg-white/60">
                <textarea className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 border-none focus:ring-0 resize-none px-2 py-1" placeholder="Type your reply manually..." rows="2"></textarea>
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
