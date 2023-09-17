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
      borderColor: palette.grey[800],
    }),
  },
}

export default MuiPaper
