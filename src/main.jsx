import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'; 

/* main.jsx sólo se encarga de montar App.jsx en el DOM */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)


