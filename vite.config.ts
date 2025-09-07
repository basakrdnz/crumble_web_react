import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Performance optimizations
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
        // Keep original asset structure
        assetFileNames: `assets/[name]-[hash][extname]`,
      },
    },
    // Enable compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Image optimization settings
    assetsInlineLimit: 2048, // 2kb altındaki resimler inline edilir
    chunkSizeWarningLimit: 1000,
  },
  // Enable CSS optimization
  css: {
    devSourcemap: false,
  },
  // Image optimization - include all image formats
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp', '**/*.avif', '**/*.gif', '**/*.svg'],
  // Server configuration for development
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Preview configuration
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
