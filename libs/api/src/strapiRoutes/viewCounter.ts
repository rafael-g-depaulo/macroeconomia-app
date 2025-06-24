import { AxiosInstance } from 'axios'
import useSWR from 'swr'

export const fetchPageViews = (strapi: AxiosInstance) => () =>
  strapi
    .get('/view')
    .then(({ data }) => data.data.views)
    .then((views) => ({ data: { views: views + 1 } }))
    .then((views) => strapi.put('/view', views))
    .then(({ data }) => data.data.views)
    .catch((e) => {
      console.error('VIEW ERROR', e)
      return 1402
    })

export const usePageViews = (strapi: AxiosInstance) => {
  const { data, error } = useSWR('/page-views', fetchPageViews(strapi))

  return {
    data,
    loading: !error && !data,
    error,
  }
}
