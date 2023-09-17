import type { Theme, Components } from '@mui/material/styles'

const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme: { palette } }) => ({
      fontSize: 14,
      fontWeight: 600,
      '&.Mui-selected': {
        backgroundColor: palette.action.selected,
        '&:hover': {
          backgroundColor: palette.action.hover,
        },
      },
    }),
  },
}

export default MuiMenuItem
