// vite.config.js
// Author: Suyash Gour | Date: 25 October 2025
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Important: set the base path to your repository name
export default defineConfig({
  plugins: [react()],
  base: '/JS-Course2/'
})
