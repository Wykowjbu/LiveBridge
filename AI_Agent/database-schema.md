# Cấu trúc Cơ sở dữ liệu (Database Schema)

*(Lưu ý: Mặc dù Phase 1 hiện tại chưa tích hợp Database vào hệ thống, Schema dưới đây định hướng cho các giai đoạn tiếp theo của dự án).*

## 1. Relational Database (PostgreSQL)
Được sử dụng cho các thực thể mang tính cấu trúc, quan hệ ràng buộc cao: Users, Products, Orders.

### Bảng `Users`
- `id` (UUID, Primary Key)
- `email` (String, Unique)
- `password_hash` (String)
- `role` (Enum: ADMIN, SELLER)
- `tiktok_id` (String - ID liên kết kênh)
- `created_at` (Timestamp)

### Bảng `Products`
- `id` (UUID, Primary Key)
- `seller_id` (UUID, Foreign Key -> Users.id)
- `name` (String)
- `price` (Decimal)
- `sku` (String)
- `stock_quantity` (Int)
- `image_url` (String)
- `is_pinned` (Boolean - trạng thái đang được ghim trong live)
- `created_at` (Timestamp)

### Bảng `Orders`
- `id` (UUID, Primary Key)
- `product_id` (UUID, Foreign Key -> Products.id)
- `buyer_info` (JSONB - Tên, SĐT, Địa chỉ nếu có)
- `status` (Enum: DRAFT, CONFIRMED, CANCELLED)
- `total_price` (Decimal)
- `created_at` (Timestamp)

## 2. NoSQL Database (MongoDB)
Được sử dụng để lưu trữ lượng dữ liệu khổng lồ đến từ bình luận, với tốc độ ghi nhanh.

### Collection `LiveSessions`
- `_id` (ObjectId)
- `platform` (String: "tiktok", "shopee")
- `stream_id` (String)
- `start_time` (Date)
- `end_time` (Date)
- `status` (String: "live", "ended")

### Collection `Comments`
- `_id` (ObjectId)
- `session_id` (ObjectId -> LiveSessions._id)
- `viewer_id` (String)
- `viewer_name` (String)
- `content` (String)
- `timestamp` (Date)
- `ai_intent` (String - NULL nếu chưa được AI classify)
- `ai_action_taken` (String)
