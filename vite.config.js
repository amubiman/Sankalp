import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 🟢 कस्टम डोमेन असल्यामुळे बेस पाथ नेहमी '/' ठेवावा
  base: '/', 
})
