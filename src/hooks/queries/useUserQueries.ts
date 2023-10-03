import { type UseQueryResult, type UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useCookies } from 'react-cookie'

import { getAllUsersApi, getMeApi } from '@/services'
import type { GetAllUsersRequestData, GetAllUsersResponseData, GetMeResponseData } from '@/types'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / useGetMe / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
export function useGetMe(
  options: UseQueryOptions<GetMeResponseData, Error> = {}
): UseQueryResult<GetMeResponseData, Error> {
  const [cookies] = useCookies(['logged_in'])

  return useQuery({
    queryFn: getMeApi,
    queryKey: ['me'],
    retry: 1,
    enabled: !!cookies.logged_in,
    ...options,
  })
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / useGetMe / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / useGetAllUsers / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
interface GetAllUsersOptions extends UseQueryOptions<GetAllUsersResponseData, Error> {
  queries?: GetAllUsersRequestData
}
export function useGetAllUsers(options: GetAllUsersOptions = {}): UseQueryResult<GetAllUsersResponseData, Error> {
  return useQuery({
    queryKey: ['users', options.queries?.search],
    queryFn: () => getAllUsersApi(options.queries),
    ...options,
  })
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / useGetAllUsers / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃
