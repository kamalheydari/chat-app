import { AuthContext } from '@/contexts'
import { useContext } from 'react'
// -_-_-_-_-_-_-_-___/ imports /___-_-_-_-_-_-_-_-

const useAuth = () => useContext(AuthContext)

export default useAuth
