import { createContext, useReducer } from 'react'

import { AuthReducer } from './reducer'
import { authActions } from './actions'
import { queryClient } from '@/configs'
import { IUser } from '@/types'
import { logoutApi } from '@/services'
import toast from 'react-hot-toast'

// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Types / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
export interface AuthStateType {
  user: IUser | null
}

export interface AuthActionsType {
  login: (data: IUser) => void
  logout: () => void
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Types / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Initial Values / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
const initialStateAuth: AuthStateType = { user: null }

const initialActionAuth: AuthActionsType = {
  login: () => {},
  logout: () => {},
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Initial Values / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

export const AuthContext = createContext<AuthStateType & AuthActionsType>({
  ...initialStateAuth,
  ...initialActionAuth,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialStateAuth)

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Handlers / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const login = (data: IUser) => {
    dispatch({ type: authActions.LOGIN, payload: data })
  }
  const logout = async () => {
    dispatch({ type: authActions.LOGOUT, payload: null })
    const result = await queryClient.fetchQuery(['logout'], logoutApi)
    toast.success(result.message)
  }
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Handlers / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  const contextValue = {
    ...state,
    login,
    logout,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
