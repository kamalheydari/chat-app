import { IChat, IUser } from '@/types'

export interface AccessChatRequestData {
  userId: IUser['_id']
}
export interface AccessChatResponseData {
  data: IChat
}

export interface AllChatsResponseData {
  data: { chats: IChat[]; userId: IUser['_id'] }
}
