# 🎨 Dizayn Brief — Nurana th / Portfolio

> Mənbə: https://brief.octotech.az/design/edbbd5f43ca64e80
> Saxlanma tarixi: 2026-10-13

---

## 1. MÜŞTƏRİ VƏ LAYİHƏ

| Sahə | Məlumat |
|---|---|
| Müştəri | Nurana th |
| Layihə | Şəxsi Portfolio Saytı |
| Dil | Azərbaycan / İngilis (ikidilli) |

---

## 2. HİSS / TON

**Playful + mehriban, amma xaotik deyil — sakit və nəfəs alan.**

Ziyarətçi sayta girəndə ilk 3 saniyədə "bu dostcanlı və rahatdır" hissini yaşamalıdır. Korporativ ağırlıq yoxdur, xaotik dinamizm də yoxdur — ortası.

---

## 3. RƏNG PALETİ

Pastel tonlar əsas alınır, rənglər dizayner tərəfindən qurulacaq.

| Rəng | Hex | İstifadə |
|---|---|---|
| Warm Cream White | `#FDFBF7` | Arxa fon |
| Soft Terracotta | `#E07A5F` | Accent / CTA düymələri |
| Sage Green | `#81B29A` | Teqlər / badges |
| Soft Almond | `#F4F1DE` | Kart səthi |
| Dark Slate Charcoal | `#2B2D42` | Tipografi / mətni |

---

## 4. TİPOQRAFİYA

**Səliqəli, düz, müasir şriftlər** — "pıçıldamalı, amma aydın olmalı."

- Başlıqlar: Display serif (zərif, incə)
- Gövdə mətni: Clean sans-serif (Inter və ya oxşar)
- Metadata/teqlər: `JetBrains Mono` (texniki detallar üçün)
- Dinamik, "qışqıran" şriftlərdən uzaq

---

## 5. STRUKTUR / REFERANS

**Bəyənilən:** https://arikabooboo.com — geniş portfolio iyerarxiyası, səliqəli layout məntiqi.

**Fərq:** Rənglər daha sakit, şriftlər daha yumşaq, heç bir xaotik dinamizm olmayacaq.

**İlham mənbələri:** Minimalist yapon dizayn jurnalları, Behance-də pastel case-study təqdimatları.

---

## 6. "XEYR" SİYAHISI

- ❌ Animasiya — ehtiyac yoxdur (sıfır intruziv animasiya)
- ❌ Sıx mətn blokları — bol boşluq, hava dolu layout
- ❌ Qaranlıq / tünd fonlar
- ❌ Kəskin, bucaqlı dizayn elementləri
- ❌ Çoxrəngli, göz yoran kombinasiyalar
- ❌ Scroll-jacking skriptlər

✅ Yalnız **mikro-interaksiyalar** qəbul edilir:
- Hover scale: `scale(1.015)`, 250ms
- Fade-in: 300ms
- Düymə klik: `scale(0.98)`

---

## 7. HƏDƏF AUDİTORİYA

1. **Yaradıcı insanlar / dizaynerlər** — ilham alır, estetik qiymətləndirir
2. **Bu sektorda işçi axtaran müştərilər** — etibar qurur, peşəkarlıq görür

---

## 8. LOQO VƏ BREND KİMLİYİ

- ✅ Loqo mövcuddur
- Rənglər açıqdır — pastel paleti dizayner tərəfindən qurulacaq

---

## 9. SƏHİFƏ STRUKTURU

### 9.1 Hero / Ana Səhifə
- **Header:** Logo (sol) + nav linkləri + Dil dəyişdirici EN/AZ (sağ)
- **Hero bloku:** Sol — qısa tanışlıq mətni + CTA düyməsi; Sağ — mərkəzi illüstrasiya
- **Kateqoriya bölməsi:** 3–4 kart (Digital Illustration, Traditional Art, Graphic Design) — hər kartda subkateqoriya say göstəricisi

### 9.2 Kateqoriya & Subkateqoriya Səhifəsi
- Breadcrumb naviqasiya
- Kateqoriya adı + pill-tab bar (subkateqoriyalar)
- 3-sütunlu responsive qalereya (Masonry/Grid), `border-radius: 16px`

