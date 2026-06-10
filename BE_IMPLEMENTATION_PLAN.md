# LiveBridge — BE Implementation Plan

## 1. Chức năng đang mock ở FE → cần BE

### 1.1 Auth
| Mock | BE cần làm |
|------|-----------|
| Login form hardcode `admin@livebridge.vn / password123`, navigate thẳng `/app/dashboard` | `POST /auth/register`, `POST /auth/login` → JWT |
| Social login buttons không có logic | OAuth callback: TikTok, Facebook, Google |

---

### 1.2 User / Shop
| Mock | BE cần làm |
|------|-----------|
| Shop name "LiveBridge Official Store" hardcode trong AILogic.jsx | `GET/PUT /shop/profile` |
| Subscription "Gói Starter, 60/100 messages" hardcode | `GET /shop/subscription`, usage tracking |

---

### 1.3 Platform Connections
| Mock | BE cần làm |
|------|-----------|
| 3 card TikTok/Facebook/Shopee với API key mask hardcode | `GET /platforms` — list connected platforms |
| Toggle "Sync Inventory / Sync Comments" không lưu | `POST /platforms/connect`, `DELETE /platforms/:id`, `PUT /platforms/:id/settings` |
| TikTok OAuth (Eulerstream) đang gọi trực tiếp từ FE | BE làm proxy OAuth: `GET /tiktok/oauth/authorize`, `POST /tiktok/oauth/token` — ẩn `client_secret` |

---

### 1.4 Products / Inventory
| Mock | BE cần làm |
|------|-----------|
| 2 sản phẩm hardcode (Giày Neon X1, Đồng hồ Series 5) | `GET /products` (pagination, search, filter) |
| Edit stock drawer không save | `POST /products`, `PUT /products/:id`, `DELETE /products/:id` |
| "Còn 8", low stock indicator | Stock level logic + low-stock threshold |
| "45 products" hardcode trong pagination | Trả về total count trong response |

---

