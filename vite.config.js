import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: [
        'favicon.ico',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png',
      ],
      manifest: {
        name: '공식당',
        short_name: '공식당',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#FFB3B3',
        icons: [
          {
            src: 'icons/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'icons/icon-192x192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'icons/icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
          },
          {
            src: 'icons/icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: { _global: {} },
});
