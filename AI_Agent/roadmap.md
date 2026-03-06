# Lộ trình Phát triển (Roadmap)

Dự án LiveBridge sẽ được phát triển qua các giai đoạn (Phases) nhằm đảm bảo tốc độ đưa MVP (Minimum Viable Product) ra mắt trước, sau đó tích hợp các tính năng nâng cao.

## Phase 1: MVP - Livestream Monitoring (Giai đoạn Hiên Tái)
**Mục tiêu:** Xây dựng khung Frontend cơ bản, chứng minh khả năng lấy và hiển thị luồng dữ liệu bình luận từ nền tảng.
- Xây dựng giao diện trên nền tảng React + Vite + Tailwind CSS.
- Chức năng Đăng nhập.
- Hiển thị khung Livestream (Dựa vào TikTok ID).
- Kết nối tới WebSocket của Eulerstream lấy comment Realtime.
- **Giới hạn:** Hoàn toàn là Frontend, không có Database, không có Backend Server thực thụ, không có AI tự động trả lời.

## Phase 2: Data Persistence & Backend Infrastructure
**Mục tiêu:** Lưu trữ dữ liệu và xây dựng Backend độc lập.
- Triển khai Backend RESTful APIs bằng Node.js & Express.
- Triển khai PostgreSQL để lưu trữ người dùng, thông tin sản phẩm ghim.
- Triển khai MongoDB để lưu toàn bộ log chat/comments từ livestream phục vụ việc training sau này.
- Thêm chức năng CRUD (Create, Read, Update, Delete) cho sản phẩm trên Dashboard.

## Phase 3: AI Integration & Order Assistant
**Mục tiêu:** Tích hợp bộ não Trí tuệ Nhân tạo để phân tích ngữ cảnh.
- Đưa Google AI Platform (NLP Engine) vào xử lý Message Queue.
- Phân tích Intent bình luận theo thời gian thực: Hỏi mua, rác, hỏi thông tin.
- Hệ thống Action Handler: Gợi ý trả lời, tự động đánh dấu đơn nháp trên hệ thống. 
- Xây dựng trang quản lý "Hộp thư hợp nhất" với phần cảnh báo đơn nháp.

## Phase 4: Multi-platform & Scale
**Mục tiêu:** Mở rộng ra các mạng xã hội khác ngoài TikTok.
- Tích hợp thêm Facebook Live API và Shopee Live.
- Cải thiện Dashboard thành trung tâm phân tích kinh doanh đa kênh (Analytics: Lượt xem, tỷ lệ chuyển đổi, top sản phẩm).
- Tối ưu hiệu năng để hỗ trợ các phiên Live có hàng trăm nghìn mắt xem và hàng ngàn bình luận mỗi giây.
