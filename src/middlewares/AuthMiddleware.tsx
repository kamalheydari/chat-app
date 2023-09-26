import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'

import { routePaths } from '@/configs'

import { useAuth, useGetMe } from '@/hooks'

interface Props {
  children: React.ReactNode
}

const AuthMiddleware: React.FC<Props> = ({ children }) => {
  const { user, login } = useAuth()

  const [cookies] = useCookies(['logged_in'])

  const { isLoading, data } = useGetMe({
    enabled: !!cookies.logged_in && !user,
    onGetMeSuccess: (data) => login(data.data.user),
  })

  if (isLoading) {
    return <h1>loading..............</h1>
  }
  if (!isLoading && !data) {
    return <Navigate to={'/' + routePaths.auth.root + '/' + routePaths.auth.login} />
  }
  return <>{children}</>
}

export default AuthMiddleware
