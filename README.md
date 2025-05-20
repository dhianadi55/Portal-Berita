<<<<<<< HEAD
# 📘 Portal Berita

Aplikasi agregator berita Indonesia berbasis web yang menampilkan berita terbaru dari berbagai portal dengan autentikasi Google/GitHub.

---

## 📜 Daftar Isi
1. [Deskripsi](#deskripsi)  
2. [Fitur](#fitur)  
3. [Demo](#demo)  
4. [Instalasi](#instalasi)  
5. [Penggunaan](#penggunaan)  
6. [Konfigurasi](#konfigurasi)  
7. [Struktur Folder](#struktur-folder)  
8. [Teknologi](#teknologi)  
9. [Kontribusi](#kontribusi)  
10. [Lisensi](#lisensi)  
11. [Kontak](#kontak)

---

## 📖 Deskripsi

Portal Berita adalah aplikasi web yang mengumpulkan dan menampilkan berita-berita terbaru dari berbagai sumber (menggunakan NewsAPI.org) secara real-time. Pengguna dapat masuk menggunakan akun Google atau GitHub untuk pengalaman yang lebih personal. Proyek ini bertujuan memudahkan masyarakat Indonesia mendapatkan informasi aktual dari satu tempat dengan tampilan modern dan responsif.

---

## ✨ Fitur

- 📰 Agregasi berita dari beberapa portal (NewsAPI)
- 🔍 Pencarian & filter berita (opsional, dapat dikembangkan)
- 🔐 Autentikasi via Google & GitHub (NextAuth)
- ⚡ Tampilan responsif & modern
- 🖼️ Gambar berita dengan fallback otomatis
- 🌙 Dukungan tema (bisa dikembangkan)
- 🔄 Data real-time dengan SWR (auto refresh)
- 🛡️ Penanganan error & loading state

---

## 🎥 Demo

- **Live:** _(Belum tersedia, jalankan lokal)_
- **Screenshot:**

  ![Screenshot Home](./assets/screenshot-home.png)

---

## 🚀 Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/username/portal-berita.git
   cd portal-berita
   ```

2. **Instal dependencies**
   ```bash
   npm install
   ```

3. **Buat file konfigurasi environment**
   - Salin `.env.local` dan isi dengan API key NewsAPI serta kredensial OAuth Google/GitHub.

---

## ⚙️ Penggunaan

1. **Jalankan server pengembangan**
   ```bash
   npm run dev
   ```
2. Buka browser ke [http://localhost:3000](http://localhost:3000)
3. Login menggunakan Google atau GitHub
4. Jelajahi berita terbaru dari berbagai portal!

---

## 🛠️ Konfigurasi

Edit file `.env.local` sesuai kebutuhan:

```env
NEXTAUTH_SECRET=xxx
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx

GITHUB_ID=xxx
GITHUB_SECRET=xxx

NEWSAPI_KEY=xxx
```

- Dapatkan API key NewsAPI di https://newsapi.org/
- Untuk Google/GitHub OAuth, buat aplikasi di developer console masing-masing.

---

## 🗂️ Struktur Folder

```bash
portal-berita/
├─ components/         # Komponen UI (Card, Header, Layout, dll)
├─ pages/              # Halaman Next.js (index, login, api, news)
│  ├─ api/             # API routes (Next.js API)
│  │  └─ news/         # Endpoint berita per portal
│  └─ news/            # Halaman detail berita
├─ services/           # Logic fetch berita per portal
├─ .env.local          # Konfigurasi environment (jangan commit)
├─ package.json
├─ tsconfig.json
└─ README.md
```

---

## 🛠️ Teknologi

- **Frontend:** Next.js, React, SWR
- **Backend:** Next.js API Routes
- **Autentikasi:** NextAuth.js (Google, GitHub)
- **HTTP Client:** Axios
- **Styling:** (Bebas, bisa tambah Tailwind CSS/Bootstrap)
- **Deployment:** Vercel, Netlify, dsb.

---

## 🤝 Kontribusi

1. Fork repository ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan kamu (`git commit -m 'Tambah fitur baru'`)
4. Push ke branch tersebut (`git push origin fitur-baru`)
5. Buat Pull Request

Harap sertakan deskripsi perubahan dan alasan kontribusi.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License.

---

## 📬 Kontak

- Email: nama@example.com
- LinkedIn: https://linkedin.com/in/username
- Twitter: [@username](https://twitter.com/username)

---

> **Catatan:**  
> Proyek ini hanya untuk pembelajaran. Pastikan untuk tidak membagikan API key secara publik.# Portal-Berita
=======
