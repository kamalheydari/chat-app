import type { Theme, Components } from '@mui/material/styles'

const MuiPaper: Components<Theme>['MuiPaper'] = {
  defaultProps: {
    elevation: 0,
  },

  styleOverrides: {
    root: {
      backgroundImage: 'none',
    },

    outlined: ({ theme: { palette } }) => ({
      borderColor: palette.grey['500_12' as keyof typeof palette.grey],
    }),
  },
}

export default MuiPaper
