import { CircularProgress, Stack } from '@mui/material'

const LoadingScreen = () => {
  return (
    <Stack height="100vh" width="100vw" alignItems="center" justifyContent="center">
      <CircularProgress size={150} />
    </Stack>
  )
}

export default LoadingScreen
