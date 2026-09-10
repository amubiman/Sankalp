import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // 👈 नवीन इम्पोर्ट
import './index.css'
import App from './App' // 👈 .jsx एक्सटेंशन काढले (सुरक्षिततेसाठी)
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* 👈 ॲपला रॅप केले */}
      <App />
    </HelmetProvider>
  </StrictMode>,
)
