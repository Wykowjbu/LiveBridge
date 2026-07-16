import Header from '@components/layout/Header';
import LiquidGlass from '@components/ui/LiquidGlassPanel';

const metrics = [
  ['Tổng người dùng', 'group', '23'],
  ['Seller đang hoạt động', 'storefront', '2'],
  ['Phiên live hôm nay', 'live_tv', '3'],
  ['Tổng phiên live', 'podcasts', '19'],
  ['Tổng doanh thu', 'payments', '198.000₫'],
];

const recentUsers = [
  ['Nguyễn Minh Anh', '@minhanh.live'], ['Trần Gia Hân', '@giahanshop'], ['Lê Hoàng Nam', '@hoangnamstore'],
  ['Phạm Thuỳ Linh', '@linhcosmetics'], ['Vũ Đức Anh', '@ducanh_88'], ['Đỗ Khánh Vy', '@khanhvy.fashion'],
  ['Bùi Quang Huy', '@quanghuyseller'], ['Hoàng Ngọc Mai', '@ngocmai.home'], ['Nguyễn Nhật Minh', '@nhatminh.online'],
  ['Trương Bảo Ngọc', '@baongoc.style'], ['Lý Thanh Tùng', '@thanhtung.live'], ['Đặng Yến Nhi', '@yennhi.beauty'],
  ['Phan Quốc Bảo', '@quocbao.store'],
];

const AnalyticsPage = () => (
  <div className="flex h-full w-full flex-col">
    <Header title="Tổng quan quản trị" />

    <div className="custom-scrollbar mx-auto w-full max-w-[1440px] flex-1 overflow-y-auto p-6">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">Quản trị hệ thống</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Thống kê nền tảng</h1>
        <p className="mt-3 text-lg font-medium text-slate-600">Dữ liệu tổng quan của LiveBridge.</p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map(([label, icon, value]) => (
          <LiquidGlass key={label} cornerRadius={20} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">{label}</p>
              <span className="material-symbols-outlined rounded-lg border border-sky-500/20 bg-sky-500/10 p-2 text-sky-500">{icon}</span>
            </div>
            <p className="mt-6 text-4xl font-black tracking-tighter text-slate-900">{value}</p>
          </LiquidGlass>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <LiquidGlass cornerRadius={20} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight className="p-8 lg:col-span-2">
          <h2 className="text-xl font-black text-slate-900">Tăng trưởng người dùng</h2>
          <p className="mt-1 text-sm font-medium text-slate-500">Theo dõi số người dùng đăng ký theo thời gian.</p>
          <div className="mt-8 flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/30 text-center">
            <div>
              <span className="material-symbols-outlined text-4xl text-slate-400">show_chart</span>
              <p className="mt-3 font-bold text-slate-600">Chưa có dữ liệu tăng trưởng</p>
            </div>
          </div>
        </LiquidGlass>

        <LiquidGlass cornerRadius={20} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight className="p-8">
          <h2 className="text-xl font-black text-slate-900">Tình trạng hệ thống</h2>
          <div className="mt-8 space-y-5">
            <div className="flex items-center justify-between"><span className="font-medium text-slate-600">Người dùng mới</span><span className="font-black text-slate-900">0</span></div>
            <div className="flex items-center justify-between"><span className="font-medium text-slate-600">Đơn hàng</span><span className="font-black text-slate-900">0</span></div>
            <div className="flex items-center justify-between"><span className="font-medium text-slate-600">Kết nối nền tảng</span><span className="font-black text-slate-900">0</span></div>
          </div>
        </LiquidGlass>
      </div>

      <LiquidGlass cornerRadius={20} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight className="mt-8 p-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-black text-slate-900">Người dùng gần đây</h2>
          <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm font-bold text-sky-600">26 người dùng</span>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {recentUsers.map(([name, tiktokId]) => (
            <div key={tiktokId} className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/40 p-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-sky-500/10 font-black text-sky-600">{name.slice(0, 1)}</div>
              <div className="min-w-0">
                <p className="truncate font-bold text-slate-800">{name}</p>
                <p className="mt-0.5 truncate text-sm font-medium text-slate-500">TikTok: {tiktokId}</p>
              </div>
            </div>
          ))}
        </div>
      </LiquidGlass>
    </div>
  </div>
);

export default AnalyticsPage;
