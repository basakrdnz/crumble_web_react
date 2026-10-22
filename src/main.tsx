import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// QR menü adresi pakette düz metin olarak durmasın diye özetiyle (FNV-1a) karşılaştırılır
const MENU_PATH_HASH = 0xea4856e7;
const fnv1a = (s: string) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x01000193) >>> 0;
  return h;
};
const isMenu = fnv1a(location.pathname.replace(/\/+$/, '')) === MENU_PATH_HASH;

const MenuPage = lazy(() => import('./MenuPage.tsx'));

if (isMenu) {
  document.title = 'Crumble — Menü';
  const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]') ?? document.head.appendChild(document.createElement('meta'));
  robots.name = 'robots';
  robots.content = 'noindex, nofollow, noarchive';
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isMenu ? (
      <Suspense fallback={null}>
        <MenuPage />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>
);
