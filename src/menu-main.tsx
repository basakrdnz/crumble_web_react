import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MenuPage from './MenuPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuPage />
  </StrictMode>
);
