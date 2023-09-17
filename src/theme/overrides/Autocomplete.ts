import type { Theme, Components } from '@mui/material/styles'

const MuiAutocomplete: Components<Theme>['MuiAutocomplete'] = {
  styleOverrides: {
    paper: ({ theme: { customShadows } }) => ({
      boxShadow: customShadows.dropdown,
    }),
    listbox: ({ theme: { spacing } }) => ({
      padding: spacing(0, 1),
    }),
    option: ({ theme: { spacing, shape } }) => ({
      padding: spacing(1),
      margin: spacing(1, 0),
      borderRadius: shape.borderRadius,
    }),
  },
}

export default MuiAutocomplete
