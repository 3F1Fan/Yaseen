import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Expose the package version to the app as __APP_VERSION__.
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    outDir: 'dist',
    // Bump warning limit a little — 3D libraries (three.js) are large bundles.
    chunkSizeWarningLimit: 1500,
  },
})
