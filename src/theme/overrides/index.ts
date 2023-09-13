import { type Theme } from '@mui/material/styles'

import Typography from './Typography'

// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Typography(theme))
}
