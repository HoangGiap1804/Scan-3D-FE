# Kết nối Google Drive với React (Giống Diagram)

Tài liệu này hướng dẫn **từng bước** cách kết nối Google Drive từ ứng dụng **React** để đăng nhập Google, duyệt danh sách file và mở file giống như chức năng *Diagram / Draw.io*.

---

## 1. Kiến trúc tổng quát

```
React App
   |
   |-- Google OAuth 2.0
   |-- Access Token
   |
   |-- Google Drive API
         |-- List files
         |-- Open file
```

---

## 2. Tạo OAuth Client trên Google Cloud

### Bước 1: Tạo Project
- Truy cập: https://console.cloud.google.com
- Create Project

### Bước 2: Enable Google Drive API
- APIs & Services → Library
- Enable **Google Drive API**

### Bước 3: Tạo OAuth Client ID
- APIs & Services → Credentials
- Create Credentials → OAuth Client ID
- Application type: **Web application**
- Authorized JS origins:
```
http://localhost:3000
```

Lưu lại:
- `CLIENT_ID`

---

## 3. Cài đặt thư viện cho React

```bash
npm install @react-oauth/google axios
```

---

## 4. Bọc App bằng GoogleOAuthProvider

```jsx
import { GoogleOAuthProvider } from '@react-oauth/google';

<GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
  <App />
</GoogleOAuthProvider>
```

---

## 5. Đăng nhập Google & xin quyền Google Drive

### Scope sử dụng
```
https://www.googleapis.com/auth/drive.readonly
```

### Component Connect Google Drive

```jsx
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const login = useGoogleLogin({
  scope: 'https://www.googleapis.com/auth/drive.readonly',
  onSuccess: async (token) => {
    const res = await axios.get(
      'https://www.googleapis.com/drive/v3/files',
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
        params: {
          fields: 'files(id, name, mimeType)',
        },
      }
    );
    console.log(res.data.files);
  },
});
```

---

## 6. Hiển thị danh sách file

```jsx
<ul>
  {files.map(file => (
    <li key={file.id}>{file.name}</li>
  ))}
</ul>
```

---

## 7. Mở file Google Drive

### Mở trực tiếp trên Google Drive

```js
window.open(
  `https://drive.google.com/file/d/${fileId}/view`,
  '_blank'
);
```

---

## 8. Lọc loại file (Docs, Sheets, Slides)

```js
params: {
  q: "mimeType='application/vnd.google-apps.presentation'",
}
```

| File | MIME Type |
|----|----------|
| Docs | application/vnd.google-apps.document |
| Sheets | application/vnd.google-apps.spreadsheet |
| Slides | application/vnd.google-apps.presentation |

---

## 9. Thu hồi quyền (Logout)

```js
google.accounts.oauth2.revoke(accessToken);
```

---

## 10. Tổng kết Flow

```
Click Connect
   ↓
Google Login
   ↓
Access Token
   ↓
Drive API
   ↓
Open file
```

---

## Ghi chú
- Diagram / Draw.io chỉ dùng quyền `readonly`
- Token nên được lưu tạm (memory / sessionStorage)
- Không hardcode access token

---

**Hoàn thành 🎉**
