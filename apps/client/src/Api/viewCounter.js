import { strapi } from 'Api'
import useSWR from 'swr'

export const fetchPageViews = () => strapi
  .get('/views')
  .then(({ data }) => data.views)
  .then(views => strapi.put("/views", { views: views + 1 }))
  .then(({ data }) => data.views)
  .catch(e => {
    console.error("VIEW ERROR", e)
    return 1402
  })

export const usePageViews = () => {
  const { data, error } = useSWR('/page-views', fetchPageViews)

  return {
    data,
    loading: !error && !data,
    error,
  }
}
