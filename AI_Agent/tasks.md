# Danh sách Công việc (Tasks)

Dưới đây là các đầu mục công việc, tập trung chủ yếu vào **Phase 1 (MVP)** dựa theo thiết kế và ràng buộc hiện hành.

## 1. Thiết lập Dự án & Cấu hình Khởi tạo
- [x] Khởi tạo dự án Vite (React.js) + Tailwind CSS.
- [x] Thiết lập ESLint & Prettier.
- [ ] Thiết lập cấu trúc thư mục chuẩn (`components`, `pages`, `hooks`, `services`).
- [ ] Khai báo và cấu hình file `.env` cho các biến Eulerstream (API Key, Client ID).

## 2. Phát triển Giao diện UI (Frontend)
- [ ] Cắt HTML/CSS/Tailwind cho trang **Login**.
- [ ] Xây dựng Layout chính: **Header**, **Sidebar** (Nếu có theo Stitch UI), màn hình nội dung chính.
- [ ] Xây dựng trang **Dashboard**:
  - [ ] Khu vực nhập **TikTok ID**.
  - [ ] Khu vực giả lập View Livestream Video (Có thể nhúng iframe hoặc placeholder).
  - [ ] Component **CommentBox**: Khu vực theo dõi bình luận nhảy liên tục.

## 3. Tích hợp Dữ liệu & WebSocket
- [ ] Viết custom hook hoặc service `useEulerStream.js` để chịu trách nhiệm khởi tạo WebSocket:
  - Hàm connect: `wss://ws.eulerstream.com?uniqueId={id}&apiKey={key}`.
  - Hàm onMessage: hứng event comment.
- [ ] Gắn luồng dữ liệu vào **CommentBox** component.
- [ ] Quản lý trạng thái:
  - Validate TikTok ID (Xử lý lỗi nếu không tồn tại hoặc ID sai).
  - Xử lý mảng (array) comments sao cho giới hạn 100-200 commments mới nhất (tránh giật/lag trình duyệt).

## 4. Hoàn thiện & Đánh giá
- [ ] Chỉnh sửa giao diện bám sát bản thiết kế từ **Stitch UI**.
- [ ] Test thử nghiệm luồng OAuth (nếu cần thiết phải đăng nhập để lấy data, cấu hình callback url tại localhost).
- [ ] Rà soát hiệu năng giao diện khi nhận 100 tin nhắn/phút.
