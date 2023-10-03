import axios from 'axios'

export const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
