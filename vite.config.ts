import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Multi-page: the marketing homepage (index.html) plus the Spine explorer (spine.html, served at /spine).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        spine: 'spine.html',
      },
    },
  },
})
