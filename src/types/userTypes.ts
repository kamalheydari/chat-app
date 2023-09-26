import { IUser } from '@/types'

export interface GetMeResponseData {
  status: string
  data: {
    user: IUser
  }
}