### 1.5 Orders
| Mock | BE cần làm |
|------|-----------|
| 3 order hardcode (#3024, #3018, #3021) với status cố định | `GET /orders` (filter by status, platform) |
| Kanban columns "Chờ thanh toán / Đang xử lý" | `PUT /orders/:id/status` |
| "Send invoice to platform" button | `POST /orders/:id/invoice` (integrate platform API) |

---

### 1.6 Messages / Inbox
| Mock | BE cần làm |
|------|-----------|
| 3 message hardcode (Facebook, Shopee, TikTok) | `GET /messages` (list, filter by platform) |
| Intent label "Hỏi Mua, Trạng thái đơn" hardcode | AI classification → lưu vào DB |
| "Value 11.5M đ, VIP tier" hardcode | Tính từ order history của buyer |
| Reply input không gửi | `POST /messages/:id/reply` → gọi platform API |

---

### 1.7 AI Logic
| Mock | BE cần làm |
|------|-----------|
| AI suggestions hardcode trong LiveStudioDashboard.jsx | `GET /ai/suggestions?sessionId=...` |
| `autoReply()` trong live.js chỉ check keyword "giá", "ship" | BE gọi Google AI (Gemini) → trả về intent + reply |
| `// TODO: call API gửi reply` (live.js:64) | `POST /ai/reply` — gửi reply lên TikTok Live |
| IF-THEN rules display hardcode | `GET/POST/DELETE /ai/rules` |
| Knowledge base file upload mock | `POST /ai/knowledge` (upload PDF/TXT, parse, embed) |

---

### 1.8 Analytics
| Mock | BE cần làm |
|------|-----------|
| Revenue 315M, conversion 4.2%, viewers 2,845 hardcode | `GET /analytics/summary?sessionId=...` |
| Revenue chart, interaction chart hardcode | `GET /analytics/timeseries`, `GET /analytics/interactions` |
| Live timer "00:42:15" tính ở FE | `GET /sessions/:id` trả về `startTime` |

---

### 1.9 Live Session
| Mock | BE cần làm |
|------|-----------|
| Eulerstream API key nhúng thẳng trong `useEulerStream.js` | BE làm proxy WebSocket — FE connect BE, BE relay Eulerstream. Ẩn API key |
| Messages chỉ lưu in-memory (state React) | Persist comments vào MongoDB |
| Pinned product hardcode | `PUT /sessions/:id/pin-product` |

---

## 2. Database Design

### PostgreSQL (structured data)

```sql
-- Users & Auth
users (id uuid PK, email, password_hash, role enum[admin,seller], created_at)
oauth_tokens (id, user_id FK, platform enum[tiktok,facebook,shopee], access_token, refresh_token, expires_at)

-- Shop
shops (id uuid PK, user_id FK, name, greeting, tone, pronouns, emoji_enabled, plan enum[starter,pro,business,flexible], daily_msg_limit, created_at)
shop_platforms (id, shop_id FK, platform, is_connected, sync_inventory bool, sync_comments bool, masked_api_key, connected_at)

-- AI
ai_rules (id, shop_id FK, trigger_type enum[keyword,emotion], trigger_value, action_type enum[reply,escalate], action_value, order int)
knowledge_files (id, shop_id FK, filename, file_url, status enum[processing,ready,failed], created_at)

-- Products
products (id uuid PK, shop_id FK, name, sku, price, sale_price, stock_quantity, low_stock_threshold, image_url, ai_context text, is_pinned bool, created_at, updated_at)
product_platforms (id, product_id FK, platform, platform_product_id, synced_at)

-- Orders
orders (id uuid PK, shop_id FK, product_id FK, platform enum, platform_order_id, buyer_name, buyer_phone, buyer_address, total_price, status enum[pending_payment,processing,shipped,done,cancelled], created_at, updated_at)

-- Subscriptions
subscriptions (id, shop_id FK, plan, messages_used_today, reset_date, expires_at)
```

### MongoDB (unstructured / high-volume)

```js
// Live Sessions
{
  _id, shop_id, platform, tiktok_unique_id,
  start_time, end_time, status: "active|ended",
  metrics: { total_comments, total_orders, revenue, peak_viewers }
}

// Comments (high volume)
{
  _id, session_id, viewer_id, viewer_name,
  content, timestamp,
  ai_intent: "ask_price|ask_ship|buy|spam|negative|other",
  ai_reply: String,
  ai_action_taken: "replied|escalated|ignored",
  order_id: ObjectId | null  // nếu intent = buy → tạo order
}

// Message Inbox
{
  _id, shop_id, platform, sender_id, sender_name,
  thread_id, messages: [{role: "user|assistant", content, timestamp}],
  intent, buyer_total_value, tier: "normal|vip",
  created_at, last_updated
}

// Analytics Timeseries
{
  _id, session_id, timestamp,
  revenue_snapshot, viewer_count,
  interactions: { buy, cart, question, share }
}
```

---

## 3. API Endpoints tổng hợp

```
POST   /auth/register
POST   /auth/login
POST   /auth/logout

GET    /shop/profile
PUT    /shop/profile

GET    /platforms
POST   /platforms/connect
PUT    /platforms/:id/settings
DELETE /platforms/:id
GET    /tiktok/oauth/authorize      ← proxy, ẩn client_secret
POST   /tiktok/oauth/token          ← proxy

GET    /products?page&search&filter
POST   /products
PUT    /products/:id
DELETE /products/:id

GET    /orders?status&platform
PUT    /orders/:id/status
POST   /orders/:id/invoice

GET    /messages?platform
POST   /messages/:id/reply

GET    /ai/rules
POST   /ai/rules
DELETE /ai/rules/:id
POST   /ai/knowledge               ← upload file
GET    /ai/suggestions?sessionId

POST   /sessions/start
PUT    /sessions/:id/end
PUT    /sessions/:id/pin-product
GET    /sessions/:id/comments       ← stream via SSE hoặc WS
POST   /ai/reply                    ← send reply to platform

GET    /analytics/summary?sessionId
GET    /analytics/timeseries?sessionId
GET    /analytics/interactions?sessionId
```

---

## 4. Ưu tiên implement

| Độ ưu tiên | Module |
|-----------|--------|
| P0 | Auth (JWT), TikTok OAuth proxy, WebSocket proxy (ẩn Eulerstream key) |
| P1 | Products CRUD, Orders CRUD, Live Session (start/end/comments persist) |
| P2 | AI reply (`live.js:64` TODO), AI rules engine |
| P3 | Messages inbox, Analytics API |
| P4 | Subscriptions, Knowledge base upload |
