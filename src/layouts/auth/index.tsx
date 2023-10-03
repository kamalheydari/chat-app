import { Outlet } from 'react-router-dom'

import { Container, Stack } from '@mui/material'
import { Logo } from '@/components'

// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const AuthLayout = () => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
      <Stack spacing={5}>
        <Stack sx={{ width: '100%' }} alignItems={'center'}>
          <Logo />
        </Stack>
        <Outlet />
      </Stack>
    </Container>
  )
}
export default AuthLayout
