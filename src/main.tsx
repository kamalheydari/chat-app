import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Toaster } from 'react-hot-toast'

import App from './App.tsx'

import { AuthProvider, SettingProvider } from '@/contexts'
import { ThemeProvider } from '@/theme'
import { queryClient } from '@/configs'
import AuthMiddleware from './middlewares/AuthMiddleware.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SettingProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <BrowserRouter>
              <AuthMiddleware>
                <App />
              </AuthMiddleware>
              <Toaster position="bottom-right" />
              <ReactQueryDevtools />
            </BrowserRouter>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SettingProvider>
  </React.StrictMode>
)
