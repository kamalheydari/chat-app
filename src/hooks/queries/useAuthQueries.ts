import {
  useMutation,
  useQuery,
  type UseMutationResult,
  type UseQueryResult,
  type UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query'

import { loginApi, logoutApi, registerApi } from '@/services'

import type {
  LoginRequestData,
  LoginResponseData,
  LogoutResponseData,
  RegisterRequestData,
  RegisterResponseData,
} from '@/types'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

export function useLogin(
  options: UseMutationOptions<LoginResponseData, unknown, LoginRequestData> = {}
): UseMutationResult<LoginResponseData, unknown, LoginRequestData> {
  return useMutation({
    mutationFn: loginApi,
    mutationKey: ['login'],
    ...options,
  })
}

export function useRegister(
  options: UseMutationOptions<RegisterResponseData, unknown, RegisterRequestData> = {}
): UseMutationResult<RegisterResponseData, unknown, RegisterRequestData> {
  return useMutation({
    mutationFn: registerApi,
    mutationKey: ['register'],
    ...options,
  })
}

export function useLogout(
  options: UseQueryOptions<LogoutResponseData, Error> = {}
): UseQueryResult<LogoutResponseData, Error> {
  return useQuery({
    queryFn: logoutApi,
    queryKey: ['logout'],
    ...options,
  })
}
