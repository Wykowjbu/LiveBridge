import React, { useState } from 'react';
import Header from '../components/Header';
import LiquidGlass from '../components/LiquidGlassPanel';

/* ============================================================
   Trang Cài Đặt AI & Nâng Cấp Gói (AI Settings & Persona)
   ============================================================ */
const AILogic = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full w-full overflow-hidden selection:bg-purple-500/20 selection:text-purple-600">
      <Header title="Cài đặt AI" />

      <div className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full p-6 pb-24 overflow-y-auto relative z-10 custom-scrollbar">
        <div className="mb-8 pl-2">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2 drop-shadow-sm">Định danh AI & Gói cước</h2>
          <p className="text-slate-500 text-base max-w-2xl font-medium">
            Thiết lập "Linh hồn" cho AI để trợ lý tự động phản hồi giống người thật nhất, đồng thời quản lý số lượng tin nhắn đăng ký.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* CỘT TRÁI: Cấu hình Persona & Luật (Left Column Config) */}
          <div className="xl:col-span-8 flex flex-col gap-8">
            
            {/* 1. ĐỊNH DANH (IDENTITY) */}
            <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-indigo-600 shadow-sm backdrop-blur-md">
                  <span className="material-symbols-outlined text-2xl">fingerprint</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Định danh Cửa hàng (Identity)</h3>
              </div>

              <div className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tên hiển thị / Tên Shop</label>
                    <input
                      type="text"
                      defaultValue="LiveBridge Official Store"
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-300 transition-all shadow-inner"
                      placeholder="Nhập tên shop của bạn..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Câu chào mặc định (Livestream)</label>
                    <input
                      type="text"
                      defaultValue="Dạ shop chào bạn ạ! Cần tư vấn gì bạn cứ comment nhé."
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-300 transition-all shadow-inner"
                      placeholder="Bỏ trống, AI sẽ tự chào..."
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bối cảnh / Giới thiệu Shop (Context)</label>
                  <textarea
                    rows={4}
                    defaultValue="Shop chuyên bán phụ kiện điện thoại, tai nghe, cáp sạc cam kết chính hãng. Khách mua trên livestream được freeship mọi đơn từ 500k. Đơn hàng sẽ được đóng gói và giao trong 24h. Bảo hành 1 đổi 1 trong 30 ngày."
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-300 transition-all shadow-inner resize-none"
                    placeholder="Mô tả các thông tin tổng quan về shop để AI hiểu và trả lời khách hàng..."
                  />
                </div>
              </div>
            </LiquidGlass>

            {/* 2. LINH HỒN (SOUL & TONE) */}
            <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7436f2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-purple-600 shadow-sm backdrop-blur-md">
                    <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Linh hồn & Giọng điệu (Soul)</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                {/* Cách xưng hô */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">Danh xưng (Đại từ)</span>
                  </div>
                  <div className="space-y-3">
                    {['Shop - Khách', 'Mình - Bạn', 'Em - Chị/Anh'].map((item, idx) => (
                      <label key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white/50 cursor-pointer hover:bg-white hover:border-purple-300 transition-colors">
                        <input type="radio" name="pronoun" defaultChecked={idx === 0} className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-500" />
                        <span className="text-sm font-semibold text-slate-800">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Giọng điệu */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">Thái độ & Giọng điệu</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { title: 'Chuyên nghiệp', desc: 'Dạ vâng, thưa khách hàng.' },
                      { title: 'Thân thiện', desc: 'Dạ đúng rồi ạ, dễ thương lắm luôn.' },
                      { title: 'Thúc đẩy Sales', desc: 'Nhanh tay chốt đơn kẻo hết ạ!' },
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white/50 cursor-pointer hover:bg-white hover:border-purple-300 transition-colors">
                        <input type="radio" name="tone" defaultChecked={idx === 1} className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-500" />
                        <div className="flex flex-col">
                           <span className="text-sm font-semibold text-slate-800">{item.title}</span>
                           <span className="text-[11px] text-slate-500">{item.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200 relative z-10">
                <div>
                  <p className="text-slate-900 font-bold text-base">Sử dụng Emoji (Biểu tượng cảm xúc)</p>
                  <p className="text-slate-500 text-xs mt-1 font-medium">Cho phép AI chèn ❤️, ✨, 😊 vào tin nhắn trả lời.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked type="checkbox" className="sr-only peer" />
                  <div className="w-12 h-6 bg-slate-200 border border-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7436f2]/15 peer-checked:border-[#7436f2]/30 shadow-inner peer-checked:after:bg-[#7436f2] peer-checked:after:shadow-[0_0_10px_rgba(116,54,242,0.4)]"></div>
                </label>
              </div>
            </LiquidGlass>

            {/* 3. BỘ MÁY QUY TẮC (RULES ENGINE) */}
            <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-blue-500 shadow-sm backdrop-blur-md">
                    <span className="material-symbols-outlined text-2xl">schema</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Quy tắc Phân luồng (Rules)</h3>
                </div>
                <button className="text-xs bg-white hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm transition-all duration-300 flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[14px]">add</span> Thêm luật
                </button>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="bg-white/80 rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-purple-100 text-purple-600 text-[10px] font-black px-2 py-1 rounded border border-purple-200 tracking-wider">NẾU Khách Hỏi</span>
                    <span className="text-slate-600 text-sm font-medium">Từ khóa chứa <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">"Thời gian giao hàng"</span></span>
                  </div>
                  <div className="flex items-center gap-3 ml-6 relative">
                    <div className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-4 h-[2px] bg-slate-300"></div>
                    <div className="absolute -left-[26px] -top-5 bottom-1/2 w-[2px] bg-slate-300"></div>
                    <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-2 py-1 rounded border border-emerald-200 tracking-wider">THÌ TRẢ LỜI</span>
                    <span className="text-slate-600 text-sm font-medium">Báo <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">"Nội thành 1 ngày, tỉnh 2-3 ngày"</span></span>
                  </div>
                </div>

                <div className="bg-white/80 rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-purple-100 text-purple-600 text-[10px] font-black px-2 py-1 rounded border border-purple-200 tracking-wider">NẾU Cảm Xúc</span>
                    <span className="text-slate-600 text-sm font-medium">Được AI đánh giá là <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">Tiêu cực / Bom hàng</span></span>
                  </div>
                  <div className="flex items-center gap-3 ml-6 relative">
                    <div className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-4 h-[2px] bg-slate-300"></div>
                    <div className="absolute -left-[26px] -top-5 bottom-1/2 w-[2px] bg-slate-300"></div>
                    <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-2 py-1 rounded border border-emerald-200 tracking-wider">THÌ HÀNH ĐỘNG</span>
                    <span className="text-slate-600 text-sm font-medium">Chuyển cho <span className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Nhân viên chốt đơn xử lý</span></span>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </div>

          {/* CỘT PHẢI: Gói cước & Knowledge Base (Right Column Config) */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            
            {/* 4. GÓI CƯỚC & SỬ DỤNG (SUBSCRIPTION MAP) */}
            <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="p-6 relative overflow-hidden">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Gói hiện tại</p>
                   <h3 className="text-2xl font-black text-slate-900 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Gói Starter</h3>
                 </div>
                 <div className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded border border-emerald-200">Active</div>
               </div>

               <div className="mb-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-semibold text-slate-700">Mức sử dụng AI hôm nay</span>
                    <span className="text-xs font-bold text-slate-500"><span className="text-slate-800 text-sm">120</span> / 200 tin</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2.5 bg-slate-100 rounded-full w-full border border-slate-200 overflow-hidden">
                      <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 font-medium">Sẽ reset lại tiến trình vào nửa đêm.</p>
               </div>

               <button 
                  onClick={() => setIsUpgradeModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl font-bold text-sm shadow-[0_4px_15px_rgba(139,92,246,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                >
                 <span className="material-symbols-outlined text-[18px]">upgrade</span>
                 Nâng Cấp Gói
               </button>
            </LiquidGlass>

            {/* 5. NGUỒN TRI THỨC (KNOWLEDGE BASE) */}
            <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="p-6 relative overflow-hidden group flex-1">
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="bg-white border border-slate-200 p-2 rounded-xl text-pink-500 shadow-sm backdrop-blur-md">
                  <span className="material-symbols-outlined text-xl">library_books</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Tài liệu học (Knowledge)</h3>
              </div>

              <p className="text-xs text-slate-500 font-medium mb-4">Tải lên bảng giá, kịch bản chốt sale để AI đọc hiểu.</p>

              <div className="bg-white/40 backdrop-blur-md border-2 border-dashed border-pink-400/30 hover:border-pink-500/50 hover:bg-pink-50 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer mb-6 transition-all duration-300">
                <div className="size-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm text-pink-500">
                  <span className="material-symbols-outlined text-2xl">cloud_upload</span>
                </div>
                <p className="text-slate-800 font-bold text-sm">Chạm hoặc kéo thả file</p>
                <p className="text-slate-400 text-[11px] mt-1 font-medium">PDF, TXT (Tối đa 10MB)</p>
              </div>

              <div className="space-y-3 relative z-10">
                <div className="bg-white/80 backdrop-blur-md border border-black/5 shadow-sm rounded-xl p-3 flex items-center justify-between group/chip">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="bg-red-50 text-red-500 p-2 rounded-lg border border-red-100 flex-shrink-0">
                      <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                    </div>
                    <div className="truncate min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">Quy_Dinh_Doi_Tra_2024.pdf</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-slate-500 font-medium">2.4 MB</span>
                        <span className="size-1 rounded-full bg-slate-300"></span>
                        <span className="text-[11px] text-emerald-500 font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">check_circle</span> Đã xử lý</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors opacity-0 group-hover/chip:opacity-100">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </div>

      {/* MODAL NÂNG CẤP GÓI (UPGRADE PLAN) */}
      {isUpgradeModalOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer" 
             onClick={() => setIsUpgradeModalOpen(false)}
           ></div>
           
           {/* Modal Body */}
           <LiquidGlass cornerRadius={32} blurAmount={0.05} saturation={150} displacementScale={10} aberrationIntensity={1} elasticity={0.3} overLight={true} className="w-full max-w-4xl relative z-10 shadow-2xl p-8 animate-[fadeUp_0.3s_ease]">
              <div className="flex justify-between items-center mb-6">
                 <div>
                    <h2 className="text-3xl font-black text-slate-900 drop-shadow-sm">Nâng cấp Gói Dịch Vụ</h2>
                    <p className="text-slate-500 text-sm font-medium mt-1">Gia tăng sức mạnh AI, loại bỏ giới hạn tin nhắn.</p>
                 </div>
                 <button onClick={() => setIsUpgradeModalOpen(false)} className="size-10 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors border border-slate-200">
                   <span className="material-symbols-outlined">close</span>
                 </button>
              </div>

              {/* 3 Columns Pricing inside Modal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                 {/* PRO */}
                 <div className="bg-white rounded-2xl border-2 border-purple-400/40 p-6 flex flex-col shadow-[0_10px_30px_rgba(139,92,246,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-500 to-purple-600"></div>
                    <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider border border-purple-200">Khuyên dùng</span>
                    
                    <h3 className="text-xl font-black text-slate-900 mb-2 mt-2">Gói Pro</h3>
                    <div className="flex items-end gap-1 mb-4">
                       <span className="text-3xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">499k</span>
                       <span className="text-slate-400 text-sm font-semibold mb-1">/tháng</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1 text-sm text-slate-600 font-medium">
                       <li className="flex gap-2"><span className="material-symbols-outlined text-base text-purple-500">check_circle</span> 2.000 tin nhắn AI / ngày</li>
                       <li className="flex gap-2"><span className="material-symbols-outlined text-base text-purple-500">check_circle</span> Tự động xử lý Inbox</li>
                       <li className="flex gap-2"><span className="material-symbols-outlined text-base text-purple-500">check_circle</span> Huấn luyện AI riêng biệt</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5">Nâng cấp Pro</button>
                 </div>

                 {/* BUSINESS */}
                 <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-black text-slate-900 mb-2 mt-2">Business</h3>
                    <div className="flex items-end gap-1 mb-4">
                       <span className="text-3xl font-black text-slate-700">1.299k</span>
                       <span className="text-slate-400 text-sm font-semibold mb-1">/tháng</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1 text-sm text-slate-600 font-medium">
                       <li className="flex gap-2"><span className="material-symbols-outlined text-base text-slate-400">check_circle</span> Không giới hạn tin AI</li>
                       <li className="flex gap-2"><span className="material-symbols-outlined text-base text-slate-400">check_circle</span> AI Agent độc quyền</li>
                       <li className="flex gap-2"><span className="material-symbols-outlined text-base text-slate-400">check_circle</span> Hỗ trợ Zalo VIP 24/7</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-white text-slate-700 border border-slate-300 font-bold text-sm hover:bg-slate-100 transition-colors">Liên hệ tư vấn</button>
                 </div>

                 {/* PAY AS YOU GO */}
                 <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-black text-slate-900 mb-2 mt-2">Linh hoạt</h3>
                    <div className="flex items-end gap-1 mb-4">
                       <span className="text-2xl font-black text-slate-700">Nạp bao nhiêu xài bấy nhiêu</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1 text-sm text-slate-600 font-medium">
                       <li className="flex gap-2 items-center"><span className="w-16 font-bold text-rose-500">50.000đ</span> → 1.000 tin</li>
                       <li className="flex gap-2 items-center"><span className="w-16 font-bold text-rose-500">200.000đ</span> → 5.000 tin</li>
                       <li className="flex gap-2 items-center"><span className="w-16 font-bold text-rose-500">700.000đ</span> → 20.000 tin</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-slate-800 text-white font-bold text-sm shadow-md hover:bg-slate-900 transition-colors">Nạp Tiền Ngay</button>
                 </div>
              </div>
           </LiquidGlass>
        </div>
      )}
    </div>
  );
};

export default AILogic;
