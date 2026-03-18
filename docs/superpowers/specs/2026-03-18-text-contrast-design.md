# Nâng cấp & Khắc phục Độ Tương Phản Chữ (Dark/Light Mode)

## 1. Vấn đề hiện tại
- Trong chế độ Sáng (Light Mode), một số đoạn text (kể cả văn bản chính và văn bản phụ) đang sử dụng dải màu xám (`text-slate-600`, `text-slate-900`, v.v.). Khi kết hợp với các hiệu ứng kính (Glassmorphism) và lớp nền video mờ (sáng), chữ xám bị chìm và rất khó đọc.
- Yêu cầu của user: Đưa toàn bộ chữ về **Đen hoàn toàn** (nền sáng) và **Trắng hoàn toàn** (nền tối).

## 2. Phương án đề xuất (Brainstorming)

### Phương án A: Tương phản tuyệt đối (Toàn bộ là Đen/Trắng)
- Thay thế toàn bộ các class điều khiển màu chữ trên Landing Page và Login Page (không kể tiêu đề hay đoạn văn phụ) thành duy nhất một trạng thái: `text-black dark:text-white`.
- **Ưu điểm:** Độ đọc (readability) đạt mức tối đa (100%), không có bất kỳ dòng chữ nào bị chìm.
- **Nhược điểm:** Giao diện bị chói mắt và mất đi tính "phân cấp thông tin" (Hierarchy). Tiêu đề và nội dung phụ đều có màu đen sẫm y hệt nhau, làm giảm đi vẻ đẹp tinh tế của thiết kế Glassmorphism gốc.

### Phương án B: Tương phản chọn lọc (Khuyên dùng)
- **Tiêu đề chính & Văn bản quan trọng:** Dùng `text-black dark:text-white` (đen/trắng hoàn toàn 100%) để đảm bảo sự rõ ràng sắc nét khi quét mắt.
- **Văn bản phụ (Subtitle, Description, Ghi chú):** Thay vì xám nhạt, đổi sang xám cực đậm `text-gray-800 dark:text-gray-100` (ở light mode, màu này gần như là đen nhưng vẫn giữ độ mượt mà khác biệt với tiêu đề chính).
- Đồng thời **tinh chỉnh lại lớp nền (overlay)** mờ thêm 10% để phần kính nổi rõ hơn chữ đen.

## 3. Quy mô áp dụng
- Cả `LandingPage.jsx` và `Login.jsx`.
- Đổi đồng bộ các cấu hình thuộc tính chữ trên tất cả các Card, Header, Navbar.
