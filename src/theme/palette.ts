import { alpha } from '@mui/material/styles'

import type { PaletteColor, TypeAction, Color } from '@mui/material'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

type PaletteMode = 'light' | 'dark'

const lightMode: PaletteMode = 'light'
const darkMode: PaletteMode = 'dark'

const grey: Color = {
  50: '#F9FAFB',
  100: '#F4F6F8',
  200: '#C4CDD5',
  300: '#919EAB',
  400: '#637381',
  500: '#212B36',
  600: '#161C24',
  700: alpha('#919EAB', 0.08),
  800: alpha('#919EAB', 0.12),
  900: alpha('#919EAB', 0.16),
  A100: alpha('#919EAB', 0.24),
  A200: alpha('#919EAB', 0.32),
  A400: alpha('#919EAB', 0.56),
  A700: alpha('#919EAB', 0.8),
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
  // @ts-ignore
  grey,
  divider: grey['A100'],
}

const action: Partial<TypeAction> = {
  hover: grey[700],
  selected: grey[900],
  disabled: grey['A700'],
  disabledBackground: grey['A100'],
  focus: grey['A100'],
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
    background: { paper: grey[800], default: grey[900], neutral: grey[900] },
    action: { active: grey[500], ...action },
  },
}

export default palette
