import type { Theme, Components } from '@mui/material/styles'

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    disabled: ({ theme: { palette } }) => ({
      color: palette.text.disabled,
    }),
    input: ({ theme: { palette } }) => ({
      '::placeholder': { opacity: 1, color: palette.text.disabled },
    }),
  },
}

export const MuiInput: Components<Theme>['MuiInput'] = {
  styleOverrides: {
    underline: ({ theme: { palette } }) => ({
      '&:before': {
        borderBottomColor: palette.grey['500_56' as keyof typeof palette.grey],
      },
    }),
  },
}
