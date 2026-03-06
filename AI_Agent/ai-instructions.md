# Hướng dẫn dành cho AI Agent (AI Instructions)

> **Xếp Loại:** RẤT QUAN TRỌNG

Tài liệu này đóng vai trò như bản **System Prompt** và **Quy tắc làm việc** (Rules) để hướng dẫn bạn (hoặc AI khác) xuyên suốt quá trình lập trình dự án LiveBridge. Nếu bạn được giao task code mới cho LiveBridge, HÃY ĐỌC VÀ TUÂN THỦ TÀI LIỆU NÀY BẮT BUỘC.

## 1. Rõ ràng về Context Dự Án
- **Bạn đang làm việc cho ứng dụng:** LiveBridge.
- **Nền tảng:** React, Vite, Tailwind CSS (Frontend).
- **Giai đoạn Hiện Tại:** MVP (Phase 1). **GHI NHỚ:** Chúng ta KHÔNG có Backend riêng, KHÔNG có Database, và KHÔNG có AI Engine thực thụ trong giai đoạn này. Mọi nghiệp vụ phải xử lý trên Client-side. Không viết code phụ thuộc vào Back-end / CSDL ở thời điểm hiện tại trừ khi User yêu cầu rõ ràng.

## 2. Các Quy ước Lập trình Quan trọng
- **Framework Ưu tiên:** Khi User yêu cầu component mới, luôn sử dụng React Functional Components với React Hooks (`useState`, `useEffect`).
- **Styling:** Tuyệt đối sử dụng **Tailwind CSS classes** thay vì Vanilla CSS. Tránh viết inline style `style={{...}}` nếu Tailwind có thể giải quyết được.
- **Khai báo Biến:** Luôn nhắc người dùng bổ sung các biến Eulerstream credentials vào `.env` nếu viết chức năng liên quan.

## 3. Cách triển khai WebSocket (BẮT BUỘC SỬ DỤNG MẪU NÀY)
Khi bạn cần viết code lấy comments realtime, BẮT BUỘC phải dùng đoạn code mẫu này làm lõi (tuỳ biến tuỳ theo react hoook):

```javascript
const connectLive = (uniqueId) => {
  const apiKey = import.meta.env.VITE_EULER_API_KEY; // Mấu chốt lấy từ env
  const wsUrl = `wss://ws.eulerstream.com?uniqueId=${uniqueId}&apiKey=${apiKey}`;
  const ws = new WebSocket(wsUrl);

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data && data.messages) {
      // Cốt lõi: Xử lý mảng bình luận
      // Đảm bảo không render làm lag DOM bằng cách .slice
    }
  };
  return ws; // Để ngắt kết nối vào lúc componentWillUnmount / return hook
};
```

## 4. Xử lý Logic & Bối cảnh
1. Giữ code đơn giản nhưng giao diện (UI) phải chất lượng, hiện đại, và sát với thiết kế Figma/Stitch.
2. Với các câu lệnh tạo file, hãy luôn chọn thư mục gốc tương ứng với dự án React tiêu chuẩn Vite. Mặc định mã nguồn đặt ở `src/`.
3. Nếu user đưa yêu cầu mang tính vĩ mô (Tạo tính năng chat với AI), hãy cảnh báo rằng "Theo data.md mục Phase 1, hệ thống hiện chưa tích hợp AI thực, bạn có muốn dùng Mock Server hoặc fake delay để giả lập không?".
4. Sử dụng Tiếng Việt Nam (Vietnamese) trong việc trả lời hoặc đặt label UI (Trừ code chuyên môn đặt tiếng Anh).

### HÃY CỨNG NHẮC VỚI RULES NÀY ĐỂ ĐẢM BẢO DỰ ÁN ĐI ĐÚNG HƯỚNG!
