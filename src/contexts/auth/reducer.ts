import { IUser } from '@/types'
import { AuthStateType } from './Provider'
import { authActions } from './actions'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Types / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
interface AuthActionType {
  type: keyof typeof authActions
  payload: IUser | null
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Types / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

export const AuthReducer = (state: AuthStateType, action: AuthActionType): AuthStateType => {
  switch (action.type) {
    case authActions.LOGIN:
      return { ...state, user: action.payload }

    case authActions.LOGOUT:
      return { ...state, user: null }

    default:
      throw new Error('Unidentified reducer action type')
  }
}
