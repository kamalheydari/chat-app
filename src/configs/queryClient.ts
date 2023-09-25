import { QueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

function queryErrorHandler(error: unknown): void {
  const title = error instanceof Error ? error.message : 'error connecting to server'
  toast.error(title || 'error connecting to server')
}

export const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorHandler,
    staleTime: 60000, // 1 minute
    cacheTime: 300000, // 5 minutes
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  },
  mutations: {
    onError: queryErrorHandler,
  },
}

const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
})

export default queryClient
