import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Base relativa para que funcione en GitHub Pages
  plugins: [react()]
})
