import { Outlet } from 'react-router-dom'

import { Container, Stack } from '@mui/material'

import Logo from '../../assets/Images/logo.png'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const AuthLayout = () => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
      <Stack spacing={5}>
        <Stack sx={{ width: '100%' }} alignItems={'center'}>
          <img style={{ height: 120, width: 120 }} src={Logo} alt="Logo" />
        </Stack>
        <Outlet />
      </Stack>
    </Container>
  )
}
export default AuthLayout
