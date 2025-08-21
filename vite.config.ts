
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-typescript/', // именно такое название репозитория
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})