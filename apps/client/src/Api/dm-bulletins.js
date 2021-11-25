import { strapi } from "Api"
import useSWR from "swr"

export const fetchAllBulletins = () => strapi
  .get(`/dm-bulletins`)
  .then(({ data }) => data)
  

export const useAllBulletins = () => {
  const { data, error } = useSWR(`/dm-bulletins`, () => fetchAllBulletins())

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}