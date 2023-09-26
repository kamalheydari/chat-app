import { apiClient } from '@/services'

import type {
  LoginRequestData,
  LoginResponseData,
  LogoutResponseData,
  RegisterRequestData,
  RegisterResponseData,
} from '@/types'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

export const loginApi = async (data: LoginRequestData) => {
  try {
    const response = await apiClient.post<LoginResponseData>('/auth/login', data)
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Login failed')
  }
}

export const registerApi = async (data: RegisterRequestData) => {
  try {
    const response = await apiClient.post<RegisterResponseData>('/auth/register', data)
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Registration failed')
  }
}

export const logoutApi = async () => {
  try {
    const response = await apiClient.get<LogoutResponseData>('/auth/logout')
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Logout failed')
  }
}
