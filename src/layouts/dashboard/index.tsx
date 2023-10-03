import { Navigate, Outlet, Link as RouterLink } from 'react-router-dom'
import { Chat, Sun, MoonStars } from 'phosphor-react'

import { Box, Divider, IconButton, Stack, useTheme } from '@mui/material'
import { LoadingScreen, SearchUsers, Logo, Logout } from '@/components'

import { useGetMe, useSettings } from '@/hooks'
import { routePaths } from '@/configs'

// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-
const DashboardLayout = () => {
  const theme = useTheme()

  const { onToggleMode, themeMode } = useSettings()

  const { data, isFetching } = useGetMe()

  if (isFetching) {
    return <LoadingScreen />
  }
  if (!isFetching && !data) {
    return <Navigate to={'/' + routePaths.auth.root + '/' + routePaths.auth.login} />
  }
  if (data)
    return (
      <Stack direction="row">
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            height: '100vh',
            minWidth: '125px',
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
            padding: '25px 0 54px',
          }}
        >
          <Stack direction="column" alignItems="center" justifyContent="space-between" height="100%">
            <Stack direction="column" alignItems="center" justifyContent="space-between">
              <Logo />

              <Stack spacing={2}>
                <SearchUsers />
                <Divider />
                <IconButton component={RouterLink} to={routePaths.dashboard.root + '/' + routePaths.dashboard.chats}>
                  <Chat />
                </IconButton>
              </Stack>
            </Stack>

            <Stack spacing={5} alignItems="center">
              {/* Toggle Theme */}
              <IconButton onClick={onToggleMode}>
                {themeMode === 'dark' ? (
                  <Sun size={32} color="#FCE570" weight="duotone" />
                ) : (
                  <MoonStars size={32} color="#3AA8C2" weight="duotone" />
                )}
              </IconButton>

              <Logout name={data.data.user.firstName} />
            </Stack>
          </Stack>
        </Box>
        <Outlet />
      </Stack>
    )
}
export default DashboardLayout
