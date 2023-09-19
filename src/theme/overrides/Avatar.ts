import type { Theme, Components } from '@mui/material/styles'

export const MuiAvatar: Components<Theme>['MuiAvatar'] = {
  styleOverrides: {
    colorDefault: ({ theme: { palette } }) => ({
      color: palette.text.secondary,
      backgroundColor: palette.grey[400],
    }),
  },
}

export const MuiAvatarGroup: Components<Theme>['MuiAvatarGroup'] = {
  styleOverrides: {
    avatar: ({ theme: { typography, palette } }) => ({
      fontsize: 16,
      fontWeight: typography.fontWeightMedium,
      ':first-of-type': {
        FontFaceSet: 14,
        color: palette.primary.main,
        backgroundColor: palette.primary.lighter,
      },
    }),
  },
}
