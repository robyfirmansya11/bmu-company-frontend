# Bahasa website

Website menggunakan bahasa Indonesia (id), Inggris (en), dan Mandarin sederhana (zh). Kamus berada di src/messages/{locale}.json. Komponen klien menggunakan useTranslations; halaman server menggunakan getPageTranslations. Teks kaya menggunakan richTextTags agar penekanan dan pemisah baris tetap terjaga.

Middleware di src/middleware.ts menangani awalan bahasa, preferensi bahasa pengunjung, dan header bahasa untuk atribut HTML lang. Bahasa default adalah Indonesia. LocaleLink mempertahankan halaman, parameter URL, dan anchor saat mengganti bahasa. Nama perusahaan dan alamat resmi tetap dipertahankan.

## Pemeriksaan

- node --test tests/i18n.test.cjs
- npx tsc --noEmit
- npm run build

Tes memeriksa kesamaan kunci kamus, format pesan ICU, referensi terjemahan, dan perpindahan bahasa pada URL halaman detail.

## Batas cakupan

Konten utama perusahaan, formulir, judul dokumen, navigasi, metadata halaman, serta label berita dan karier telah diterjemahkan. Isi berita dan detail lowongan berasal dari API terpisah dan ditampilkan sesuai data aslinya. Terjemahan isi tersebut membutuhkan konten multibahasa di backend. Dokumen PDF asli dan teks yang tertanam dalam gambar tetap sesuai berkas sumber. Halaman contoh template yang tidak menjadi bagian navigasi perusahaan (blog-sidebar, signin, signup) tidak termasuk penerjemahan konten utama.

Konten karier sumber masih menyebut Black & Veatch, kepemilikan karyawan, dan kerja hibrida. Klaim tersebut dipertahankan saat penerjemahan dan perlu ditinjau pemilik konten sebelum digunakan sebagai profil kebijakan BMU.

Untuk uji respons 36 halaman: jalankan npm run start pada port 3000, lalu node tests/i18n-smoke.cjs.
