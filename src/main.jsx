import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import I18NProvider from './context/i18nProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18NProvider>
      <App />
    </I18NProvider>
  </React.StrictMode>,
)
