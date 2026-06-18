import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Bump warning limit a little — 3D libraries (three.js) are large bundles.
    chunkSizeWarningLimit: 1500,
  },
})
