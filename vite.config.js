import { defineConfig } from 'vite'
import react from '@vitejs/react-vite' // किंवा तुमचा जो फ्रेमवर्क असेल तो

export default defineConfig({
  plugins: [react()],
  // जर आपण प्रोडक्शन (GitHub) वर असू तर '/Sankalp/' वापरेल, नाहीतर लोकलसाठी '/' वापरेल
  base: process.env.NODE_ENV === 'production' ? '/Sankalp/' : '/',
})
