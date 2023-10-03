import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { ControlledTextField, PasswordInput } from '@/components'

import { registerSchema } from '@/utils'
import { useRegister } from '@/hooks'
import { routePaths } from '@/configs'
import type { RegisterFormData } from '@/types'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const RegisterForm = () => {
  const navigate = useNavigate()

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Form Hook / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const defaultValues: RegisterFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  const { control, handleSubmit, reset } = useForm<RegisterFormData>({
    defaultValues,
    // @ts-ignore
    resolver: yupResolver(registerSchema),
  })

  const onSubmit = (formData: RegisterFormData) => {
    mutate(formData)
  }
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Form Hook / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Query / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const { mutate, isLoading } = useRegister({
    onSuccess: (data) => {
      toast.success(data.message)
      reset()
      navigate('/' + routePaths.dashboard.root, { replace: true })
    },
  })
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Query / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} mb={4}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <ControlledTextField control={control} name="firstName" label="First name" />
          <ControlledTextField control={control} name="lastName" label="Last name" />
        </Stack>

        <ControlledTextField control={control} name="email" label="Email address" />

        <PasswordInput control={control} name="password" label="Password" />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="outlined"
          loading={isLoading}
          sx={{
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          Create Account
        </LoadingButton>
      </Stack>
    </form>
  )
}

export default RegisterForm
