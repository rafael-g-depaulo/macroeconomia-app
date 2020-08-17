import { strapi } from "Api"
import useSWR from "swr"

export const fetchManagingEditor = () => strapi
  .get("/managing-editor")
  .then(({ data }) => data)
  .then(({ Name, Email, Phone }) => ({ name: Name, email: Email, phone: Phone }))

export const useManagingEditor = () => {
  const { data, error } = useSWR('/managing-editor', fetchManagingEditor)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}