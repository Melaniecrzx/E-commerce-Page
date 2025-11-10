import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/kumbh-sans/300.css'; // Light
import '@fontsource/kumbh-sans/400.css'; // Regular
import '@fontsource/kumbh-sans/500.css'; // Medium
import '@fontsource/kumbh-sans/600.css'; // Semi-Bold
import '@fontsource/kumbh-sans/700.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
