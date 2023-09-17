import type { Theme, Components } from '@mui/material/styles'

const MuiSvgIcon: Components<Theme>['MuiSvgIcon'] = {
  styleOverrides: {
    fontSizeSmall: {
      width: 20,
      height: 20,
      fontSize: 'inherit',
    },
    fontSizeLarge: {
      width: 32,
      height: 32,
      fontSize: 'inherit',
    },
  },
}

export default MuiSvgIcon
