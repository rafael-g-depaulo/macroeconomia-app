import { strapi } from "Api"
import useSWR from "swr"

export const fetchPaper = id => strapi
  .get(`/papers/${id}`)
  .then(({ data }) => data)

export const usePaper = id => {
  const { data, error } = useSWR(`/papers/${id}`, () => fetchPaper(id))

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export const fetchAllPapers = () => strapi
  .get("/papers")
  .then(({ data }) => data)

export const useAllPapers = () => {
  const { data, error } = useSWR(`/papers`, fetchAllPapers)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}