import type { Theme, Components } from '@mui/material/styles'

const MuiTooltip: Components<Theme>['MuiTooltip'] = {
  styleOverrides: {
    tooltip: ({ theme: { palette } }) => ({
      backgroundColor: palette.grey[palette.mode === 'light' ? 800 : 700],
    }),
    arrow: ({ theme: { palette } }) => ({
      color: palette.grey[palette.mode === 'light' ? 800 : 700],
    }),
  },
}

export default MuiTooltip
