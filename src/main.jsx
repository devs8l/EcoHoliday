import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PopupProvider } from './contexts/PopupContext' // Import the provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PopupProvider> {/* Wrap your App with the PopupProvider */}
        <App />
      </PopupProvider>
    </BrowserRouter>
  </StrictMode>,
)