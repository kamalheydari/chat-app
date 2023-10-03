import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Toaster } from 'react-hot-toast'

import App from './App.tsx'

import { SettingProvider } from '@/contexts'
import { ThemeProvider } from '@/theme'
import { queryClient } from '@/configs'
import '@/styles/browser.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SettingProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
            <Toaster position="bottom-right" />
            <ReactQueryDevtools />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </SettingProvider>
  </React.StrictMode>
)
