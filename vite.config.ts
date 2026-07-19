import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Big-things-website/',  // ← add this line
  plugins: [react()],
})
