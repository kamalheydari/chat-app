import { IUser, IChat } from '@/types'

export default interface IMessage {
  sender: IUser
  content: string
  chat: IChat
  readBy: IUser[]
  _id: string
  createdAt: Date
  updatedAt: Date
}
