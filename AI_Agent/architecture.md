# Kiến trúc Hệ thống (Architecture)

## 1. Mô hình Tổng thể (High-level Architecture)
LiveBridge sử dụng mô hình **Client-Server** kết hợp với **WebSocket** để đảm bảo quá trình truyền và nhận dữ liệu bình luận (comments) diễn ra theo thời gian thực (Real-time).

## 2. Technology Stack
- **Frontend:**
  - **Framework:** React
  - **Build Tool:** Vite
  - **Styling:** Tailwind CSS v4
  - Vị trí hiện tại (Phase 1 MVP) hệ thống sẽ hoàn toàn hoạt động ở Frontend, trực tiếp gọi API và WebSocket.
- **Backend (Tương lai):**
  - Node.js & Express để xử lý API gateway.
  - WebSocket Server để phân phối lại luồng dữ liệu nếu cần.
- **Database (Tương lai):**
  - **PostgreSQL:** Lưu trữ dữ liệu có cấu trúc (Cửa hàng, Người dùng, Sản phẩm, Đơn hàng).
  - **MongoDB:** Lưu trữ dữ liệu phi cấu trúc, lịch sử chat, luồng comments khổng lồ từ Livestream.
- **AI Engine (Tương lai):**
  - **Google AI Platform** đóng vai trò là động cơ NLP.

## 3. Luồng xử lý AI Auto Reply (AI NLP Engine Flow)
Hệ thống xử lý bình luận của khách hàng thông qua 파i Engine với luồng sau:
1. **Comment:** Tiếp nhận bình luận qua luồng WebSocket của Eulerstream/TikTok.
2. **Queue:** Đưa bình luận vào Message Queue để xử lý tuần tự/song song, tránh quá tải.
3. **NLP Engine:** Chuyển qua Google AI Platform để phân tích ngôn ngữ tự nhiên.
4. **Intent Definition:** Trích xuất ý định người dùng (Ví dụ: Hỏi giá, hỏi size, spam...).
5. **Action:** Quyết định hành động (Phản hồi tự động, tạo đơn nháp, bỏ qua).
6. **Response:** Đẩy phản hồi trở lại nền tảng livestream hoặc báo cáo hiển thị trên Dashboard.

## 4. Tích hợp Bên thứ ba (3rd-Party Integrations)
- **Eulerstream:** Dịch vụ trung gian sử dụng WebSocket để lấy bình luận livestream TikTok realtime. Hỗ trợ cơ chế OAuth để xác thực.
- **TikTok API:** Lấy thông tin phiên livestream, số lượng người xem.
