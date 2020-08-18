import { strapi } from "Api"
import useSWR from "swr"

export const fetchBook = id => strapi
  .get(`/books/${id}`)
  .then(({ data }) => data)
  

export const useBook = id => {
  const { data, error } = useSWR(`/books/${id}`, () => fetchBook(id))

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

export const fetchAllBooks = () => strapi
  .get(`/books`)
  .then(({ data }) => data)
  

export const useAllBooks = () => {
  const { data, error } = useSWR(`/books`, () => fetchAllBooks())

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}