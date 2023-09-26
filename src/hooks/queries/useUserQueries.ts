import { getMeApi } from '@/services'
import type { GetMeResponseData } from '@/types'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Types / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
interface Options {
  onGetMeSuccess?: (data: GetMeResponseData) => void
  enabled?: boolean
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Types / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

export function useGetMe(options: Options = {}): UseQueryResult<GetMeResponseData, Error> {
  return useQuery({
    queryFn: getMeApi,
    onSuccess: (data) => {
      options?.onGetMeSuccess?.(data)
    },
    enabled: options?.enabled,
    retry: 1,
  })
}
