# PT. Batavia Asia Project — Official Website

Website resmi perusahaan konstruksi **PT. Batavia Asia Project**, dibangun dengan Next.js 15, Tailwind CSS, dan Framer Motion. Di-deploy otomatis ke Vercel setiap kali ada push ke branch `main`.

🌐 **Live:** [bataviaasiaproject.com](https://www.bataviaasiaproject.com)

---

## Tech Stack

| Teknologi | Keterangan |
|---|---|
| [Next.js 15](https://nextjs.org) | Framework React (App Router) |
| [TypeScript](https://www.typescriptlang.org) | Static typing |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer-motion.com) | Animasi & transisi |
| [Upstash Redis](https://upstash.com) | Real-time visitor counter |
| [Vercel](https://vercel.com) | Hosting & auto-deploy |

---

## Fitur Utama

- **Bilingual (ID / EN)** — Tombol toggle bahasa di navbar, seluruh konten berubah
- **Visitor Counter** — Real-time via Upstash Redis, diperbarui setiap 30 detik
- **Portfolio Lightbox** — Grid foto dengan zoom & navigasi slide
- **Company Structure** — Org chart dengan hover zoom & modal profil anggota
- **Career Section** — Daftar lowongan dengan form lamaran via email
- **SEO Ready** — sitemap.xml, robots.txt, meta tags, Google Search Console
- **Halaman About Us** — Company Profile, Company Values, Company Policy, Company Structure

---

## Cara Clone & Menjalankan Secara Lokal

### 1. Clone repository

```bash
git clone https://github.com/fjrsdqq/Web-BAP.git
cd Web-BAP
```

### 2. Install dependencies

```bash
npm install
```

### 3. Buat file `.env.local`

Buat file `.env.local` di root folder dan isi dengan kredensial Upstash Redis:

```env
UPSTASH_REDIS_REST_URL=https://your-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token-here
```

> Ambil value dari dashboard [Upstash Console](https://console.upstash.com).

### 4. Jalankan development server

```bash
npm run dev
```

Buka browser: **http://localhost:3000**

---

## Struktur Folder

```
Web-BAP/
├── app/
│   ├── page.tsx                  # Halaman utama (homepage)
│   ├── layout.tsx                # Root layout + SEO metadata
│   ├── company-profile/          # Halaman Company Profile
│   ├── company-structure/        # Halaman Company Structure (org chart)
│   ├── company-values/           # Halaman Company Values (B.U.I.L.D)
│   ├── company-policy/           # Halaman Company Policy
│   ├── api/visitors/             # API endpoint visitor counter (Upstash Redis)
│   ├── sitemap.ts                # Sitemap generator
│   └── robots.ts                 # Robots.txt config
├── components/
│   ├── Navbar.tsx                # Navbar + dropdown About Us + language toggle
│   ├── Footer.tsx                # Footer
│   ├── HeroSection.tsx           # Hero + modal Vision/Mission/Values
│   ├── OurService.tsx            # Layanan dengan tab kategori
│   ├── Portfolio.tsx             # Grid portfolio + lightbox
│   ├── Keunggulan.tsx            # Why Us section
│   ├── CareerSection.tsx         # Lowongan kerja
│   ├── CTASection.tsx            # Contact / CTA
│   └── StatsSection.tsx          # Statistik visitor
├── contexts/
│   └── LanguageContext.tsx       # Context bilingual (ID/EN)
├── public/
│   └── images/
│       ├── portfolio/            # Foto portfolio (Projek 1–4)
│       └── Company Structure/    # Foto anggota org chart
└── .env.local                    # ⚠️ Tidak di-push ke GitHub
```

---

## Deploy & Update Website

Setiap perubahan yang di-push ke branch `main` akan **otomatis di-deploy ke Vercel**.

```bash
# Tambah semua perubahan
git add .

# Commit dengan pesan yang jelas
git commit -m "Deskripsi perubahan"

# Push → otomatis deploy ke bataviaasiaproject.com
git push origin main
```

---

## Environment Variables (Vercel)

Variabel berikut harus di-set di **Vercel Dashboard → Settings → Environment Variables**:

| Variable | Keterangan |
|---|---|
| `UPSTASH_REDIS_REST_URL` | URL REST API Upstash Redis |
| `UPSTASH_REDIS_REST_TOKEN` | Token autentikasi Upstash Redis |

---

## Kontak

**PT. Batavia Asia Project**
- 📍 Jl. Tanah Manisan No.25E, Cipinang Cempedak, Jatinegara, Jakarta Timur 13340
- 📞 +62 823-1380-8775
- 📧 bataviaasiaproject@gmail.com
- 🌐 [bataviaasiaproject.com](https://www.bataviaasiaproject.com)
