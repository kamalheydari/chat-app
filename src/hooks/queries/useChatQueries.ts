import { accessChatApi, allChatsApi } from '@/services'
import { type UseQueryOptions, type UseQueryResult, useQuery } from '@tanstack/react-query'

import type { AccessChatRequestData, AccessChatResponseData, AllChatsResponseData } from '@/types'
import { queryClient } from '@/configs'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / useAccessChat / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
interface AccessChatOptions extends UseQueryOptions<AccessChatResponseData, Error> {
  params: AccessChatRequestData
}
export function useAccessChat(options: AccessChatOptions): UseQueryResult<AccessChatResponseData, Error> {
  return useQuery({
    queryFn: () => accessChatApi({ userId: options.params.userId }),
    queryKey: ['chat', options.params.userId],
    onSuccess: () => {
      queryClient.invalidateQueries(['chats'])
    },
    ...options,
  })
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / useAccessChat / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / useAllChats / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
export function useAllChats(
  options: UseQueryOptions<AllChatsResponseData, Error> = {}
): UseQueryResult<AllChatsResponseData, Error> {
  return useQuery({
    queryFn: allChatsApi,
    queryKey: ['chats'],
    ...options,
  })
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / useAllChats / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃
