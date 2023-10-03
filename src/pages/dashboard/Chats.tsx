import { Outlet, useLocation } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'
import { MyChats, NoChat } from '@/components'

import { routePaths } from '@/configs'

const Chats = () => {
  const location = useLocation()
  return (
    <Stack direction="row" flexGrow={1}>
      <MyChats />
      {location.pathname === '/' + routePaths.dashboard.root + '/' + routePaths.dashboard.chats ? (
        <NoChat>
          <Typography variant="h6">Start a conversation </Typography>
        </NoChat>
      ) : null}
      <Outlet />
    </Stack>
  )
}
export default Chats
