# SEO perusahaan

Nama utama: PT Bumi Morowali Utama. Variasi: PT BMU, Bumi Morowali Utama, BMU.

Domain canonical default mengikuti konfigurasi project: https://bumimorowaliutama.com.
Jika domain utama memakai www, set SITE_URL=https://www.bumimorowaliutama.com di Vercel lalu redeploy.
Pilih satu domain utama di Vercel dan redirect domain alternatif ke domain tersebut; jangan mengubah DNS email/MX Rumahweb.

## Setelah deploy
1. Pastikan domain utama, /id, /en, /zh, /robots.txt dan /sitemap.xml dapat diakses publik.
2. Tambahkan Domain property bumimorowaliutama.com di Google Search Console.
3. Tambahkan record TXT verifikasi yang diberikan Google di pengelola DNS domain. Pertahankan MX/SPF/DKIM email.
4. Kirim sitemap.xml di Search Console.
5. Periksa URL /id melalui URL Inspection dan Request Indexing; ulangi untuk /en, /zh dan /id/about.
6. Pantau Page indexing dan Performance untuk pencarian nama perusahaan.

GOOGLE_SITE_VERIFICATION opsional untuk verifikasi HTML URL-prefix property (isi token Google, bukan keseluruhan tag).
Sitemap mencakup 30 URL halaman publik statis, tidak mencakup halaman izin yang sudah dihapus, demo, atau URL detail API yang belum diverifikasi.
Tidak menggunakan tanggal lastModified palsu. Metadata detail artikel/lowongan belum dicakup pekerjaan SEO nama perusahaan ini.
Tidak ada jaminan posisi atau waktu pengindeksan. Perubahan lokal belum memengaruhi Google sebelum deploy.

Referensi:
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
