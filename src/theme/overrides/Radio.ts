import type { Theme, Components } from '@mui/material/styles'

const MuiRadio: Components<Theme>['MuiRadio'] = {
  styleOverrides: {
    root: ({ theme: { spacing } }) => ({
      padding: spacing(1),
    }),
  },
}

export default MuiRadio
