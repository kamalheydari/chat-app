import { Link as RouterLink } from 'react-router-dom'

import { routePaths } from '@/configs'

import { RegisterForm } from '@/components'
import { Stack, Typography, Link } from '@mui/material'

const Register = () => {
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h4">Getting Start</Typography>
        <Stack direction="row" spacing={1}>
          <Typography variant="body2">Already have an account?</Typography>
          <Link
            component={RouterLink}
            variant="subtitle2"
            to={'/' + routePaths.auth.root + '/' + routePaths.auth.login}
          >
            Sign in
          </Link>
        </Stack>
      </Stack>
      <RegisterForm />
    </>
  )
}

export default Register