### 9.3 Layihə Case Study Səhifəsi
- Geniş project banner
- Metadata zolağı: ad, texnika, tarix, sifariş məqsədi (`JetBrains Mono`)
- Story & Concept mətn bloku
- WIP bölməsi: eskizlər, iterasiya mərhələləri (karusel / yan-yana)
- Full gallery — şaquli ardıcıllıq
- Footer: "Növbəti Layihə" keçid bloku

### 9.4 Haqqımda & Əlaqə Səhifəsi
- Bioqrafiya, sənət fəlsəfəsi, nailiyyətlər
- Sosial media ikon-kartları: Behance, Instagram, LinkedIn, Email
- Əlaqə formu: Ad, Email, Layihə tipi (Dropdown), Mesaj

### 9.5 Auth & Admin CMS Paneli
- Minimalist login ekranı
- Dashboard: layihə əlavə et / sil / redaktə et
- Kateqoriya & subkateqoriya idarəetməsi (dinamik)
- Drag-and-drop ilə WIP mərhələlərini sıralama

---

## 10. TEXNİKİ VƏ UI DETALLAR

### Komponent sistemi
- Düymələr: `border-radius: 10px`, `48px` hündürlük (compact: `36px`)
- Kartlar: `border-radius: 16px`, `box-shadow: 0 4px 20px rgba(0,0,0,0.06)`
- Input sahələri: `border-radius: 8px`, `border: 1.5px solid`
- Navigasiya: Sticky, `backdrop-filter: blur(12px)`, `rgba(253,251,247,0.85)`
- Modal: Mərkəzdə, `border-radius: 24px`, backdrop `rgba(43,45,66,0.4)`
- Toast: Sağ aşağı künc, `border-radius: 12px`, 4 saniyə

### İkon ailəsi
`Lucide Icons` və ya `Phosphor Icons` — Line style, `stroke-width: 1.75px`

### Şəbəkə sistemi
- 12 sütunlu grid, `max-width: 1280px`, `gap: 24px`
- Mobil: 4 sütunlu fluid grid

### Animasiya qaydaları
- Fast: `150ms` | Base: `250ms` | Slow: `350ms`
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Yalnız mikro-interaksiyalar — ağır scroll animasyaları yoxdur

---

## 11. STITCH / AI DİZAYN PROMPT

```
Create a modern, clean, and minimalist personal portfolio website for a visual artist
and illustrator named "Nurana th".

Design Aesthetic & Vibe:
- Soft pastel color palette: Warm Cream White (#FDFBF7) background, Soft Terracotta
  (#E07A5F) accents, Sage Green (#81B29A) tags, Soft Almond (#F4F1DE) surface cards,
  and Dark Slate Charcoal (#2B2D42) for crisp readable typography.
- Spacious, breathing layout with generous whitespace, elegant hierarchy, and zero
  visual clutter.
- Friendly, artistic, yet highly structured and professional feel (inspired by
  arikabooboo.com, but calmer and quieter).

Page Layouts Required:

1. Hero / Homepage:
   - Header with logo on the left, navigation links (Categories, About, Contact)
     and language switcher (EN / AZ) on the right.
   - Hero section featuring a short bio text on the left ("Hi, I'm Nurana...") with
     a CTA button, and a central custom warm illustration on the right.
   - Grid section showcasing main Categories (Digital Illustration, Traditional Art,
     Graphic Design) in soft pastel cards with subtle hover scale effects.

2. Category & Sub-category Layout:
   - Breadcrumb navigation path.
   - Category title with a minimalist pill-tab bar for sub-categories.
   - Clean 3-column responsive image gallery with rounded corners (16px radius).

3. Project Case Study (Detail Page):
   - Hero project banner with title, metadata bar (Techniques, Date, Purpose, Client
     using JetBrains Mono font).
   - Story/Concept paragraph block.
   - "Work in Progress" section with sketches and iteration images.
   - High-resolution vertical gallery stack for final artwork.
   - Bottom navigation to "Next Project".

4. Contact & Admin Interface Preview:
   - Minimal contact form with soft input fields and social icons
     (Behance, Instagram, LinkedIn, Email).
   - Clean CMS dashboard preview: add/edit/delete categories, sub-categories,
     and case studies.

Mobile Responsiveness:
- All layouts adapt to mobile with 4-column fluid grid, accessible mobile menu
  drawer, and clear tap targets.
- No aggressive animations or scroll-jacking; transitions fast (200ms ease-out).
```
