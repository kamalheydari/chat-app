import type { Theme, Components } from '@mui/material/styles'

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ Add article variant ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
declare module '@mui/material/styles' {
  interface TypographyVariants {
    article: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    article?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    article: true
  }
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ Add article variant ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

const MuiTypography: Components<Theme>['MuiTypography'] = {
  variants: [
    {
      props: { variant: 'article' },
      style: { fontWeight: 700 },
    },
  ],
  styleOverrides: {
    paragraph: ({ theme }) => {
      return {
        marginBottom: theme.spacing(2),
      }
    },
    gutterBottom: ({ theme }) => {
      return {
        marginBottom: theme.spacing(1),
      }
    },
  },
}

export default MuiTypography
