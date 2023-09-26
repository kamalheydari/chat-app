import { useMutation, useQuery, type UseMutationResult, type UseQueryResult } from '@tanstack/react-query'

import { loginApi, logoutApi, registerApi } from '@/services'

import toast from 'react-hot-toast'

import type {
  LoginRequestData,
  LoginResponseData,
  LogoutResponseData,
  RegisterRequestData,
  RegisterResponseData,
} from '@/types'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Types / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
interface Options {
  onLoginSuccess?: (data: LoginResponseData) => void
  onRegisterSuccess?: (data: RegisterResponseData) => void
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Types / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

export function useLogin(options: Options = {}): UseMutationResult<LoginResponseData, unknown, LoginRequestData> {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      options?.onLoginSuccess?.(data)
      toast.success(data.message)
    },
  })
}

export function useRegister(
  options: Options = {}
): UseMutationResult<RegisterResponseData, unknown, RegisterRequestData> {
  return useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      options?.onRegisterSuccess?.(data)
      toast.success(data.message)
    },
  })
}

export function useLogout(): UseQueryResult<LogoutResponseData, Error> {
  return useQuery(['logout'], logoutApi, {
    onSuccess: (data) => {
      toast.success(data.message)
    },
  })
}
