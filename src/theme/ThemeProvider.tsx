import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  type ThemeOptions,
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { ComponentsOverrides, typography, breakpoints, palette, customShadows } from '@/theme'
import { useMemo } from 'react'

//! -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Todo //   Replace this whit theme Mode
  const isLight = false

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      shape: { borderRadius: 8 },
      typography,
      breakpoints,
      direction: 'ltr',
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight]
  )

  // ? Create Theme
  const theme = createTheme(themeOptions)

  // ? Override components
  theme.components = ComponentsOverrides(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
