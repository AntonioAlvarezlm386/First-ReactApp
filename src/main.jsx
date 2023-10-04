import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Esto es parte de router de react */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
