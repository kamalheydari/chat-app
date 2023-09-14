import { SettingsStateType } from './Provider'
import { settingActions } from './actions'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Types / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
interface SettingsActionType {
  type: keyof typeof settingActions
}
// ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Types / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

export const settingsReducer = (state: SettingsStateType, action: SettingsActionType): SettingsStateType => {
  switch (action.type) {
    case settingActions.TOGGLE_MODE:
      return { ...state, themeMode: state.themeMode === 'light' ? 'dark' : 'light' }

    default:
      throw new Error('Unidentified reducer action type')
  }
}
