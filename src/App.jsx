import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import LiveStudioDashboard from './pages/LiveStudioDashboard';
import MessageInbox from './pages/MessageInbox';
import OrderManagerConsole from './pages/OrderManagerConsole';
import InventoryManager from './pages/InventoryManager';
import Analytics from './pages/Analytics';
import PlatformConnect from './pages/PlatformConnect';
import AILogic from './pages/AILogic';

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
      <Route path="/login" element={<Login />} />
      
      {/* Các trang chính có layout chung (Sidebar + Header) */}
      <Route path="/app" element={<MainLayout />}>
        <Route path="dashboard" element={<LiveStudioDashboard />} />
        <Route path="inbox" element={<MessageInbox />} />
        <Route path="orders" element={<OrderManagerConsole />} />
        <Route path="products" element={<InventoryManager />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="platform-connect" element={<PlatformConnect />} />
        <Route path="ai-settings" element={<AILogic />} />
      </Route>
    </Routes>
  );
}

export default App;
