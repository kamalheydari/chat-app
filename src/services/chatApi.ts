import type { AccessChatRequestData, AccessChatResponseData, AllChatsResponseData } from '@/types'
import { apiClient } from '@/services'

export const accessChatApi = async (data: AccessChatRequestData) => {
  try {
    const response = await apiClient.get<AccessChatResponseData>(`/chats/${data.userId}`)
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Request failed')
  }
}

export const allChatsApi = async () => {
  try {
    const response = await apiClient.get<AllChatsResponseData>('/chats/all')
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Request failed')
  }
}
