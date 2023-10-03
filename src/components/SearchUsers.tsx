import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { MagnifyingGlass } from 'phosphor-react'

import {
  Alert,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { LoadingItems } from '@/components'

import { useGetAllUsers } from '@/hooks'
import { routePaths } from '@/configs'
import type { IUser } from '@/types'

const SearchUsers = () => {
  const theme = useTheme()

  const [isDrawer, setIsDrawer] = useState<null | HTMLElement>(null)
  const [search, setSearch] = useState('')

  const { data, isLoading } = useGetAllUsers({
    queries: { search },
  })

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Content / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const renderUser = (user: IUser) => (
    <Link
      key={user._id}
      component={RouterLink}
      underline="none"
      variant="subtitle2"
      to={routePaths.dashboard.root + '/' + routePaths.dashboard.chat(user._id)}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        mb={2}
        p={1}
        sx={{
          bgcolor: theme.palette.background.neutral,
          borderRadius: 1,
        }}
      >
        <Avatar>{user.firstName.substring(0, 1).toUpperCase()}</Avatar>
        <Typography color={theme.palette.text.primary}>
          {user.firstName} {user.lastName}
        </Typography>
      </Stack>
    </Link>
  )

  const renderNoUsersFound = () => (
    <Alert variant="standard" severity="warning">
      No Users Found
    </Alert>
  )

  const content = isLoading ? (
    <LoadingItems />
  ) : data && data.data.users.length ? (
    data.data.users.map((user) => renderUser(user))
  ) : (
    renderNoUsersFound()
  )
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Content / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  return (
    <>
      <IconButton onClick={(event) => setIsDrawer(event.currentTarget)}>
        <MagnifyingGlass />
      </IconButton>

      <Drawer anchor="left" open={Boolean(isDrawer)} onClose={() => setIsDrawer(null)}>
        <Box
          sx={{
            width: '300px',
            padding: '15px 10px',
          }}
        >
          <Stack mb={3} direction="row" alignItems="center" spacing={2}>
            <TextField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              label="Search Users"
              size="small"
              type="search"
              variant="outlined"
              autoComplete="off"
            />
            <IconButton disabled>
              <MagnifyingGlass />
            </IconButton>
          </Stack>
          <Divider />
          <Box p={1} mt={2}>
            {content}
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default SearchUsers
