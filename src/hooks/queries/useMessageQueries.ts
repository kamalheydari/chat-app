import { getAllMessagesApi, sendMessageApi } from '@/services'
import type {
  GetAllMessagesRequestData,
  GetAllMessagesResponseData,
  SendMessageRequestData,
  SendMessageResponseData,
} from '@/types'
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  type UseMutationOptions,
  type UseMutationResult,
  UseQueryResult,
} from '@tanstack/react-query'

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / useSendMessage / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
export function useSendMessage(
  options: UseMutationOptions<SendMessageResponseData, unknown, SendMessageRequestData> = {}
): UseMutationResult<SendMessageResponseData, unknown, SendMessageRequestData> {
  return useMutation({
    mutationFn: sendMessageApi,
    mutationKey: ['message'],
    ...options,
  })
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / useSendMessage / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / useGetAllMessages / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
interface GetAllMessagesOptions extends UseQueryOptions<GetAllMessagesResponseData, Error> {
  params: GetAllMessagesRequestData
}
export function useGetAllMessages(options: GetAllMessagesOptions): UseQueryResult<GetAllMessagesResponseData, Error> {
  return useQuery({
    queryFn: () => getAllMessagesApi({ chatId: options.params.chatId }),
    queryKey: ['messages', options.params.chatId],
    ...options,
  })
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / useGetAllMessages / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃
