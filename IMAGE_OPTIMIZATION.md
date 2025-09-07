# 🖼️ Image Optimization Guide

## Resim Optimizasyonu Özellikleri

### ✅ **Vite Build Optimizasyonları**

1. **Otomatik Resim Sıkıştırma**
   - 2KB altındaki resimler otomatik olarak inline edilir
   - Resimler `images/` klasörüne organize edilir
   - Hash-based naming ile cache busting

2. **Format Desteği**
   - **AVIF**: En iyi sıkıştırma (modern tarayıcılar)
   - **WebP**: İyi sıkıştırma (geniş tarayıcı desteği)
   - **JPEG/PNG**: Fallback formatlar

3. **Cache Optimizasyonu**
   - 1 yıl cache süresi
   - Proper cache headers

### 🚀 **OptimizedImage Component Özellikleri**

```tsx
<OptimizedImage
  src="/images/crumble_bg.jpg"
  alt="Crumble Cafe İç Mekan"
  loading="eager"           // Hero resimler için
  fetchpriority="high"      // LCP optimizasyonu
  width={800}               // Layout shift önleme
  height={600}
  isHero={true}             // Hemen yükleme
/>
```

### 📊 **Performans İyileştirmeleri**

- **Lazy Loading**: Görünmeyen resimler gecikmeli yüklenir
- **Intersection Observer**: Verimli görünürlük kontrolü
- **Progressive Loading**: Yükleme durumu göstergesi
- **Error Handling**: Hata durumunda fallback

### 🛠️ **Build Komutları**

```bash
# Normal build
npm run build

# Optimized build
npm run build:optimized

# Image optimization
npm run optimize-images
```

### 📈 **Beklenen Performans Artışları**

- **%30-50 daha küçük dosya boyutu** (WebP/AVIF)
- **%40-60 daha hızlı yükleme** (Lazy loading)
- **Daha iyi LCP skoru** (Hero resim optimizasyonu)
- **Daha az bandwidth kullanımı**

### 🎯 **LCP Optimizasyonu**

1. **Preload**: Hero resim önceden yüklenir
2. **fetchpriority="high"**: Yüksek öncelik
3. **loading="eager"**: Hemen yükleme
4. **Proper dimensions**: Layout shift önleme

### 🔧 **Teknik Detaylar**

- **AVIF**: %50 daha küçük dosya boyutu
- **WebP**: %25-35 daha küçük dosya boyutu
- **Progressive JPEG**: Aşamalı yükleme
- **Responsive Images**: Farklı boyutlar için

Bu optimizasyonlar sayesinde resim yükleme süreleri önemli ölçüde azalacak ve kullanıcı deneyimi iyileşecektir.
