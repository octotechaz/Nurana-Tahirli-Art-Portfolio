# SRS / FSD — Nurana.th Portfolio Saytı

> **Sənəd növü:** Software Requirements Specification + Functional Specification Document  
> **Müştəri:** Nurana th  
> **Hazırlayan:** Octotech  
> **Domain:** nuranath.com  
> **Tarix:** 2026-10-13  
> **Versiya:** 1.2 — Stack Seçildi / İnkişafa Hazır

---

## 1. Layihəyə Ümumi Baxış

Nurana adlı rəssam/dizayner üçün çoxdilli, tam idarə edilə bilən portfolio saytı. Kateqoriya → Subkateqoriya → Qalereya → Case-study arxitekturası. Kod bilmədən işləyən admin panel. MVP birinci, genişlənmə sonra.

**Auditoriya:** Potensial müştərilər, işəgötürənlər, ümumi ziyarətçilər.  
**Çatdırılma:** MVP-yönümlü, mümkün qədər tez.

---

## 2. Texniki Stack (Seçildi)

### Next.js 15 + Sanity CMS + Vercel

**Niyə bu stack Cursor / Claude / Gemini üçün ən optimaldır:**

| Meyar | Next.js + Sanity | Laravel + Filament |
|---|---|---|
| LLM bilik gücü | ⭐⭐⭐⭐⭐ React/TS LLM-lərin əsas dili | ⭐⭐⭐ PHP daha az training data |
| Cursor Composer dəqiqliyi | Çox yüksək — TypeScript tip sistemi AI-a kontekst verir | Orta |
| Claude kod generasiyası | Next.js App Router-i dərin bilir | Filament v3-də hallüsinasiya riski |
| Gemini kod tamamlaması | React/TSX-də çox güclü | Blade template-lərdə zəif |
| Tip təhlükəsizliyi | TypeScript end-to-end | PHP + JS qarışıq |
| Deploy sadəliyi | `git push` → Vercel avtomatik | Server konfiqurasiyası tələb edir |
| Admin panel | Sanity Studio — vizual, hazır | Filament — PHP refaktorinq lazım |
| i18n | next-intl — production-ready | Spatie — əl işi tələb edir |

### Tam Stack Siyahısı

```
Frontend:    Next.js 15 (App Router, React 19, TypeScript)
Styling:     Tailwind CSS v4 + shadcn/ui
CMS:         Sanity v3 (GROQ, structured content, asset pipeline)
Auth:        Sanity Studio built-in (admin panel üçün)
i18n:        next-intl (AZ / EN / RU)
Images:      Sanity CDN + next/image (auto-optimize, WebP)
Forms:       React Hook Form + Resend (email delivery)
Deploy:      Vercel (preview → production, Edge Network)
Repo:        Git (Origin / GitHub)
```

---

## 3. Məlumat Arxitekturası

### 3.1 Sanity Sxem Strukturu

```
Category
  ├── slug, order
  └── name { az, en, ru }

Subcategory
  ├── slug, order
  ├── name { az, en, ru }
  └── parentCategory → Category

Project
  ├── slug
  ├── title { az, en, ru }
  ├── description { az, en, ru }   ← Portable Text
  ├── technique { az, en, ru }
  ├── year: number
  ├── coverImage → SanityImage
  ├── gallery[]: SanityImage[]
  ├── subcategory → Subcategory
  └── publishedAt: datetime

SiteSettings (singleton)
  ├── contactEmail: string
  ├── logoImage → SanityImage
  ├── socialLinks[]
  │     ├── platform: enum  (instagram|behance|linkedin|pinterest|x|youtube|tiktok|facebook|custom)
  │     └── url: string
  └── seoDefaults { az, en, ru }
```

### 3.2 URL Strukturu

```
/                                              → Ana səhifə
/[locale]/                                     → AZ / EN / RU
/[locale]/[category]                           → Kateqoriya
/[locale]/[category]/[subcategory]             → Subkateqoriya qalereya
/[locale]/[category]/[subcategory]/[project]   → Case-study
/[locale]/contact                              → Əlaqə
/studio                                        → Sanity Admin Panel
```

