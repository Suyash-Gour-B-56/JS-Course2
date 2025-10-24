// vite.config.js
// Author: Suyash Gour | Date: 25 October 2025
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/JS-Course2/' // Required for GitHub Pages deployment
});
