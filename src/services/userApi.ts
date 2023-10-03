import { apiClient } from '@/services'

import type { GetAllUsersRequestData, GetAllUsersResponseData, GetMeResponseData } from '@/types'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

export const getMeApi = async () => {
  try {
    const response = await apiClient.get<GetMeResponseData>('/user/get-me')
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Request failed')
  }
}

export const getAllUsersApi = async (queries: GetAllUsersRequestData = {}) => {
  try {
    const response = await apiClient.get<GetAllUsersResponseData>('/user/get-all-users', { params: queries, })
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Request failed')
  }
}
