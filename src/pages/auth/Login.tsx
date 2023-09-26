import { Link as RouterLink } from 'react-router-dom'

import { routePaths } from '@/configs'

import { LoginForm } from '@/components'
import { Stack, Typography, Link } from '@mui/material'

const Login = () => {
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h4">Login and start chat</Typography>
        <Stack direction="row" spacing={1}>
          <Typography variant="body2">New user?</Typography>
          <Link
            component={RouterLink}
            variant="subtitle2"
            to={'/' + routePaths.auth.root + '/' + routePaths.auth.register}
          >
            Create an account
          </Link>
        </Stack>
      </Stack>
      <LoginForm />
    </>
  )
}

export default Login
