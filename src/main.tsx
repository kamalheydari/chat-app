import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'

import { SettingProvider } from '@/contexts'
import { ThemeProvider } from '@/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SettingProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </SettingProvider>
  </React.StrictMode>
)
