import { type Theme, type Components, alpha } from '@mui/material/styles'

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Handlers / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
const verLow = (theme: Theme) => alpha(theme.palette.grey[600], 0.48)
const varHigh = (theme: Theme) => alpha(theme.palette.grey[600], 1)
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Handlers / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

const MuiBackdrop: Components<Theme>['MuiBackdrop'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      background: [
        `rgb(22,28,36)`,
        `-moz-linear-gradient(75deg, ${verLow(theme)} 0%, ${varHigh(theme)} 100%)`,
        `-webkit-linear-gradient(75deg, ${verLow(theme)} 0%, ${varHigh(theme)} 100%)`,
        `linear-gradient(75deg, ${verLow(theme)} 0%, ${varHigh(theme)} 100%)`,
      ],
      '&.MuiBackdrop-invisible': {
        background: 'transparent',
      },
    }),
  },
}

export default MuiBackdrop
