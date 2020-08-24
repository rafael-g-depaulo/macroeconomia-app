import { strapi } from "Api"
import useSWR from "swr"

export const fetchVideo = id => strapi
  .get(`/videos/${id}`)
  .then(({ data }) => data)

export const useVideo = id => {
  const { data, error } = useSWR(`/videos/${id}`, () => fetchVideo(id))

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

export const fetchAllVideos = () => strapi
  .get(`/videos`)
  .then(({ data }) => data)
  
export const useAllVideos = () => {
  const { data, error } = useSWR(`/videos`, () => fetchAllVideos())

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}