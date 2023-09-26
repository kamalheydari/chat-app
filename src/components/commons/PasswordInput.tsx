import { useState } from 'react'

import { Eye, EyeSlash } from 'phosphor-react'

import { IconButton, InputAdornment } from '@mui/material'

import ControlledTextField, { type ControlledTextFieldProps } from './ControlledTextField'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const PasswordInput: React.FC<ControlledTextFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <ControlledTextField
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <Eye /> : <EyeSlash />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
}

export default PasswordInput
