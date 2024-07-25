//importar vite-plugin-pwa para configurar el service worker
import {VitePWA} from 'vite-plugin-pwa'

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'favicon-16x16.png', 'favicon-32x32.png', 'android-chrome-192x192.png', 'android-chrome-512x512.png'],
      manifest: {
        name: 'CriptoCotizador Vue, Vite y Sass',
        short_name: 'CriptoCotizador',
        description: 'Cotizador de criptomonedas con Vue, Vite y Sass',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '16x16',
            type: 'image/svg',
          },
          
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
