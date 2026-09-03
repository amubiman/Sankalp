import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 🟢 हा मॅजिक कोड लोकल कॉम्प्युटरवर '/' वापरेल आणि ऑनलाईन गिटहबवर '/Sankalp/' वापरेल
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Sankalp/' : '/',
})
