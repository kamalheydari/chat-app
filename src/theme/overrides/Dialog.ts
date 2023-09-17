import type { Theme, Components } from '@mui/material/styles'

export const MuiDialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    paper: ({ theme: { customShadows, spacing } }) => ({
      boxShadow: customShadows.dialog,
      '@media (max-width: 600px)': {
        margin: spacing(2),
      },
      '@media (max-width: 663.95px)': {
        '&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
          maxWidth: '100%',
        },
      },
    }),
    paperFullScreen: {
      borderRadius: 0,
    },
    paperFullWidth: {
      width: '100%',
    },
  },
}

export const MuiDialogTitle: Components<Theme>['MuiDialogTitle'] = {
  styleOverrides: {
    root: ({ theme: { spacing } }) => ({
      padding: spacing(3, 3, 0),
    }),
  },
}

export const MuiDialogContent: Components<Theme>['MuiDialogContent'] = {
  styleOverrides: {
    root: ({ theme: { spacing } }) => ({
      borderTop: 0,
      borderBottom: 0,
      padding: spacing(3),
    }),
  },
}

export const MuiDialogActions: Components<Theme>['MuiDialogActions'] = {
  styleOverrides: {
    root: ({ theme: { spacing } }) => ({
      '& > :not(:first-of-type)': {
        marginLeft: spacing(1.5),
      },
    }),
  },
}
