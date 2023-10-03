import type {
  GetAllMessagesRequestData,
  GetAllMessagesResponseData,
  SendMessageRequestData,
  SendMessageResponseData,
} from '@/types'
import { apiClient } from '@/services'

export const sendMessageApi = async (data: SendMessageRequestData) => {
  try {
    const response = await apiClient.post<SendMessageResponseData>('/message', data)
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'send message failed')
  }
}
// /:chatId
export const getAllMessagesApi = async (data: GetAllMessagesRequestData) => {
  try {
    const response = await apiClient.get<GetAllMessagesResponseData>(`/message/${data.chatId}`)
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Request failed')
  }
}
