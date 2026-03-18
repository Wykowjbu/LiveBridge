# Thiết kế: Tích hợp chế độ Sáng/Tối (Dark/Light Mode)

## 1. Mục tiêu (Theo yêu cầu)
Thêm khả năng chuyển đổi giao diện Giao diện Sáng (Light) và Giao diện Tối (Dark) trên các trang tĩnh bao gồm **Landing Page** và **Login Page**. Sử dụng phương thức nút bấm cố định góc màn hình (Floating Action Button).

## 2. Cấu trúc Nút hiển thị (Floating Toggle)
- Component tái sử dụng: `src/components/ThemeToggle.jsx`
- Vị trí: Góc dưới cùng bên phải (`bottom-6 right-6`).
- Giao diện: Thiết kế theo style kính (Glassmorphism), hình tròn nhỏ gọn.
- Hiển thị theo trạng thái:
  - Nếu ở Dark Mode 👉 hiện Icon `Mặt trăng` 🌜
  - Nếu ở Light Mode 👉 hiện Icon `Mặt trời` 🌞
- Trạng thái sẽ được lưu vào trình duyệt (`localStorage.getItem('theme')`) để ghi nhớ thao tác khi tải lại trang.

## 3. Thay đổi Kỹ thuật & Giao diện
Vì project đang sử dụng Tailwind CSS:
1. Bổ sung cấu hình `darkMode: 'class'` vào `tailwind.config.js` (hoặc CSS variables nếu dùng Tailwind v4 `index.css`). Component `ThemeToggle` khi nhấn sẽ gắn thêm class `dark` vào thẻ `<html>` gốc.
2. Thêm tiền tố `dark:` vào các thẻ text, khối overlay, để thay đổi thuộc tính tương phản trên:
   - **Lớp bóng nền/overlay video:** 
     - **Light Mode:** `from-white/70 to-slate-200/90` (trong vắt, sáng)
     - **Dark Mode:** `from-black/60 to-black/80` (nhấn mạnh sự riêng tư, mờ đục)
   - **Văn bản (Text):** 
     - Mặc định ở Light Mode: `text-slate-800` hoặc `text-slate-900`.
     - Kích hoạt Dark Mode sẽ tự đổi ngược thành `dark:text-white` hoặc `dark:text-slate-100`.
   - **Khối thuỷ tinh (Card LiquidGlass):** Vì LiquidGlass đã tự điều chỉnh theo độ trong suốt, ta chỉ cần điều tiết độ tương phản của nền dưới hoặc làm tối nhẹ khối CSS.

## 4. Xác nhận / Rủi ro
* Lưu ý: Việc thay đổi màu Light/Dark trên thiết kế Glassmorphism cũ có video đòi hỏi sự hài hoà rất lớn. Bằng cách điều chỉnh Overlay Gradient của Video, hiệu ứng nổi bật sẽ tự điều tiết theo màu sắc.

Bản thiết kế này đáp ứng chuẩn xác "Phương án B" đã chốt ban nãy! Đội ngũ đang xử lý cấu hình Tailwind cho các thành phần UI.
