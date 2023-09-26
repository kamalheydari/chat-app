import { GetMeResponseData } from '@/types'
import { apiClient } from '@/services'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

export const getMeApi = async () => {
  try {
    const response = await apiClient.get<GetMeResponseData>('/user/get-me')
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Request failed')
  }
}
