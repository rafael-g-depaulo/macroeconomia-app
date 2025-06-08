import { useLocation } from 'react-router-dom'

export const useUrl = () => {
  const { pathname } = useLocation()
  return pathname.replace(/\/$/, '')
}
