import type { Theme, Components } from '@mui/material/styles'

const MuiBadge: Components<Theme>['MuiBadge'] = {
  styleOverrides: {
    dot: {
      width: 10,
      height: 10,
      borderRadius: '50%',
    },
  },
}

export default MuiBadge
