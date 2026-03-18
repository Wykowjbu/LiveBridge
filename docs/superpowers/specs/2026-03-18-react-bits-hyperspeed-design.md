# Tích hợp HyperSpeed Background từ React Bits

## 1. Mục tiêu (Goal)
Thay thế background tĩnh/video hiện tại của trang **Landing Page** và trang **Login** bằng component **HyperSpeed** (một hiệu ứng 3D không gian sinh động chạy qua các vệt sáng) trích xuất từ thư viện [React Bits (DavidHDev)](https://github.com/DavidHDev/react-bits).

## 2. Dependencies cần bổ sung
Hiệu ứng HyperSpeed được viết bằng WebGL dựa trên thư viện Three.js, do đó dự án cần cài đặt thêm:
- `three` (v0.167.1 hoặc tương đương)
- `postprocessing` (để xử lý hiệu ứng Bloom và Anti-aliasing sáng bóng)

## 3. Cấu trúc Component
- Tạo thư mục `src/components/Hyperspeed/`
- Copy 2 file nguồn gốc từ React Bits vào dự án:
  - `Hyperspeed.jsx` (Core component xử lý Three.js Canvas)
  - `HyperSpeedPresets.js` (Các cấu hình/preset màu sắc, tốc độ cho hiệu ứng)
  
## 4. Phương án Tích hợp (Integration)
### 4.1. Trang LandingPage (`LandingPage.jsx`)
- Loại bỏ `<video>` background hiện có.
- Chèn `<Hyperspeed effectOptions={hyperspeedPresets.four} />` (hoặc tuỳ chọn preset 1/2/3/4/5 tuỳ theo bảng màu phù hợp nhất, gợi ý dùng preset `four` với màu xanh/đỏ hoặc setup custom màu hợp với LiveBridge) vào wrapper ngoài cùng.
- Điều chỉnh `z-index` để đảm bảo hệ thống Glassmorphism UI (LiquidGlass) vẫn nổi bật trên nền 3D.

### 4.2. Trang Đăng nhập (`Login.jsx`)
- Tương tự, loại bỏ background gradient mặc định.
- Chèn component `<Hyperspeed>` làm lớp nền dưới cùng (z-index thấp nhất).
- Đảm bảo form Login có nền kính (backdrop-blur) đủ mờ để có thể nhìn xuyên thấu các luồng sáng chạy phía sau.

## 5. Rủi ro & Lưu ý (Trade-offs)
- **Hiệu năng (Performance):** WebGL (Three.js + Postprocessing) chạy trên trang tĩnh (Landing) có một chút rủi ro hao tốn tài nguyên đối với máy cấu hình thấp. Component tự động resize dựa trên hook, ta sẽ thêm logic xử lý fallback cơ bản nếu WebGL không khởi tạo được.
- Cần dọn dẹp (dispose) scene cẩn thận khi chuyển trang (unmount) để tránh memory leak rác WebGL. Component gốc của React Bits đã có function `dispose()`, sẽ kiểm tra lại để chắc chắn tương thích với React Router v7.
