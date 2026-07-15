# Tài liệu Thiết kế: Cấu hình API AI qua Môi trường (.env)

* **Ngày tạo:** 2026-07-15
* **Trạng thái:** Đang chờ phê duyệt

---

## 1. Mục tiêu
Thay thế cấu hình API AI cục bộ mặc định (sử dụng 9Router chạy trên cổng `localhost:20128`) bằng API AI online hoạt động độc lập qua tunnel bảo mật, giúp dự án không cần khởi chạy dịch vụ 9Router local nữa.

---

## 2. Chi tiết Cấu hình Mới
* **API Endpoint (Base URL):** `https://r8aq358.abc-tunnel.us/v1`
* **API Key:** `sk-43e907123f346d3e-xelwyy-59a2f78c`
* **Mô hình chính (Model ID):** `claude-gemini`
* **Mô hình dự phòng (Fallback Model ID):** `claude-gemini`

---

## 3. Các bước triển khai chi tiết

### Bước 1: Tạo/Cập nhật file `.env` tại thư mục gốc
Tạo file `.env` tại đường dẫn gốc của dự án `LiveBridge/.env` với nội dung sau:
```env
VITE_AI_API_URL=https://r8aq358.abc-tunnel.us/v1
VITE_AI_API_KEY=sk-43e907123f346d3e-xelwyy-59a2f78c
VITE_AI_MODEL=claude-gemini
VITE_AI_FALLBACK_MODEL=claude-gemini
```

### Bước 2: Kiểm tra `.gitignore`
Xác minh file `.gitignore` chứa dòng `.env` để bảo mật API key, ngăn việc đẩy file cấu hình lên repository công cộng.

### Bước 3: Xác minh mã nguồn gọi API
Kiểm tra lại [LiveStudioDashboardPage.jsx](file:///D:/Users/huynpde180519/fpt/SUMMER_26/EXE201/Source/LiveBridge/src/pages/LiveStudioDashboardPage.jsx) để đảm bảo các dòng khai báo hằng số đang trỏ đúng về `import.meta.env`:
```javascript
const AI_API_URL = import.meta.env.VITE_AI_API_URL || 'http://localhost:20128/v1';
const AI_MODEL = import.meta.env.VITE_AI_MODEL || 'oc/mimo-v2.5-free';
const AI_FALLBACK_MODEL = import.meta.env.VITE_AI_FALLBACK_MODEL || 'gemini/gemini-3.1-flash-lite-preview';
const AI_API_KEY = import.meta.env.VITE_AI_API_KEY || 'sk-4362950855100528-3pcfmz-cfebc509';
```

### Bước 4: Kiểm thử thực tế
Khởi chạy dev server của dự án, truy cập trang dashboard để xác nhận comment từ live stream kích hoạt API AI và trả về kết quả thành công mà không cần chạy 9Router local.
