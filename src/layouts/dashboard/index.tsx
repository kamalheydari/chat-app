import { useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { SignOut } from 'phosphor-react'

import { Avatar, Box, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Switch, useTheme } from '@mui/material'
import { LoadingScreen } from '@/components'

import { useGetMe, useSettings } from '@/hooks'
import { queryClient, routePaths } from '@/configs'
import { logoutApi } from '@/services'
import Logo from '../../assets/Images/logo.png'

// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const DashboardLayout = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { onToggleMode } = useSettings()

  const { data, isFetching } = useGetMe()

  const logout = async () => {
    const result = await queryClient.fetchQuery(['logout'], {
      queryFn: logoutApi,
    })
    if (result.status === 'success') {
      toast.success(result.message) // Display success toast
      navigate('/' + routePaths.auth.root + '/' + routePaths.auth.login) // Redirect to login page
    }
  }

  // Conditional rendering based on data loading and user data availability
  if (isFetching) {
    return <LoadingScreen />
  }
  if (!isFetching && !data) {
    return <Navigate to={'/' + routePaths.auth.root + '/' + routePaths.auth.login} />
  }
  // Render the dashboard layout with user data
  else
    return (
      <Stack direction="row">
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            height: '100vh',
            width: 129,
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
            padding: '25px 0 54px',
          }}
        >
          <Stack direction="column" alignItems="center" justifyContent="space-between" height="100%">
            <Box>
              {/* Logo */}
              <Box
                sx={{
                  backgroundColor: theme.palette.secondary.light,
                  borderRadius: 1.5,
                  width: 64,
                  height: 64,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto 48px',
                }}
              >
                <img src={Logo} alt="Chat App Logo" />
              </Box>
            </Box>

            <Stack spacing="52px" alignItems="center">
              <Switch onChange={onToggleMode} />
              <Avatar
                sx={{
                  backgroundColor: theme.palette.grey['300'],
                }}
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                {data?.data.user.firstName.substring(0, 1).toUpperCase()}
              </Avatar>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <SignOut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </Menu>
            </Stack>
          </Stack>
        </Box>
        <Outlet />
      </Stack>
    )
}
export default DashboardLayout
