import { NavLink as RouterLink, useParams } from 'react-router-dom'
import { ArrowBendDownRight } from 'phosphor-react'

import { Alert, Avatar, Box, Link, Stack, Typography, useTheme } from '@mui/material'
import { LoadingItems } from '@/components'

import { useAllChats } from '@/hooks'
import { truncate } from '@/utils'
import type { IChat, IUser } from '@/types'

const MyChats = () => {
  const theme = useTheme()
  const { id } = useParams()

  const { data: myChats, isLoading } = useAllChats()

  const getContact = (users: IUser[], me: IUser['_id']) => (me === users[0]._id ? users[1] : users[0])

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Content / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const renderChat = (chat: IChat) => {
    const contact = getContact(chat.users, myChats?.data.userId as string)
    return (
      <Link key={contact._id} component={RouterLink} underline="none" variant="subtitle2" to={contact._id}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          my={1}
          sx={{
            padding: 1,
            borderRadius: 1,
            backgroundColor:
              contact._id === id && theme.palette.mode === 'light'
                ? theme.palette.background.default
                : contact._id === id && theme.palette.mode === 'dark'
                ? theme.palette.background.default
                : theme.palette.background.neutral,
          }}
        >
          <Avatar>{contact.firstName.substring(0, 1).toUpperCase()}</Avatar>
          <Stack justifyContent="space-between">
            <Typography color={theme.palette.text.primary}>
              {truncate(`${contact.firstName} ${contact.lastName}`, 20)}
            </Typography>
            {chat.latestMessage ? (
              <Typography variant="caption">{truncate(chat.latestMessage.content, 25)}</Typography>
            ) : (
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography variant="body2" color={theme.palette.info.main}>
                  Start conversation
                </Typography>
                <ArrowBendDownRight weight="duotone" size={20} color={theme.palette.primary.main} />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Link>
    )
  }

  const renderNoChatsFound = () => (
    <Alert variant="standard" severity="warning">
      No Users Found
    </Alert>
  )

  const content = isLoading ? (
    <LoadingItems />
  ) : myChats && myChats.data.chats.length ? (
    myChats.data.chats.map((chat) => renderChat(chat))
  ) : (
    renderNoChatsFound()
  )
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Content / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  return (
    <Box bgcolor={theme.palette.background.paper} py={4} px={2}>
      <Typography variant="body1">My Chats</Typography>
      <Box py={2} width="240px">{content}</Box>
    </Box>
  )
}

export default MyChats
