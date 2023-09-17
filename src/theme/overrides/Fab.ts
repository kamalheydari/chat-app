import type { Theme, Components } from '@mui/material/styles'

const MuiFab: Components<Theme>['MuiFab'] = {
  defaultProps: {
    color: 'primary',
  },
  styleOverrides: {
    root: ({ theme: { palette, customShadows } }) => ({
      boxShadow: customShadows.z8,
      ':hover': {
        boxShadow: 'none',
        backgroundColor: palette.grey[200],
      },
    }),

    primary: ({ theme: { customShadows, palette } }) => ({
      boxShadow: customShadows.primary,
      ':hover': {
        backgroundColor: palette.primary.dark,
      },
    }),

    secondary: ({ theme: { customShadows, palette } }) => ({
      boxShadow: customShadows.secondary,
      ':hover': {
        backgroundColor: palette.secondary.dark,
      },
    }),

    extended: ({ theme: { spacing } }) => ({
      '& svg': {
        marginRight: spacing(1),
      },
    }),
  },
}

export default MuiFab
