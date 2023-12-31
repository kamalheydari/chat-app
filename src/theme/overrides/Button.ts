import type { Theme, Components } from '@mui/material/styles'

const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      ':hover': {
        boxShadow: 'none',
      },
    },
    sizeLarge: {
      height: 48,
    },

    // contained
    containedInherit: ({ theme: { customShadows, palette } }) => ({
      color: palette.grey[800],
      boxShadow: customShadows.z8,
      ':hover': {
        backgroundColor: palette.grey[400],
      },
    }),

    containedPrimary: ({ theme: { customShadows } }) => ({
      boxShadow: customShadows.primary,
    }),

    containedSecondary: ({ theme: { customShadows } }) => ({
      boxShadow: customShadows.secondary,
    }),

    containedInfo: ({ theme: { customShadows } }) => ({
      boxShadow: customShadows.info,
    }),

    containedSuccess: ({ theme: { customShadows } }) => ({
      boxShadow: customShadows.success,
    }),

    containedWarning: ({ theme: { customShadows } }) => ({
      boxShadow: customShadows.warning,
    }),

    containedError: ({ theme: { customShadows } }) => ({
      boxShadow: customShadows.error,
    }),

    // outlined
    outlinedInherit: ({ theme: { palette } }) => ({
      border: `1px solid ${palette.grey['500_32' as keyof typeof palette.grey]}`,
      backgroundColor: palette.action.hover,
    }),

    textInherit: ({ theme: { palette } }) => ({
      ':hover': {
        backgroundColor: palette.action.hover,
      },
    }),
  },
}

export default MuiButton
