import type { Theme, Components } from '@mui/material/styles'

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / helpers / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
type Color = 'info' | 'success' | 'warning' | 'error'

const isLight = (theme: Theme) => theme.palette.mode === 'light'

const standardStyle = (theme: Theme, color: Color) => ({
  color: theme.palette[color][isLight(theme) ? 'darker' : 'lighter'],
  backgroundColor: theme.palette[color][isLight(theme) ? 'lighter' : 'darker'],
  '& .MuiAlert-icon': {
    color: theme.palette[color][isLight(theme) ? 'main' : 'light'],
  },
})

const filledStyle = (theme: Theme, color: Color) => ({
  color: theme.palette[color].contrastText,
})

const outlinedStyle = (theme: Theme, color: Color) => ({
  color: theme.palette[color][isLight(theme) ? 'darker' : 'lighter'],
  border: `1px solid ${theme.palette[color][isLight(theme) ? 'light' : 'dark']}`,
  backgroundColor: theme.palette[color][isLight(theme) ? 'lighter' : 'darker'],
  '& .MuiAlert-Icon': {
    color: theme.palette[color][isLight(theme) ? 'main' : 'light'],
  },
})

// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / helpers / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    message: ({ theme: { spacing } }) => ({
      '& .MuiAlertTitle-root': {
        marginBottom: spacing(0.5),
      },
    }),
    action: ({ theme: { spacing } }) => ({
      '& button:not(:first-of-type)': {
        marginBottom: spacing(0.5),
      },
    }),

    standardInfo: ({ theme }) => standardStyle(theme, 'info'),
    standardSuccess: ({ theme }) => standardStyle(theme, 'success'),
    standardWarning: ({ theme }) => standardStyle(theme, 'warning'),
    standardError: ({ theme }) => standardStyle(theme, 'error'),

    filledInfo: ({ theme }) => filledStyle(theme, 'info'),
    filledSuccess: ({ theme }) => filledStyle(theme, 'success'),
    filledWarning: ({ theme }) => filledStyle(theme, 'warning'),
    filledError: ({ theme }) => filledStyle(theme, 'error'),

    outlinedInfo: ({ theme }) => outlinedStyle(theme, 'info'),
    outlinedSuccess: ({ theme }) => outlinedStyle(theme, 'success'),
    outlinedWarning: ({ theme }) => outlinedStyle(theme, 'warning'),
    outlinedError: ({ theme }) => outlinedStyle(theme, 'error'),
  },
}

export default MuiAlert
