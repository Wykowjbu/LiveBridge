# Thiết kế hệ thống Đa nền (Dynamic Background)

## 1. Yêu cầu & Mục tiêu
- **Phân tách theo Theme:** Sử dụng `LineWaves` (ReactBits) khi ở Dark Mode và `ColorBends` khi ở Light Mode (trên Landing Page và Login Page).
- **Tối ưu hiệu năng:** Xóa bỏ hoàn toàn các Background cũ không dùng như HyperSpeed Component và video `.mp4` để làm nhẹ source code và bộ cài.
- **Vấn đề kỹ thuật (Khó khăn):** `LineWaves` và `ColorBends` đều là Canvas WebGL/Three.js rendering liên tục. Nếu dùng CSS class (`hidden`, `dark:block`) để ẩn thì GPU vẫn sẽ phải gánh cùng lúc 2 vòng lặp đồ hoạ 👉 Ngốn RAM và tụt FPS.
- **Giải pháp xử lý:** Render trực tiếp bằng State của Component.

## 2. Kế hoạch triển khai kỹ thuật

### 2.1 Tạo Custom Hook `useTheme`
Để `LandingPage` giao tiếp được với việc chuyển lật màu ở `ThemeToggle` (ốn định State trên React thay vì chỉ check CSS), mình sẽ tạo `src/hooks/useTheme.js` sử dụng `MutationObserver`. Hook này lắng nghe xem thẻ `<html>` gốc có gắn thẻ `dark` không, rồi cập nhật State. 

### 2.2 Xây dựng `<DynamicBackground />`
Tạo một Component quản lý vòng đời nền nằm gọn gàng:
```jsx
const isDark = useTheme();
return (
  <div className="fixed inset-0 z-0">
    {isDark ? <LineWaves /> : <ColorBends />}
  </div>
);
```
Bằng cách dùng Condition Render (`isDark ? ... : ...`), khi ở nền sáng thì React sẽ *Huỷ bỏ hoàn toàn* Canvas nền tối và ngược lại 👉 Hiệu suất không bị suy giảm.

### 2.3 Xoá tệp thừa & Áp dụng
1. Giải nén/Copy `LineWaves` và `ColorBends` từ kho archive React Bits vào `src/components/`.
2. Xóa đi toàn bộ thư mục `Hyperspeed` và `Image/video_background.mp4`.
3. Gỡ các overlay chói từ task trước (vì ColorBends và LineWaves đã cực kỳ êm ái, chỉ cần làm overlay mờ nhẹ là Glassmorphism tự nổi lên).
4. Đồng bộ logic cho 2 trang `LandingPage.jsx` và `Login.jsx`.
