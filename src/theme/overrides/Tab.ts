import type { Theme, Components } from '@mui/material/styles'

export const MuiTab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root: ({ theme: { typography, shape, palette, spacing } }) => ({
      padding: 0,
      fontWeight: typography.fontWeightMedium,
      borderTopLeftRadius: shape.borderRadius,
      borderTopRightRadius: shape.borderRadius,
      '&.Mui-selected': {
        color: palette.text.primary,
      },
      '&:not(:last-of-type)': {
        marginRight: spacing(5),
      },
      '@media (min-width: 600px)': {
        minWidth: 48,
      },
    }),
    labelIcon: ({ theme: { spacing } }) => ({
      minHeight: 48,
      flexDirection: 'row',
      '& > *:first-of-type': {
        marginBottom: 0,
        marginRight: spacing(1),
      },
    }),
    wrapped: {
      flexDirection: 'row',
      whiteSpace: 'nowrap',
    },
    textColorInherit: ({ theme: { palette } }) => ({
      opacity: 1,
      color: palette.text.secondary,
    }),
  },
}

export const MuiTabs: Components<Theme>['MuiTabs'] = {
  styleOverrides: {
    scrollButtons: {
      width: 48,
      borderRadius: '50%',
    },
  },
}
