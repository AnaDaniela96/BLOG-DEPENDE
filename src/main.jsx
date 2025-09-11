import { HelmetProvider } from "react-helmet-async";
//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'; 

createRoot(document.getElementById('root')).render(

  <HelmetProvider>
    <App />
  </HelmetProvider>
)

{/* <StrictMode>
    <App/>
  </StrictMode> */}
