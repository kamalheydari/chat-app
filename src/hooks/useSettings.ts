import { SettingsContext } from '@/contexts'
import { useContext } from 'react'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const useSettings = () => useContext(SettingsContext)

export default useSettings