---

## 4. Funksional Tələblər

### 4.1 İctimai Sayt

| # | Funksiya | Prioritet |
|---|---|---|
| F01 | Ana səhifə — kateqoriya kartları | P0 |
| F02 | Kateqoriya səhifəsi — subkateqoriya kartları | P0 |
| F03 | Subkateqoriya — proyekt qalereya grid | P0 |
| F04 | Proyekt detay — başlıq, il, texnika, açıqlama, şəkil qalereyası | P0 |
| F05 | 3 dil switcher (AZ / EN / RU), URL-based | P0 |
| F06 | Əlaqə formu (ad, email, mesaj → admin emailinə Resend ilə) | P0 |
| F07 | Sosial media linklər — URL varsa görünür, yoxdursa gizlənir | P0 |
| F08 | Logo — placeholder SVG, admin paneldən dəyişdirilir | P0 |
| F09 | Tam responsive — mobil / tablet / desktop | P0 |
| F10 | SEO: meta teqlər, Open Graph, hreflang, sitemap.xml, robots.txt | P1 |
| F11 | Lightbox — şəkil böyütmə | P1 |
| F12 | Proyektlər arası əvvəl/sonra naviqasiyası | P2 |

### 4.2 Admin Panel (Sanity Studio — /studio)

| # | Funksiya | Prioritet |
|---|---|---|
| A01 | Kateqoriya yarat / düzəlt / sil | P0 |
| A02 | Subkateqoriya yarat / düzəlt / sil | P0 |
| A03 | Proyekt yarat / düzəlt / sil | P0 |
| A04 | Şəkil yüklə (Sanity Asset Pipeline, auto-WebP) | P0 |
| A05 | Çoxdilli sahələri doldur (AZ / EN / RU) | P0 |
| A06 | Logo yüklə / dəyiş | P0 |
| A07 | Əlaqə emaili təyin et | P0 |
| A08 | Sosial media URL-lərini daxil et / aktivləşdir / deaktivləşdir | P0 |
| A09 | Proyekt sıralaması — drag-and-drop | P1 |
| A10 | Draft / yayımlanmış vəziyyəti idarə et | P1 |

---

## 5. Qeyri-Funksional Tələblər

| Kateqoriya | Tələb |
|---|---|
| Performans | Lighthouse ≥ 90 (mobile); LCP < 2.5s (4G) |
| Şəkillər | Sanity CDN + next/image lazy load + WebP auto-convert; max 10 MB/şəkil |
| Dil | next-intl; AZ / EN / RU; URL-based locale; default: AZ |
| Təhlükəsizlik | Sanity Studio CORS + token auth; form rate-limit; honeypot / reCAPTCHA |
| Deploy | Vercel — `main` → production; `dev` → preview URL |
| Brauzer dəstəyi | Chrome / Firefox / Safari / Edge son 2 versiya + iOS Safari |
| Ölçəklilik | Sanity structured content — yeni kateqoriya/dil kod dəyişikliyi tələb etmir |
| HTTPS | Vercel avtomatik SSL — nuranath.com üzərindən |

---

## 6. Dizayn Sistemi

| Element | Qərar |
|---|---|
| Üslub | Minimalist, açıq fon, işlər ön planda |
| Rəng paleti | Neytr baza + bir aksent rəng (müştəri Faza 2 öncəsi seçəcək) |
| Yazı tipi | Müştəri seçiminə qədər sistem şriftləri (system-ui) |
| Logo | Placeholder SVG → SiteSettings → Logo (admin paneldən dəyişdirilir) |
| Referans sayt | Yoxdur — Octotech öz minimalist portfeli standartından başlayır |
| Şəkil nisbəti | Grid-də 4:5 (portret); detay səhifəsində orijinal nisbət |
| Animasiyalar | Yüngül keçidlər (fade, slide) — aggressive effektlər yox |

---

## 7. Kateqoriyalar (MVP Başlanğıc)

