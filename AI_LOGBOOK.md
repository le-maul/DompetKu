# AI LOGBOOK | DompetKu

## Tahap 1: Eksplorasi Ide & Perancangan Solusi
| Deskripsi Aktivitas | Output AI | Validasi & Modifikasi Mandiri |
| --- | --- | --- |
| Mencoba prompt peran (mentor startup, konsultan bisnis, UI/UX designer) saat sesi praktik Materi 6 untuk mencari ide produk. | AI menawarkan arah website wirausaha berbasis AI untuk menjual produk/jasa. | Kami menolak arah monetisasi karena tidak sesuai tema final "solusi kehidupan sehari-hari", lalu memilih pencatat keuangan pribadi pelajar dan membekukan daftar fitur dalam PRD sederhana. |
| Menganalisis kebutuhan PRD: komponen ringkasan saldo, form input, dan riwayat transaksi. | AI menyusun struktur dasar komponen halaman tunggal. | Kami membatasi jenis transaksi menjadi pemasukan dan pengeluaran agar selesai tepat waktu, dan menetapkan localStorage sebagai satu-satunya penyimpanan. |

## Tahap 2: Penyusunan Kerangka Kode (Scaffolding)
| Deskripsi Aktivitas | Output AI | Validasi & Modifikasi Mandiri |
| --- | --- | --- |
| Meminta AI membuat kerangka index.html, style.css, dan script.js tanpa framework. | AI memberikan HTML5 semantik, CSS grid/flex tanpa framework, dan skrip manipulasi DOM dengan localStorage. | Kami memeriksa sendiri bahwa seluruh id di HTML cocok dengan selector di JS, dan memisahkan kode tepat menjadi tiga file sesuai rencana. |
| Menerapkan batasan aturan desain (tanpa gradien, glassmorphism, emoji, hero section). | AI memakai palet netral putih/abu dengan indikator hijau-merah. | Kami mengecek tampilan di layar kecil dan memastikan kartu ringkasan menyusun satu kolom di bawah 480px. |

## Tahap 3: Pemecahan Masalah & Penanganan Galat (Debugging)
| Deskripsi Aktivitas | Output AI | Validasi & Modifikasi Mandiri |
| --- | --- | --- |
| Memeriksa hasil generate sebelum dipakai. | AI menghasilkan aturan reset CSS tanpa selector `*` sehingga aturan tersebut tidak valid dan dibuang browser. | Kami menemukannya saat membaca ulang kode, lalu menambahkan selector `*` secara mandiri dan memverifikasi reset kembali berlaku. |
| Menguji validasi form dengan keterangan berisi spasi dan angka tidak valid. | AI memakai popup `alert()` untuk pesan validasi. | Kami mengganti `alert()` menjadi snackbar buatan sendiri (div + class CSS + fungsi showSnackbar), lalu menguji ulang: pesan muncul sebagai bar hitam di bawah layar dan transaksi tidak masuk. |
| Menguji alur hapus transaksi. | AI memakai event delegation berbasis atribut data-id pada container list. | Kami menguji hapus beberapa transaksi dan memastikan saldo serta total pemasukan/pengeluaran dihitung ulang dengan benar. |

## Tahap 4: Refleksi & Penjelasan Kode
| Deskripsi Aktivitas | Output AI | Validasi & Modifikasi Mandiri |
| --- | --- | --- |
| Meminta penjelasan fungsi formatIDR(). | AI menjelaskan penggunaan toLocaleString('id-ID') untuk format Rupiah. | Kami menguji angka 0, angka besar, dan hasil negatif, lalu memastikan tampilan tidak pecah di kartu ringkasan. |
| Meminta penjelasan alur penyimpanan data. | AI menjelaskan transaksi disimpan sebagai array JSON di localStorage dan dimuat ulang saat DOMContentLoaded. | Kami membuktikan dengan menambah transaksi lalu me-refresh halaman; data tetap ada. Kami juga memahami perhitungan filter/reduce untuk total pemasukan dan pengeluaran. |
