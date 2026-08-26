import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Sankalp/', // तुमच्या GitHub रिपॉजिटरीचे नाव इथे जोडले आहे
})
