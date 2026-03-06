# Kịch bản Kiểm thử (Test Cases)

Tài liệu phục vụ việc kiểm thử các tính năng đối với phiên bản Phase 1 MVP của LiveBridge.

| Tên Test Case | Mô tả thử nghiệm | Các bước thực hiện | Kết quả mong đợi |
| --- | --- | --- | --- |
| **TC-001** | Đăng ký & Đăng nhập (Mạng nội bộ) | 1. Mở màn hình Login. <br> 2. Nhập thông tin tài khoản demo. <br> 3. Bấm Submit. | Đăng nhập thành công và chuyển hướng (Redirec) sang Dashboard chính. |
| **TC-002** | Nhập TikTok ID hợp lệ | 1. Trên màn hình Dashboard, tới ô "Nhập ID TikTok". <br> 2. Nhập một TikTok ID đang Livestream thực tế. <br> 3. Nhấn "Kết nối". | Hệ thống thông báo kết nối thành công, có tín hiệu WebSocket mở. |
| **TC-003** | Nhập TikTok ID rỗng hoặc sai | 1. Tới ô "Nhập ID TikTok". <br> 2. Bỏ trống hoặc nhập ID rác không tồn tại. <br> 3. Nhấn "Kết nối". | Màn hình thông báo lỗi: "ID không hợp lệ hoặc không có luồng Live". |
| **TC-004** | Nhận và Render Comments Realtime | 1. Nhập ID TikTok đang Live hợp lệ. <br> 2. Đợi tin nhắn hiển thị đến. <br> 3. So sánh với điện thoại/app TikTok xem tin nhắn có trùng khớp. | Comment hiển thị trên Dashboard giao diện app giống y hệt nội dung đang nhảy trên Tiktok Live App. Vị trí comment mới nằm theo đúng chiều (mới nhất đẩy xuống dưới/lên trên). |
| **TC-005** | Stress Test UI Rendering | 1. Kết nối với 1 Live Stream của các KOL lớn (Hàng chục comments / giây). <br> 2. Giữ màn hình mở trong 5 phút. <br> 3. Giám sát Task Manager / Trải nghiệm scroll. | Giao diện vẫn mượt mà, Scroll mượt không bị tụt FPS, RAM không bị rò rỉ tăng đột biến. Bảng comment được cuộn tối đa đúng số lượng quy định. |
| **TC-006** | Hủy Kết nối (Disconnect) | 1. Đang xem Stream 1. <br> 2. Đổi qua nhập TikTok ID của Stream 2. | Hệ thống hủy WebSocket cũ, thiết lập WebSocket mới. Comment cũ bị xóa và thay bằng tập comment của Stream 2. |
