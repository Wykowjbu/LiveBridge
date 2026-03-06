# Kiến trúc Giao tiếp API (API Specification)

Dự án sử dụng dịch vụ của Eulerstream tích hợp để nhận diện và lấy thông tin phiên. 

## 1. OAuth Authorize Data (Eulerstream Flow)

Eulerstream cung cấp API hỗ trợ xác thực kết nối TikTok để ứng dụng thuỷ lấy quyền hạn.

### GET /tiktok/oauth/authorize
- **Endpoint:** `https://www.eulerstream.com/tiktok/oauth/authorize`
- **Params:**
  - `client_id` (String): Cung cấp trong `.env`
  - `redirect_uri` (String): URL mà TikTok sẽ redirect về sau khi ấn xác nhận (VD: `http://localhost:5173/`)
  - `response_type` (String): `"code"`
  - `scope` (String): Quyền truy cập (`webcast:fetch webcast:comments ...`)

### POST /tiktok/oauth/token
- **Endpoint:** `https://tiktok.eulerstream.com/tiktok/oauth/token`
- **Chức năng:** Sử dụng `code` ở bước trước để đổi lấy `access_token`.

---

## 2. WebSocket Realtime Data (Eulerstream Streaming)

Đây là chức năng quan trọng nhất trong Phase 1. Thông qua WebSocket API, luồng bình luận từ phiên Live TikTok sẽ được stream vào React (Client).

### Khởi tạo kết nối WebSocket
- **URL Host:** `wss://ws.eulerstream.com`
- **Query Params:**
  - `uniqueId` (String - Bắt buộc): Là TikTok ID của user đang stream (Ví dụ: `hoaa.hanassii`)
  - `apiKey` (String - Bắt buộc): Được cấp lấy từ `.env` (Bắt đầu bằng `euler_...`)

**Ví dụ URL:**
`wss://ws.eulerstream.com?uniqueId=lilemmyyy&apiKey=euler_YjdkM2...`

### Sự kiện dữ liệu nhận được (Event: `onmessage`)
Khi có message gửi từ server về, payload là một String cần được parse qua JSON. Dưới đây là định dạng ví dụ:

```json
{
  "messages": [
    {
      "comment": "Giá bao nhiêu thế shop ơi?",
      "userId": "1234567890",
      "nickname": "Khach_hang_A",
      "createTime": 1699999201000,
      "msgId": "9876543210123"
    }
  ]
}
```

**Cách Xử lý bên Client:**
1. Hứng sự kiện `ws.onmessage`.
2. Kiểm tra `if (data.messages && data.messages.length > 0)`.
3. Lưu dữ liệu này vào bộ nhớ mảng để render lên UI thành khung chát.
