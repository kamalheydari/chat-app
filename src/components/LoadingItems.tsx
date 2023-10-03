import { Stack, Skeleton } from '@mui/material'
const LoadingItems = () => (
  <Stack spacing={2}>
    {[1, 2, 3, 4, 5].map((item) => (
      <Skeleton key={item} variant="rounded" width="100%" height={60} />
    ))}
  </Stack>
)

export default LoadingItems
