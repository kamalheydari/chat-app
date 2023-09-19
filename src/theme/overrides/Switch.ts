import type { Theme, Components } from '@mui/material/styles'

const MuiSwitch: Components<Theme>['MuiSwitch'] = {
  styleOverrides: {
    thumb: ({ theme: { customShadows } }) => ({
      boxShadow: customShadows.z1,
    }),
    track: ({ theme: { palette } }) => ({
      backgroundColor: palette.grey[500],
      opacity: 1,
    }),
    switchBase: ({ theme: { palette } }) => ({
      left: 0,
      right: 'auto',
      '&:not(:.Mui-checked)': {
        color: palette.grey[palette.mode === 'light' ? 100 : 300],
      },
      '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
        color: palette.grey[palette.mode === 'light' ? 400 : 600],
      },
      '&.Mui-disabled+.MuiSwitch-track': {
        opacity: 1,
        backgroundColor: `${palette.action.disabledBackground} !important`,
      },
    }),
  },
}

export default MuiSwitch
