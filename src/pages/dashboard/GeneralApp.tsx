import { Outlet, useLocation, Link as RouterLink } from 'react-router-dom'

import { Typography, Link } from '@mui/material'
import { NoChat } from '@/components'

import { routePaths } from '@/configs'

const GeneralApp = () => {
  const location = useLocation()

  return (
    <>
      <Outlet />
      {location.pathname === '/' + routePaths.dashboard.root ? (
        <NoChat>
          <Typography variant="h6">
            Start a conversation{' '}
            <Link component={RouterLink} to={routePaths.dashboard.chats}>
              Chats
            </Link>
          </Typography>
        </NoChat>
      ) : null}
    </>
  )
}
export default GeneralApp
