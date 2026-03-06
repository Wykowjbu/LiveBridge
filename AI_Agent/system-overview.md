# Tổng quan Hệ thống (System Overview)

**Tên dự án:** LiveBridge
**Mô tả:** Nền tảng Trợ lý AI Hỗ trợ Bán hàng qua Livestream (AI Livestream Sales Assistant Platform).

## 1. Mục tiêu và Sứ mệnh
LiveBridge được xây dựng nhằm giúp người bán hàng (seller) tối ưu hóa quá trình livestream bán hàng, tăng tỷ lệ chốt đơn và giảm thiểu nhân sự trực live. 

Các mục tiêu cốt lõi:
- **Tự động hóa:** Tích hợp AI để tự động phân tích độ ưu tiên, phân loại và trả lời bình luận theo thời gian thực.
- **Quản lý tập trung:** Đồng bộ tin nhắn và bình luận đa nền tảng (TikTok, Shopee, Facebook).
- **Hỗ trợ chốt đơn:** Tự động nhận diện sản phẩm ghim trên live, tư vấn theo ngữ cảnh và tạo đơn hàng nháp.
- **Tối ưu chi phí:** Giảm chi phí nhân sự, hạn chế bỏ sót đơn hàng và theo kịp tốc độ của livestream lớn.

## 2. Các bên liên quan (Stakeholders)
- **Seller (Người dùng App):** Sử dụng hệ thống để theo dõi livestream, xem phân tích và quản lý đơn hàng.
- **Viewer (Người xem Live):** Tương tác với hệ thống gián tiếp thông qua bình luận và nhận phản hồi từ AI.
- **Admin (Quản trị viên):** Quản lý người dùng trong hệ thống, cấu hình API Key và tối ưu các mô hình ngôn ngữ AI.
- **AI Engine:** Hệ thống Google AI xử lý ngôn ngữ tự nhiên (NLP) phân tích intent mua hàng.
- **Platform APIs:** Các nền tảng bên thứ ba (đặc biệt là TikTok ở giai đoạn đầu).

## 3. Các phân hệ chính (Core Modules)
1. **Phân hệ Livestream & Authentication:** Kết nối với các nền tảng thông qua API/WebSocket, lấy dữ liệu thời gian thực.
2. **Quản lý Sản phẩm & Trợ lý Chốt đơn:** Quản trị thông tin sản phẩm và tự động lên đơn.
3. **AI Auto Reply:** Động cơ phân tích ngôn ngữ tự nhiên và tự động trả lời.
4. **Unified Inbox & Dashboard:** Giao diện tập trung toàn bộ tin nhắn, bình luận và hiển thị các báo cáo, thông kê doanh thu.
