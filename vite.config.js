import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🟢 'base' ची लाईन आपण इथून काढून टाकली आहे जेणेकरून लोकल होस्टवर एरर येणार नाही
})
