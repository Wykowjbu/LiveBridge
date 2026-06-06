import { Routes, Route } from 'react-router-dom';
import MainLayout from '@components/layout/MainLayout';
import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import LiveStudioDashboardPage from '@pages/LiveStudioDashboardPage';
import MessageInboxPage from '@pages/MessageInboxPage';
import OrderManagerConsolePage from '@pages/OrderManagerConsolePage';
import InventoryManagerPage from '@pages/InventoryManagerPage';
import AnalyticsPage from '@pages/AnalyticsPage';
import PlatformConnectPage from '@pages/PlatformConnectPage';
import AILogicPage from '@pages/AILogicPage';

/* ============================================================
   Cấu hình Routing chính (Main Routing Configuration)
   - /: Landing Page (giới thiệu sản phẩm, video background)
   - /login: Trang đăng nhập (không cần layout)
   - Các trang còn lại nằm trong MainLayout (có Sidebar + Header)
   ============================================================ */
function App() {
  return (
    <Routes>
      {/* Landing Page - Trang giới thiệu sản phẩm */}
      <Route path="/" element={<LandingPage />} />

      {/* Trang Login riêng biệt, không dùng MainLayout */}
      <Route path="/login" element={<LoginPage />} />

      {/* Các trang chính có layout chung (Sidebar + Header) */}
      <Route path="/app" element={<MainLayout />}>
        <Route path="dashboard" element={<LiveStudioDashboardPage />} />
        <Route path="inbox" element={<MessageInboxPage />} />
        <Route path="orders" element={<OrderManagerConsolePage />} />
        <Route path="products" element={<InventoryManagerPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="platform-connect" element={<PlatformConnectPage />} />
        <Route path="ai-settings" element={<AILogicPage />} />
      </Route>
    </Routes>
  );
}

export default App;
