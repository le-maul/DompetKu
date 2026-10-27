# DompetKu | Aplikasi Pencatatan Keuangan Pribadi

## 1. Judul & Deskripsi
DompetKu adalah aplikasi web statis satu halaman untuk mencatat pemasukan dan pengeluaran uang sehari-hari.

Latar belakang masalah: pelajar sering tidak sadar uang jajannya habis ke mana karena tidak ada catatan yang sederhana dan cepat dipakai.

Target pengguna: siswa SMA/SMK yang ingin memantau keuangan pribadi tanpa aplikasi yang rumit.

## 2. Teknologi yang Digunakan
- HTML5: struktur antarmuka halaman tunggal.
- CSS3: tata letak responsif tanpa framework.
- JavaScript (ES6): manipulasi DOM, perhitungan saldo, penyimpanan data via localStorage.
- Platform publikasi: GitHub Pages.

## 3. Pemanfaatan AI (AI Usage Disclosure)
- Alat AI yang digunakan: Gemini (web).
- Contoh perintah (prompt) utama:
  "Ini PRD untuk produk bernama DompetKu: berdasarkan PRD tersebut, tolong buatkan website statis satu halaman menggunakan HTML, CSS, dan JavaScript tanpa framework; pisahkan kode menjadi index.html, style.css, dan script.js; terapkan fitur sesuai PRD; buat draft README.md dan AI_LOGBOOK.md; jangan mengarang modifikasi yang belum saya lakukan; wajib mengikuti section Aturan Desain sebagai constraints visual."
- Penyesuaian/perbaikan mandiri yang dilakukan peserta(lokal/offline):
  1. Memperbaiki aturan reset CSS hasil generate AI yang kehilangan selector `*`, sehingga reset margin/padding benar-benar berlaku di browser.
  2. Mengganti popup `alert()` menjadi snackbar buatan sendiri (div + class CSS + fungsi showSnackbar) agar sesuai aturan desain yang kami tetapkan.
  3. Menguji manual validasi form (keterangan berisi spasi dan angka tidak valid) serta alur hapus-transaksi dan penyimpanan localStorage sebelum dikumpulkan.

## 4. Panduan Penggunaan
Tautan situs web aktif: 

Menjalankan secara lokal:
1. Buka file `index.html` di browser.
2. Isi form: Keterangan, Jumlah (Rp), pilih jenis Pemasukan/Pengeluaran.
3. Klik "Simpan Transaksi"; ringkasan saldo diperbarui otomatis.
4. Data tersimpan di browser (localStorage) dan tidak hilang saat refresh.
5. Klik tombol "Hapus" untuk membuang satu transaksi.

## 5. Identitas Pengembang
- Nama lengkap: Maulana Zeba dan M. Kholidil Asadil Alam.
- Kelas: XI
- Jurusan: TKJ
- Asal sekolah: SMK PGRI 2 JOMBANG
- Repositori: https://github.com/le-maul/DompetKu
