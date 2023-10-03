import { Link } from 'react-router-dom'
import { Box, useTheme } from '@mui/material'

import { routePaths } from '@/configs'

import LogoPng from '../assets/Images/logo.png'

const Logo = () => {
  const theme = useTheme()
  return (
    <Box
      component={Link}
      to={'/' + routePaths.dashboard.root}
      sx={{
        backgroundColor:
          theme.palette.mode === 'light' ? theme.palette.secondary.lighter : theme.palette.background.neutral,
        borderRadius: 1.5,
        width: 64,
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto 48px',
      }}
    >
      <img src={LogoPng} alt="Chat App Logo" />
    </Box>
  )
}
export default Logo
