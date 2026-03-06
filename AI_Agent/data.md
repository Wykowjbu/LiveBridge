# Tài liệu Đặc tả Hệ thống: LiveBridge

**LiveBridge** là nền tảng Trợ lý AI Hỗ trợ Bán hàng qua Livestream (AI Livestream Sales Assistant Platform).

---

## 1. Giai đoạn Hiện tại (MVP / Phase 1)
> **Mục tiêu:** Tập trung vào luồng cơ bản nhất, hiển thị dữ liệu realtime từ TikTok.

- **Chức năng bắt buộc:**
  - Đăng nhập (Login).
  - Hiển thị phiên Live từ ID TikTok (Cho phép nhập và đổi ID TikTok thủ công).
  - Hiển thị bình luận (Comments) Realtime từ luồng Live.
- **Giới hạn phạm vi hiện tại:**
  - *Chỉ thiết kế và xây dựng Giao diện (Frontend).*
  - *KHÔNG cần lưu trữ dữ liệu vào Database.*
  - *KHÔNG tích hợp phân tích AI ở giai đoạn này.*

---

## 2. Technology Stack (Công nghệ Phát triển)
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express, WebSocket
- **Database:** RDBMS (PostgreSQL) cho Products/Orders & NoSQL (MongoDB) cho Lịch sử chat/Comment
- **AI Engine:** Google AI Platform

*(Lưu ý: Database và AI Engine sẽ được tích hợp ở các giai đoạn sau).*

---

## 3. Mục tiêu Nền tảng (Tương lai Dài hạn)
Xây dựng nền tảng giúp người bán hàng (seller) tối ưu hóa quá trình livestream bán hàng với các mục tiêu chính:
- **Tự động hóa:** AI tự động phân tích và trả lời bình luận của khách hàng theo thời gian thực.
- **Quản lý tập trung:** Quản lý đồng bộ tin nhắn/bình luận đa nền tảng (Shopee Live, TikTok Shop, Facebook, v.v.).
- **Hỗ trợ chốt đơn:** Nhận diện sản phẩm đang được ghim (pin) trên live để tư vấn chính xác, tự động tạo đơn nháp.
- **Tối ưu chi phí:** Giảm thiểu nhân lực trực stream, chống sót đơn, giảm tỷ lệ rớt khách.

---

## 4. Tài liệu Tham khảo & API Integration

### 4.1. Link Tài liệu Đặc tả & Design
- **SRS (Đặc tả yêu cầu):** [Link Google Docs](https://docs.google.com/document/d/1dyFibrEjPnGoWpceHQ43OpmCt3ABGZTc9FXoCd6QoeI/edit?usp=sharing)
- **Stitch UI (Thiết kế Giao diện):** [Link Stitch UI](https://stitch.withgoogle.com/projects/17553686188278834610)
- **Tài liệu API (Eulerstream):** [Eulerstream WebSockets Docs](https://www.eulerstream.com/docs)

### 4.2. Khóa tích hợp (API Keys - Phục vụ Eulerstream)
```env
CLIENT_ID=06f1c81648d81df8b0c455a5edbb87dee1151b6d2bd73fae36a8601a4ec7f6e6
CLIENT_SECRET=DbwLzJghZf4inLf7UoIBpH7fhF17wAc62iIuGtk7O6RPoB_zyfynASll5nAGljbL
MY_API_KEY=euler_YjdkM2FlMDQxZTk1NWU1OWM2MzM2MjRkNTgwYjI0Yjk0YWNhNTRjNzMzMTUyYzYyYzE3YzFi
```

### 4.3. Các URL Tích hợp TikTok (Eulerstream OAuth)
- **Authorization URL:** `https://www.eulerstream.com/tiktok/oauth/authorize`
- **Token URL:** `https://tiktok.eulerstream.com/tiktok/oauth/token`
- **Revoke URL:** `https://tiktok.eulerstream.com/tiktok/oauth/revoke`
- **URL Builder (Auth):** [Bấm để xem Demo Flow](https://www.eulerstream.com/tiktok/oauth/authorize?client_id=06f1c81648d81df8b0c455a5edbb87dee1151b6d2bd73fae36a8601a4ec7f6e6&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&response_type=code&scope=webcast%3Afetch+webcast%3Abulk_live_check+webcast%3Auser_earnings+webcast%3Asign_url+webcast%3Achat+webcast%3Acomments+webcast%3Amute)

### 4.4. Code mẫu kết nối WebSocket lấy Comments
```javascript
const apiKey = "MY_API_KEY"; // Dùng key euler_... ở trên
const wsUrl = `wss://ws.eulerstream.com?uniqueId=lilemmyyy&apiKey=${apiKey}`;
const ws = new WebSocket(wsUrl);

// Log event messages
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data && data.messages) {
    data.messages.forEach((msg) => {
      console.log(msg); // Hiển thị Realtime Comments ra Console
    });
  }
}
```

---

## 5. Tổng hợp Yêu cầu Chức năng (Định hướng xây dựng Full App)

<details>
<summary><b>Nhấn để xem chi tiết các phân hệ của bản đầy đủ</b></summary>

### 5.1. Phân hệ Livestream & Authentication
- Đăng nhập (Web/Social OAuth).
- Khởi tạo phiên livestream mới, kết nối các platform qua API.
- Thu thập bình luận theo thời gian thực (Realtime).

### 5.2. Quản lý Sản phẩm & Trợ lý Chốt đơn
- CRUD thông tin sản phẩm (Hình ảnh, Giá, SKU, Tồn kho).
- Nhận diện Sản phẩm đang ghim trên Live để tư vấn ưu tiên.
- Phân tích từ khóa chốt đơn -> Tự động khởi tạo Order Draft (Đơn hàng nháp).

### 5.3. AI Auto Reply (Động cơ Xử lý Bình luận)
- **Luồng xử lý:** `Comment -> Queue -> NLP Engine -> Intent Definition -> Action -> Response`
- Phân loại ý định người dùng (Hỏi giá, size, màu, mua hàng, spam,...).
- Sinh câu trả lời dựa vào ngữ cảnh: sản phẩm đang ghim, DB, FAQ, quy tắc do seller đặt ra.

### 5.4. Unified Inbox & Dashboard
- Hộp thư hợp nhất từ (Live Comments, Messenger, Instagram, TikTok Messages).
- Báo cáo thống kê: Tổng bình luận, Tỷ lệ chuyển đổi, Doanh thu, Sản phẩm bán chạy.
- Trang Quản trị Hệ thống để quản lý User, API Keys và Dataset huấn luyện AI.

**Các bên liên quan (Stakeholders):** Seller (Người dùng App), Viewer (Người mua hàng trên Live), Admin (Quản trị viên Node), AI Engine, Platform APIs (TikTok/Facebook).

</details>