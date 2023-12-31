import { alpha } from '@mui/material/styles'
import { palette } from '@/theme'

// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const LIGHT_MODE = palette.light.grey[500]
const DARK_MODE = '#000000'

const createCustomShadow = (color: string) => {
  const transparent = alpha(color, 0.16)
  return {
    z1: `0 1px 2px 0 ${transparent}`,
    z8: `0 8px 16px 0 ${transparent}`,
    z12: `0 12px 24px -4px ${transparent}`,
    z16: `0 16px 32px -4px ${transparent}`,
    z20: `0 20px 40px -4px ${transparent}`,
    z24: `0 24px 48px 0 ${transparent}`,
    //
    primary: `0 8px 16px 0 ${alpha(palette.light.primary.main, 0.24)}`,
    info: `0 8px 16px 0 ${alpha(palette.light.info.main, 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha(palette.light.secondary.main, 0.24)}`,
    success: `0 8px 16px 0 ${alpha(palette.light.success.main, 0.24)}`,
    warning: `0 8px 16px 0 ${alpha(palette.light.warning.main, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(palette.light.error.main, 0.24)}`,
    //
    card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
    dialog: `-40px 40px 80px -8px ${alpha(palette.light.common.black, 0.24)}`,
    dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`,
  }
}

const customShadows = {
  light: createCustomShadow(LIGHT_MODE),
  dark: createCustomShadow(DARK_MODE),
}

export default customShadows
