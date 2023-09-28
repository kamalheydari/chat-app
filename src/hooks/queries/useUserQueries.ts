import { type UseQueryResult, type UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useCookies } from 'react-cookie'

import { getMeApi } from '@/services'
import type { GetMeResponseData } from '@/types'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

export function useGetMe(
  options: UseQueryOptions<GetMeResponseData, Error> = {}
): UseQueryResult<GetMeResponseData, Error> {
  const [cookies] = useCookies(['logged_in'])

  return useQuery({
    queryFn: getMeApi,
    retry: 1,
    enabled: !!cookies.logged_in,
    ...options,
  })
}
