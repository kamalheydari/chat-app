import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowBendRightDown } from 'phosphor-react'
import io, { Socket } from 'socket.io-client'
import ScrollableFeed from 'react-scrollable-feed'
import type { DefaultEventsMap } from '@socket.io/component-emitter'

import { Box, CircularProgress, Stack, Typography, useTheme } from '@mui/material'
import { ChatFrom, NoChat } from '@/components'

import { useGetAllMessages, useSendMessage, useAccessChat, useGetMe } from '@/hooks'
import { BASE_API_URL } from '@/services/apiClient'
import { socketEvents } from '@/configs'
import type { IChatForm, IMessage } from '@/types'

let socket: Socket<DefaultEventsMap, DefaultEventsMap>

const Chat = () => {
  const { id } = useParams()
  const theme = useTheme()

  const [messages, setMessages] = useState<IMessage[] | []>([])

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Queries / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const { data: chatData } = useAccessChat({ params: { userId: id as string } })

  const { mutate } = useSendMessage({
    onSuccess: (data) => {
      socket.emit(socketEvents.newMessage, data.data.message)
    },
  })

  const { data: messagesData, isLoading: messagesIsLoading } = useGetAllMessages({
    params: { chatId: chatData?.data._id as string },
    enabled: !!chatData,
  })
  const { data: me } = useGetMe()
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Queries / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Socket.IO / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  useEffect(() => {
    if (messagesData) setMessages(messagesData.data.messages)
  }, [messagesData])

  useEffect(() => {
    socket = io(BASE_API_URL)
    if (me) socket.emit(socketEvents.setup, me?.data.user)

    if (chatData) socket.emit(socketEvents.joinChat, chatData?.data._id)
  }, [me, chatData])

  useEffect(() => {
    socket.on(socketEvents.messageRecieved, (newMessage) => {
      setMessages((prev) => [...prev, newMessage])
    })
    return () => {
      socket.off(socketEvents.messageRecieved)
    }
  }, [])
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Socket.IO / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Handlers / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const createHandler = (formData: IChatForm) => {
    mutate({ content: formData.content, chatId: chatData?.data._id as string })
  }
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Handlers / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Content / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const Messages = () => (
    <ScrollableFeed>
      <Stack
        // sx={{
        //   overflowY: 'scroll',
        // }}
        p={2}
      >
        {messages.map((msg) => (
          <Stack key={msg._id} direction="row" justifyContent={id === msg.sender._id ? 'start' : 'end'} my={1}>
            <Box
              p={1.5}
              // @ts-ignore
              sx={{
                backgroundColor: id === msg.sender._id ? theme.palette.background.neutral : theme.palette.primary.light,
                borderRadius: 1.5,
                color: id === msg.sender._id ? theme.palette.text : '#fff',
                maxWidth: '45%',
              }}
            >
              <Typography variant="body1">{msg.content}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </ScrollableFeed>
  )

  const content = messagesIsLoading ? (
    <Stack height="100%" width="100%" alignItems="center" justifyContent="center">
      <CircularProgress size={150} />
    </Stack>
  ) : messages.length === 0 ? (
    <NoChat>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="h6">Send a message </Typography>
        <ArrowBendRightDown weight="bold" size={20} color={theme.palette.primary.main} />
      </Stack>
    </NoChat>
  ) : (
    <Messages />
  )
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Content / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  return (
    <Stack spacing={3} mx="auto" flexGrow={1} justifyContent="flex-end" height="100vh" maxWidth="950px">
      {content}
      <ChatFrom createHandler={createHandler} />
    </Stack>
  )
}
export default Chat
