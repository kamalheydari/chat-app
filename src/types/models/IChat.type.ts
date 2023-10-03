import { IUser, IMessage } from '@/types'

export default interface IChat {
  _id: string
  chatName: string
  isGroupChat: boolean
  users: IUser[]
  latestMessage: IMessage
  groupAdmin: IUser
  createdAt: Date
  updatedAt?: Date
}
