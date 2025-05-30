# Portfolio Pribadi

Portfolio pribadi yang responsif dan mudah di-maintain, dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS.

## 🚀 Fitur

- **4 Halaman Utama**: Profil, Proyek, Artikel, dan Kontak
- **Responsive Design**: Optimal untuk desktop, tablet, dan mobile
- **Dark/Light Mode**: Toggle tema otomatis
- **Dynamic Routing**: Halaman detail untuk proyek dan artikel
- **Contact Form**: Form kontak dengan validasi
- **Easy Content Management**: JSON files untuk data
- **SEO Optimized**: Meta tags dan struktur yang SEO-friendly
- **Modern UI**: Menggunakan shadcn/ui components

## 🛠️ Teknologi

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Struktur Proyek

\`\`\`
portfolio/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Halaman beranda
│   ├── profile/           # Halaman profil
│   ├── projects/          # Halaman proyek & detail
│   ├── articles/          # Halaman artikel & detail
│   ├── contact/           # Halaman kontak
│   └── api/               # API routes
├── components/            # Reusable components
├── lib/                   # Utility functions
├── data/                  # JSON data files
└── public/               # Static assets
\`\`\`

## 🚀 Quick Start

1. **Clone repository**
   \`\`\`bash
   git clone [repository-url]
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## ✏️ Cara Mengisi Konten

### 1. Profil Saya
Edit file `app/profile/page.tsx`:
- Ganti `[Nama Anda]` dengan nama lengkap
- Ganti `[Profesi/Jabatan Anda]` dengan profesi
- Isi bagian "Tentang Saya", "Keahlian", dan "Pengalaman"
- Upload foto profil ke folder `public/images/`

### 2. Proyek Saya
Edit file `data/projects.json`:
\`\`\`json
{
  "id": "1",
  "title": "Nama Proyek Anda",
  "description": "Deskripsi singkat proyek",
  "longDescription": "Deskripsi lengkap proyek",
  "image": "/images/project1.jpg",
  "category": "Web Development",
  "technologies": ["Next.js", "TypeScript", "Tailwind"],
  "date": "2024",
  "slug": "nama-proyek",
  "demoUrl": "https://demo-url.com",
  "githubUrl": "https://github.com/username/repo",
  "features": ["Fitur 1", "Fitur 2"],
  "status": "Selesai",
  "duration": "2 bulan",
  "team": "Personal"
}
\`\`\`

### 3. Artikel Saya
Edit file `data/articles.json`:
\`\`\`json
{
  "id": "1",
  "title": "Judul Artikel",
  "excerpt": "Ringkasan artikel",
  "category": "Tutorial",
  "tags": ["JavaScript", "React"],
  "date": "15 Januari 2024",
  "readTime": 5,
  "slug": "judul-artikel"
}
\`\`\`

Untuk konten artikel lengkap, edit file `app/articles/[slug]/page.tsx`.

### 4. Kontak Saya
Edit file `app/contact/page.tsx`:
- Ganti `[email@anda.com]` dengan email Anda
- Ganti `[+62 xxx-xxxx-xxxx]` dengan nomor telepon
- Ganti `[Kota, Negara]` dengan lokasi Anda
- Update URL media sosial

## 🎨 Kustomisasi

### Warna dan Tema
Edit file `tailwind.config.ts` untuk mengubah skema warna:
\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Custom colors
        }
      }
    }
  }
}
\`\`\`

### Font
Edit file `app/layout.tsx` untuk mengganti font:
\`\`\`tsx
import { Cute_Font as YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
\`\`\`

## 📱 Responsive Design

Portfolio ini sudah dioptimalkan untuk:
- **Desktop**: 1024px ke atas
- **Tablet**: 768px - 1023px  
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository di Vercel
3. Deploy otomatis

### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 📧 Contact Form Integration

Untuk mengaktifkan form kontak:

1. **Email Service** (pilih salah satu):
   - SendGrid
   - Nodemailer
   - Resend
   - EmailJS

2. **Database** (opsional):
   - Supabase
   - PlanetScale
   - MongoDB

3. Edit `app/api/contact/route.ts` sesuai service yang dipilih.

## 🔧 Maintenance

### Menambah Proyek Baru
1. Tambah entry di `data/projects.json`
2. Upload gambar ke `public/images/`
3. Buat slug yang unik

### Menambah Artikel Baru
1. Tambah entry di `data/articles.json`
2. Edit konten di `app/articles/[slug]/page.tsx`

### Update Profil
1. Edit `app/profile/page.tsx`
2. Update foto di `public/images/`

## 📄 License

MIT License - silakan gunakan untuk proyek pribadi atau komersial.

## 🤝 Contributing

Contributions welcome! Please read contributing guidelines first.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Buka issue di GitHub
- Email: [your-email@domain.com]

---

**Happy Coding! 🚀**
