import { strapi } from "Api"
import useSWR from "swr"

export const fetchResearcher = id => strapi
  .get(`/researchers/${id}`)
  .then(({ data }) => data)
  
export const useResearcher = id => {
  const { data, error } = useSWR(`/researchers/${id}`, () => fetchResearcher(id))

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export const fetchAllResearchers = () => strapi
  .get("/researchers")
  .then(({ data }) => data)

export const useAllResearchers = () => {
  const { data, error } = useSWR('/researchers', fetchAllResearchers)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
