import React from 'react'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

declare module '@mui/material/styles' {
  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ Add custom shadow to theme ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  interface Theme {
    customShadows: {
      z1: string
      z8: string
      z12: string
      z16: string
      z20: string
      z24: string
      primary: string
      info: string
      secondary: string
      success: string
      warning: string
      error: string
      card: string
      dialog: string
      dropdown: string
    }
  }

  interface ThemeOptions {
    customShadows: {
      z1: React.CSSProperties['boxShadow']
      z8: React.CSSProperties['boxShadow']
      z12: React.CSSProperties['boxShadow']
      z16: React.CSSProperties['boxShadow']
      z20: React.CSSProperties['boxShadow']
      z24: React.CSSProperties['boxShadow']
      primary: React.CSSProperties['boxShadow']
      info: React.CSSProperties['boxShadow']
      secondary: React.CSSProperties['boxShadow']
      success: React.CSSProperties['boxShadow']
      warning: React.CSSProperties['boxShadow']
      error: React.CSSProperties['boxShadow']
      card: React.CSSProperties['boxShadow']
      dialog: React.CSSProperties['boxShadow']
      dropdown: React.CSSProperties['boxShadow']
    }
  }
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ Add custom shadow to theme ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ Add neutral color to bg colors ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  interface TypeBackground {
    default: string
    paper: string
    neutral: string
  }
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ Add neutral color to bg colors ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ Add darker and lighter to all color palettes ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  interface PaletteColor {
    darker: string
    lighter: string
  }

  interface SimplePaletteColorOptions {
    darker: React.CSSProperties['color']
    lighter: React.CSSProperties['color']
  }
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ Add darker and lighter to all color palettes ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃
}