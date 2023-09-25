import axios from 'axios'

export const BASE_API_URL = 'http://localhost:3001/'

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
