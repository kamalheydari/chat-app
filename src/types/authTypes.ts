import { IUser } from '@/types'

export interface LoginRequestData {
  email: IUser['email']
  password: IUser['password']
}
export interface LoginResponseData {
  status: string
  message: string
  data: {
    user: IUser
  }
}

export interface RegisterRequestData {
  firstName: IUser['firstName']
  lastName: IUser['lastName']
  email: IUser['email']
  password: IUser['password']
}
export interface RegisterResponseData {
  status: string
  message: string
  data: {
    user: IUser
  }
}

export interface LogoutResponseData {
  status: string
  message: string
}

export type RegisterFormData = RegisterRequestData
export type LoginFormData = LoginRequestData
