import { createContext, useEffect, useReducer } from 'react'

import { settingsReducer } from './reducer'
import { settingActions } from './actions'
import { settingsLocalStorageName } from '@/configs'

// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Types / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
export interface SettingsStateType {
  themeMode: 'dark' | 'light'
}

export interface SettingsActionsType {
  onToggleMode: () => void
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Types / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Initial Values / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
const initialStateSettings: SettingsStateType = JSON.parse(localStorage.getItem(settingsLocalStorageName)!) || {
  themeMode: 'light',
}

const initialActionSettings: SettingsActionsType = {
  onToggleMode: () => {},
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Initial Values / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

export const SettingsContext = createContext<SettingsStateType & SettingsActionsType>({
  ...initialStateSettings,
  ...initialActionSettings,
})

export const SettingProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialStateSettings)

  useEffect(() => {
    localStorage.setItem(settingsLocalStorageName, JSON.stringify(state))
  }, [state])

  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Handlers / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const onToggleMode = () => {
    dispatch({ type: settingActions.TOGGLE_MODE })
  }
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Handlers / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  const contextValue = {
    ...state,
    onToggleMode,
  }

  return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>
}
