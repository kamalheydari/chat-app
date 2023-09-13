import type { Theme } from '@mui/material/styles'

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'article' },
          style: {
            fontWeight: 700,
            color: theme.palette.common.black,
          },
        },
      ],

      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(1),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  }
}
