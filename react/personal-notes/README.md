# Catatan Pribadi

**Catatan Pribadi** adalah front-end website yang memungkinkan pengguna untuk menambahkan, menghapus, mencari, dan mengarsipkan catatan pribadi, dibangun menggunakan React dan Vite.

---

## Fitur Utama

1. **Menampilkan Daftar Catatan**

   - Daftar catatan ditampilkan menggunakan data awal yang disediakan.
   - Catatan dapat dilihat dengan detail termasuk judul, isi, tanggal dibuat, dan status arsip.

2. **Menambahkan Catatan Baru**

   - Pengguna dapat menambahkan catatan baru menggunakan form input yang ramah pengguna.
   - Setiap catatan memiliki:
     - ID unik yang dihasilkan secara otomatis.
     - Judul (maksimal 50 karakter).
     - Isi catatan.
     - Status arsip (default: tidak diarsipkan).
     - Tanggal pembuatan.

3. **Menghapus Catatan**

   - Catatan dapat dihapus menggunakan tombol hapus.
   - Jika tidak ada catatan, pesan "Tidak ada catatan" akan ditampilkan.

4. **Pencarian Catatan**

   - Pengguna dapat mencari catatan berdasarkan judul.
   - Hasil pencarian diperbarui secara real-time saat pengguna mengetik.

5. **Fitur Arsip**

   - Pengguna dapat memindahkan catatan ke arsip atau mengembalikannya ke daftar aktif.
   - Catatan yang diarsipkan ditampilkan secara terpisah dari catatan aktif.

6. **Batas Karakter Judul**
   - Judul catatan dibatasi hingga 50 karakter.
   - Jumlah karakter yang tersisa ditampilkan secara dinamis.

---

## Instalasi dan Menjalankan Proyek

1. **Ekstrak Arsip**
   Mengekstrak arsip personal-notes.zip ke dalam folder Anda

2. **Masuk ke Direktori Proyek**

   ```bash
   cd personal-notes
   ```

3. **Instalasi Dependencies**
   Menggunakan `pnpm` (pastikan pnpm telah terinstal di sistem Anda):

   ```bash
   pnpm install
   ```

4. **Menjalankan Aplikasi**

   ```bash
   pnpm run dev
   ```

5. **Buka Aplikasi di Browser**
   Aplikasi dapat diakses melalui URL:
   ```
   http://localhost:5173
   ```

---

## Struktur Folder

```
project-folder/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── NoteApp.jsx
│   │   ├── NoteInput.jsx
│   │   ├── NoteItem.jsx
│   │   ├── NoteList.jsx
│   │   └── SearchBar.jsx
│   ├── styles/
│   │   └── style.css
│   ├── utils/
│   │   ├── index.js
│   └── index.jsx
└── vite.config.js
```

---

## Dependensi Utama

- [React](https://reactjs.org/) - Library untuk membangun antarmuka pengguna.
- [Vite](https://vitejs.dev/) - Dev server cepat untuk React.

---

## Catatan Tambahan

- **Styling:** Aplikasi menggunakan file CSS khusus (`style.css`) dari starter project.
- **Data Awal:** Data awal catatan berada di `src/utils/index.js`.

---

## Kontributor

Dikembangkan oleh [Nantungga Putra](https://www.linkedin.com/in/nantungga-putra-451779116/).

---

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
