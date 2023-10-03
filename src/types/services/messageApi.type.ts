import { IChat, IMessage } from '@/types'

export interface SendMessageRequestData {
  content: string
  chatId: IChat['_id']
}
export interface SendMessageResponseData {
  data: { message: IMessage }
}

export interface GetAllMessagesRequestData {
  chatId: IChat['_id']
}
export interface GetAllMessagesResponseData {
  data: {
    messages: IMessage[]
  }
}
