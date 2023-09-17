import type { Theme, Components } from '@mui/material/styles'

const MuiSwitch: Components<Theme>['MuiSwitch'] = {
  styleOverrides: {
    thumb: ({ theme: { customShadows } }) => ({
      boxShadow: customShadows.z1,
    }),
    track: ({ theme: { palette } }) => ({
      backgroundColor: palette.grey[300],
      opacity: 1,
    }),
    switchBase: ({ theme: { palette } }) => ({
      left: 0,
      right: 'auto',
      '&:not(:.Mui-checked)': {
        color: palette.grey[palette.mode === 'light' ? 50 : 200],
      },
      '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
        color: palette.grey[palette.mode === 'light' ? 200 : 400],
      },
      '&.Mui-disabled+.MuiSwitch-track': {
        opacity: 1,
        backgroundColor: `${palette.action.disabledBackground} !important`,
      },
    }),
  },
}

export default MuiSwitch
