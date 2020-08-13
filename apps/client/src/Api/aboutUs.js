import { strapi } from "Api"
import useSWR from "swr"

export const fetchAboutUs = () => strapi
  .get("/about-us")
  .then(({ data }) => data)
  .then(({ Text }) => Text)

export const useAboutUs = () => {
  const { data, error } = useSWR('/about-us', fetchAboutUs)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}