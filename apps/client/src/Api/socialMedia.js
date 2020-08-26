import { strapi } from "Api"
import useSWR from "swr"

export const fetchSocialMedia = () => strapi
  .get(`/social-media`)
  .then(({ data }) => data)

export const useFacebook = () => {
  const { data, error } = useSWR(`/social-media`, () => fetchSocialMedia())

  return {
    data: data?.facebook_link,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useInstagram = () => {
  const { data, error } = useSWR(`/social-media`, () => fetchSocialMedia())

  return {
    data: data?.instagram_link,
    isLoading: !error && !data,
    isError: error,
  }
}
