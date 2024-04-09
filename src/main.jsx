import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import './i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
