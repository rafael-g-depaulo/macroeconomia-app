import { api } from 'Api'
import useSWR from 'swr'

export const fetchPageViews = () => api
  .get('/api/page-views')
  .then(({ data }) => data)

export const usePageViews = () => {
  const { data, error } = useSWR('/page-views', fetchPageViews)

  return {
    data,
    loading: !error && !data,
    error,
  }
}