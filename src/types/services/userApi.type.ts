import { IUser } from '@/types'

export interface GetMeResponseData {
  status: string
  data: {
    user: IUser
  }
}

export interface GetAllUsersRequestData {
  search?: string
}

export interface GetAllUsersResponseData {
  status: string
  data: { users: IUser[] }
}
