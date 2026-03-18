# Spec Thiết Kế: Việt Hóa, Cài Đặt Logo & Tính Năng AI Persona

## Mục tiêu
1. **Việt hóa 100%**: Loại bỏ toàn bộ tiếng Anh còn sót lại trong Dashboard và các trang con.
2. **Global Logo**: Kích hoạt logo của phần mềm để hiển thị làm favicon (trình duyệt) và trên mọi màn hình (Landing, Login, Header navbar).
3. **AI Persona & Subscription**: Nâng cấp trang Cài đặt AI (`AILogic.jsx`) để người dùng cấu hình "Linh hồn" cho AI theo mô hình Openclaw/Character AI, đồng thời tích hợp phần Quản lý Gói cước.

## 1. Cấu trúc trang Quản lý AI (AILogic.jsx hiện tại -> Cài đặt AI & Gói cước)

Cách tiếp cận đề xuất: Chia giao diện làm 2 cột hoặc sử dụng layout xếp dọc/ngang (Grid). 

### Phần 1: Quản lý Gói cước (Subscription & Usage)
Cung cấp minh bạch về gói người dùng đang dùng mượn ý tưởng từ phần Pricing ở Landing Page.
- **Gói hiện tại**: Ví dụ: `Gói Pro`
- **Mức tiêu thụ**: Thanh tiến trình (Progress bar) cho Text/Messages (VD: 250/500 tin nhắn AI hôm nay).
- **Nút Hành động**: `Nâng cấp gói` (Nổi bật) & `Mua thêm lượt AI`.

### Phần 2: Hồ sơ AI / Định danh (AI Persona/Identity)
Cài đặt "linh hồn" (Soul) và "định danh" cho AI để AI nhập vai chính xác.
- **Tên Cửa Hàng / Tên AI**: AI tự xưng là gì? (VD: Shop abc, Em, Mình, Tư vấn viên...)
- **Giới Thiệu Shop (Background/Context)**: Textarea dài để người dùng mô tả shop đang bán gì, điểm mạnh, chính sách chung (vd: "Shop chuyên mỹ phẩm Hàn Quốc nhập khẩu, free ship cho đơn trên 500k...").
- **Linh hồn / Giọng văn (Soul & Tone)**: 
  - Cách xưng hô: `Shop - Khách`, `Mình - Bạn`, `Em - Chị`...
  - Thái độ (Radio/Select): `Chuyên nghiệp & Lịch sự`, `Thân thiện & Đáng yêu`, `Tư vấn chốt sale mạnh`.

### Phần 3: Kho Tri Thức & Quy tắc (Knowledge Base & Rules Engine)
(Sử dụng lại UI cũ nhưng được nâng cấp và dịch sang tiếng Việt)
- **Luật phản hồi (If/Then)**: Thêm các quy tắc tự động hóa (Ví dụ: Khách hỏi giá -> AI gửi Link báo giá).
- **Tài liệu huấn luyện (Knowledge Base)**: Khu vực Upload file (PDF, TXT) để AI học thuộc giá/ảnh sản phẩm.

## 2. Setup Logo

Dự án hiện có 3 file logo trong `src/assets/`. 
- **Giải pháp**: Xài bản `logo_1080x1080.png` vì độ phân giải này là lý tưởng (tỉ lệ 1:1, vừa đủ nét, nhẹ hơn bản 10k). 
- **Các nơi cần thay**:
  1. `public/favicon.ico` (hoặc `.png`) & đổi `<link>` trong `index.html`.
  2. `LandingPage.jsx`: Thay cho icon `leak_add`.
  3. `Login.jsx`: Thay cho icon `leak_add`.
  4. `Sidebar.jsx` (Hoặc Header): Thay cho biểu tượng ứng dụng bên trong dashboard.

## 3. Quá trình Việt Hóa

Toàn bộ các chuỗi văn bản cứng (hardcoded strings) trong thư mục `src/pages` và `src/components` sẽ được quét và đổi sang tiếng Việt tự nhiên, phù hợp với nghiệp vụ e-commerce/Livestream.

**Ví dụ một số thay đổi**:
- `Dashboard` -> `Tổng quan`
- `Message Inbox` -> `Hộp thư (Inbox)`
- `Order Manager Console` -> `Quản lý Đơn hàng`
- `Inventory Manager` -> `Kho Sản phẩm`
- `Analytics` -> `Phân tích dữ liệu`
- `Platform Connect` -> `Kết nối Kênh`
- `AI Settings` -> `Cài đặt AI`

## Câu hỏi cho User
1. Phần nâng cấp gói trong trang Cài Đặt AI, bạn muốn khi bấm nút "Nâng cấp", nó sẽ hiển thị Popup (Modal) bảng giá, hay chuyển hướng (navigate) về trang Landing Page phần Bảng giá?
2. Trong phần `Soul & Identity`, bạn có muốn thêm ô để người dùng cung cấp "Câu chào mặc định" cho AI khi có khách mới vào xem Livestream không?

## Bước tiếp theo (Implementation)
Nếu bạn đồng ý với thiết kế này, tôi sẽ tiến hành cập nhật Code (index.html, CSS, cài logo, dịch thuật hàng loạt và viết lại trang AILogic.jsx).
