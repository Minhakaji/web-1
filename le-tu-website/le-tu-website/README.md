# Website Thế Giới Mâm Lốp Lê Tú

Trang giới thiệu dịch vụ làm lốp lưu động 24/24, mua bán mâm lốp và cứu hộ ô tô, xe tải tại TP. Buôn Ma Thuột, Đắk Lắk.

## Cấu trúc thư mục

```
le-tu-website/
├── index.html              # Toàn bộ nội dung trang (1 trang duy nhất)
├── assets/
│   ├── css/
│   │   └── style.css       # Toàn bộ style, dùng CSS variables ở đầu file
│   └── images/
│       ├── logo.jpg
│       ├── hero-xe-luu-dong.jpg
│       ├── doi-lop-xe-tai-dem.jpg
│       ├── ky-thuat-vien.jpg
│       ├── va-lop-luu-dong.jpg
│       └── xe-chuyen-dung.jpg
└── README.md
```

## Mở trong VS Code

1. Giải nén file zip vào một thư mục.
2. Mở VS Code → File → Open Folder... → chọn thư mục `le-tu-website`.
3. Cài extension **Live Server** (Ritwick Dey) nếu muốn xem trực tiếp có auto-reload khi sửa file.
4. Chuột phải vào `index.html` → **Open with Live Server** để xem trang trên trình duyệt.

## Những chỗ cần cập nhật khi có thông tin mới

Tìm nhanh bằng Ctrl+F (hoặc Cmd+F) trong `index.html`:

| Cần sửa | Tìm từ khoá |
|---|---|
| Số điện thoại (xuất hiện 5 chỗ) | `0362258360` |
| Email | `nguyenthanh1909@gmail.com` |
| Địa chỉ 2 cơ sở | `Đinh Tiên Hoàng`, `Nguyễn Văn Cừ` |
| Đánh giá khách hàng (đang là ví dụ mẫu) | `<div class="reviews">` |

## Bảng màu (CSS variables, đầu file `style.css`)

| Biến | Mã màu | Vai trò |
|---|---|---|
| `--soil` | `#8C3D2E` | Đỏ đất bazan — viền nhấn phụ |
| `--beacon` | `#F2A93B` | Vàng đèn báo hiệu — CTA, nút gọi |
| `--ink` | `#1A1712` | Nền chính (tối) |
| `--paper` | `#F5EFE6` | Chữ chính |
| `--stone` | `#B9AE9C` | Chữ phụ, mô tả |

## Font chữ

- Tiêu đề: **Fraunces** (serif) — tải qua Google Fonts trong `<head>` của `index.html`
- Nội dung: **IBM Plex Sans** — cũng tải qua Google Fonts

Không cần cài npm hay build gì cả — đây là HTML/CSS thuần, mở file `index.html` bằng trình duyệt là chạy được ngay.
