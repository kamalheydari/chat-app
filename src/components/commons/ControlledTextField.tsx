import { Controller, type Control } from 'react-hook-form'
import TextField, { type TextFieldProps } from '@mui/material/TextField'

import type { RegisterFormData } from '@/types'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Types / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
export interface ControlledTextFieldProps extends Omit<TextFieldProps, 'name'> {
  name: keyof RegisterFormData
  control: Control<any>
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Types / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

const ControlledTextField: React.FC<ControlledTextFieldProps> = (props) => {
  const { name, control, helperText, ...rest } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField fullWidth error={!!error} helperText={error ? error?.message : helperText} {...field} {...rest} />
      )}
    />
  )
}

export default ControlledTextField
