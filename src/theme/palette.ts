import { alpha } from '@mui/material/styles'

import type { PaletteColor, TypeAction } from '@mui/material'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

type PaletteMode = 'light' | 'dark'

const lightMode: PaletteMode = 'light'
const darkMode: PaletteMode = 'dark'

const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
}

const primary: PaletteColor = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#0162C4',
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#fff',
}
const secondary: PaletteColor = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
}
const info: PaletteColor = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
}
const success: PaletteColor = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: grey[800],
}
const warning: PaletteColor = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: grey[800],
}
const error: PaletteColor = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
}

const common = {
  common: { black: '#000', white: '#fff' },
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  divider: grey[500_24],
}

const action: Partial<TypeAction> = {
  hover: grey[500_8],
  selected: grey[500_16],
  disabled: grey[500_80],
  disabledBackground: grey[500_24],
  focus: grey[500_24],
  hoverOpacity: 0.08,
}

const palette = {
  light: {
    ...common,
    mode: lightMode,
    text: { primary: grey[800], secondary: grey[600], disabled: grey[500] },
    background: { paper: '#fff', default: '#fff', neutral: grey[200] },
    action: { active: grey[600], ...action },
  },
  dark: {
    ...common,
    mode: darkMode,
    text: { primary: '#fff', secondary: grey[500], disabled: grey[600] },
    background: { paper: grey[800], default: grey[900], neutral: grey[500_16] },
    action: { active: grey[500], ...action },
  },
}

export default palette
