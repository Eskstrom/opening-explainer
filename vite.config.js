import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works when hosted at any GitHub Pages
// project path (https://<user>.github.io/<repo>/) without extra config.
export default defineConfig({
  plugins: [react()],
  base: './',
})
