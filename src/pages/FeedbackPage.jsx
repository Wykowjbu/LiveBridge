import Header from '@components/layout/Header';
import LiquidGlass from '@components/ui/LiquidGlassPanel';

const feedback = [
  ['Shop Thời Trang Mây', 5, 'AI trả lời nhanh, khách hỏi size nào cũng được hỗ trợ rõ ràng.', '5 phút trước'],
  ['Anh Minh Store', 5, 'Lúc đông comment AI vẫn hỗ trợ tốt, đỡ phải trả lời thủ công rất nhiều.', '12 phút trước'],
  ['Linh Cosmetics', 4, 'Livestream ổn định, comment cập nhật nhanh và dễ theo dõi.', '25 phút trước'],
  ['Gia Dụng An Nhiên', 5, 'AI nhận ra sản phẩm ghim nhanh, hỗ trợ chốt đơn tiện hơn nhiều.', '38 phút trước'],
  ['Bé Yêu Shop', 4, 'Giao diện dễ dùng, đội live mới cũng làm quen rất nhanh.', '1 giờ trước'],
  ['Hana Fashion', 5, 'Câu trả lời tự nhiên, khách hàng phản hồi tích cực trong buổi live.', '1 giờ trước'],
  ['Đồ Nhà Bếp 24h', 4, 'Theo dõi comment và đơn hàng trong một màn hình rất tiện.', '2 giờ trước'],
  ['Mộc Store', 5, 'Buổi live hôm nay vận hành mượt, AI hỗ trợ khách hàng đúng lúc.', '3 giờ trước'],
  ['Sài Gòn Sneaker', 4, 'AI giúp phân loại câu hỏi về từng mẫu giày khá chính xác.', 'Hôm qua'],
  ['Tiệm Hoa Nhỏ', 5, 'Phản hồi nhanh và hỗ trợ tốt trong buổi live hôm nay.', 'Hôm qua'],
];

const FeedbackPage = () => (
  <div className="flex h-full w-full flex-col">
    <Header title="Phản hồi" />
    <div className="custom-scrollbar mx-auto w-full max-w-[1440px] flex-1 overflow-y-auto p-6">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">Quản trị hệ thống</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Phản hồi sản phẩm</h1>
        <p className="mt-3 text-lg font-medium text-slate-600">Các phản hồi từ seller về trải nghiệm sử dụng LiveBridge.</p>
      </div>

      <LiquidGlass cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight className="max-w-5xl overflow-hidden">
        <div className="border-b border-white/60 px-7 py-5">
          <h2 className="text-xl font-black text-slate-900">Bình luận gần đây</h2>
        </div>
        <div className="divide-y divide-slate-200/80">
          {feedback.map(([seller, rating, message, time]) => (
            <article key={`${seller}-${time}`} className="flex gap-4 px-7 py-5 transition-colors hover:bg-white/30">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sky-500/10 font-black text-sky-600">
                {seller.slice(0, 1)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-black text-slate-900">{seller}</h3>
                  <div className="flex gap-0.5" aria-label={`${rating} trên 5 sao`}>
                    {[1, 2, 3, 4, 5].map((star) => <span key={star} className={`material-symbols-outlined text-base ${star <= rating ? 'text-amber-400' : 'text-slate-300'}`}>star</span>)}
                  </div>
                  <time className="text-xs font-medium text-slate-400">{time}</time>
                </div>
                <p className="mt-2 leading-relaxed text-slate-600">{message}</p>
              </div>
            </article>
          ))}
        </div>
      </LiquidGlass>
    </div>
  </div>
);

export default FeedbackPage;
