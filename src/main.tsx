import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { SettingProvider } from '@/contexts'
import { ThemeProvider } from '@/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SettingProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SettingProvider>
  </React.StrictMode>
)
