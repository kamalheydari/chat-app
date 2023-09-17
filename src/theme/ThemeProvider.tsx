import { useMemo } from 'react'

import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  type ThemeOptions,
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { useSettings } from '@/hooks'

import { typography, breakpoints, palette, customShadows, components } from '@/theme'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { themeMode } = useSettings()

  const isLight = themeMode === 'light'

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      shape: { borderRadius: 8 },
      typography,
      breakpoints,
      direction: 'ltr',
      customShadows: isLight ? customShadows.light : customShadows.dark,
      components,
    }),
    [isLight]
  )

  //  Create Theme
  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