| Kateqoriya | Subkateqoriyalar |
|---|---|
| İllüstrasiya (rəqəmsal) | Müştəri admin paneldən özü yaradacaq |
| Ənənəvi Rəsm | Müştəri admin paneldən özü yaradacaq |
| Qrafik Dizayn | Müştəri admin paneldən özü yaradacaq |

> Fotoqrafiya MVP-yə daxil deyil.  
> Yeni kateqoriyalar istənilən vaxt admin paneldən əlavə edilə bilər.

---

## 8. Əlaqə & Sosial Media

| Element | Qərar |
|---|---|
| Əlaqə email | SiteSettings → contactEmail (admin paneldən) |
| Forma göndərimi | Resend API vasitəsilə |
| Sosial platformlar | Instagram, Behance, LinkedIn, Pinterest, X, YouTube, TikTok, Facebook, Custom |
| Görünürlük məntiqi | URL dolu → link render edilir; boş → element gizlənir |

---

## 9. Çatdırılma Planı

| Faza | Məzmun | Status |
|---|---|---|
| Faza 0 | SRS/FSD, stack seçimi, Sanity sxem dizaynı | ✅ Tamamlandı |
| Faza 1 | Repo qur, Next.js + Sanity scaffold, layout skeleton | ⏳ Növbəti |
| Faza 2 | İctimai səhifələr (F01–F09) | — |
| Faza 3 | Admin panel tamamlama (A01–A10) | — |
| Faza 4 | i18n tam inteqrasiya (AZ/EN/RU) | — |
| Faza 5 | SEO, performans optimizasiyası, Vercel production deploy | — |
| Faza 6 | Müştəri təhvil, məzmun doldurma | — |

---

## 10. Qəbul Meyarları (Acceptance Criteria)

- [ ] Sayt `nuranath.com`-da yayımlanmış, HTTPS aktiv.
- [ ] 3 dil (AZ/EN/RU) tam işləyir, URL-based locale.
- [ ] 3 kateqoriya, admin-yaradılan subkateqoriyalar və qalereya səhifələri funksionaldır.
- [ ] Hər proyektin öz case-study səhifəsi var.
- [ ] Əlaqə formu mesajı admin emailinə çatır.
- [ ] Admin paneldən: proyekt, kateqoriya, subkateqoriya, logo, email, sosial media idarə edilir.
- [ ] Sosial media — URL boşdursa element render edilmir.
- [ ] Placeholder logo admin paneldən dəyişdirilə bilir.
- [ ] Tam responsive — mobil/tablet/desktop.
- [ ] Lighthouse Performans ≥ 85, SEO ≥ 90.
- [ ] Bütün şəkillər `alt` atributu ilə.

---

## 11. MVP-dən Kənar (Out of Scope)

- Fotoqrafiya kateqoriyası
- Blog / xəbər bölməsi
- Ödəniş / e-ticarət
- Ziyarətçi qeydiyyatı
- Çoxlu admin istifadəçisi
- Analitika dashboard (GA inteqrasiyası var, UI yox)

---

## 12. Açıq Qalan Məsələlər

| # | Məsələ | Cavablandıran | Vaxt |
|---|---|---|---|
| O01 | Aksent rəng seçimi | Nurana | Faza 2 öncəsi |
| O02 | Yazı tipi seçimi | Nurana | Faza 2 öncəsi |
| O03 | nuranath.com domain qeydiyyatı / DNS | Nurana + Octotech | Faza 5 öncəsi |

---

## 13. Dəyişiklik Jurnalı

| Versiya | Tarix | Qeyd |
|---|---|---|
| 1.0 | 2026-10-13 | Brief əsasında ilkin sənəd |
| 1.1 | 2026-10-13 | Müştəri cavabları: domain, logo, sosial media, email konfiq, subkateqoriyalar sərbəst, fotoqrafiya yox |
| 1.2 | 2026-10-13 | Texniki stack seçildi: Next.js 15 + Sanity v3 + Vercel; çatdırılma planı əlavə edildi |

---

*Bu sənəd layihənin texniki müqaviləsidir. Dəyişikliklər versiya rəqəmi artırılaraq izlənilir.*
