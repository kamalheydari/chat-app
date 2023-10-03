import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import { ControlledTextField, PasswordInput } from '@/components'

import { LoginSchema } from '@/utils'
import { useLogin } from '@/hooks'
import { routePaths } from '@/configs'
import type { LoginFormData } from '@/types'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const LoginForm = () => {
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
    onSuccess: (data) => {
      toast.success(data.message)
      reset()
      navigate('/' + routePaths.dashboard.root, { replace: true })
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
          Login to Account
        </LoadingButton>
      </Stack>
    </form>
  )
}
export default LoginForm
