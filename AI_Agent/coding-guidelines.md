# Hướng dẫn Code (Coding Guidelines)

Tài liệu này định nghĩa các nguyên tắc phát triển code cho LiveBridge, áp dụng đặc biệt cho Frontend (React, Vite, Tailwind) trong Phase 1.

## 1. Tổ chức Thư mục (Directory Structure)
```text
src/
 ├── assets/        # Hình ảnh, icon tĩnh
 ├── components/    # Components chia sẻ (Button, Input, Header)
 │   ├── layout/    # Components bố cục trang
 │   └── ui/        # Components UI nhỏ tái sử dụng
 ├── hooks/         # Custom React hooks (Ví dụ: useEulerStream.js)
 ├── pages/         # Các trang chính (Dashboard, Login)
 ├── services/      # Các hàm gọi API, cấu hình WebSocket
 ├── utils/         # Helper functions
 ├── App.jsx
 └── main.jsx
```

## 2. Nguyên tắc Naming (Quy tắc Đặt tên)
- **Component & Trang (Pages):** Sử dụng `PascalCase`. Ví dụ: `Dashboard.jsx`, `CommentList.jsx`.
- **Hàm & Biến (Functions & Variables):** Sử dụng `camelCase`. Ví dụ: `handleLogin`, `wsUrl`, `isLive`.
- **Hằng số (Constants):** Sử dụng `UPPER_SNAKE_CASE` đối với các giá trị không đổi cố định trong hệ thống. Ví dụ: `MAX_COMMENTS_LIMIT`.
- **Custom Hooks:** Phải bắt đầu bằng chữ `use`. Ví dụ: `useEulerStream.js`.

## 3. Styling bằng Tailwind CSS
- Ưu tiên sử dụng utility classes của Tailwind trực tiếp trong thuộc tính `className`.
- Tránh viết Custom CSS. Nếu bắt buộc, sử dụng file index.css hoặc module css và hạn chế đến mức tối thiểu.
- Chia nhỏ các class dài bằng cách tách component (Component-driven design) thay vì để một thẻ chứa hàng chục thẻ class rối rắm.

## 4. Quản lý State & Hiệu năng
- Với lượng comment đổ về realtime lớn, cần cực kỳ cẩn thận với việc cập nhật state trên React.
- Sử dụng cách nối chuỗi state giới hạn số phần tử (ví dụ chỉ giữ 100 comment mới nhất) để tránh hiện tượng rò rỉ bộ nhớ (memory leak) trên trình duyệt. Thao tác giới hạn trong setState:
  ```javascript
  setComments(prev => [newComment, ...prev].slice(0, 100));
  ```

## 5. Bảo mật & Biến Môi trường (Environment Variables)
- Tuyệt đối không hard-code các khóa API, Client Secrets trong mã nguồn.
- Sử dụng file `.env` theo chuẩn Vite (các biến bắt đầu bằng `VITE_` nếu cần truy cập trên client).
- Các API Keys nội bộ (VD của Eulerstream) cần thiết lập kỹ trong file `.env` riêng biệt, hoặc proxy nếu cần thiết bảo mật.
