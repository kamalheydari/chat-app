import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { ControlledTextField, PasswordInput } from '@/components'
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'

import { LoginSchema } from '@/utils'

import { useLogin, useAuth } from '@/hooks'

import type { LoginFormData } from '@/types'
import { useNavigate } from 'react-router-dom'
import { routePaths } from '@/configs'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const LoginForm = () => {
  const { login } = useAuth()

  const navigate = useNavigate()

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / From Hook / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const defaultValues: LoginFormData = {
    email: '',
    password: '',
  }

  const { control, handleSubmit, reset } = useForm<LoginFormData>({
    // @ts-ignore
    resolver: yupResolver(LoginSchema),
    defaultValues,
  })

  const onSubmit = (formData: LoginFormData) => {
    mutate(formData)
  }
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / From Hook / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Query / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const { mutate, isLoading } = useLogin({
    onLoginSuccess: (data) => {
      login(data.data.user)
      reset()
      navigate('/' + routePaths.dashboard.app, { replace: true })
    },
  })
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Query / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
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
export default LoginForm
