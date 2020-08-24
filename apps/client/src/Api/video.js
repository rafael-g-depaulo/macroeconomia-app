import { strapi } from "Api"
import useSWR from "swr"

export const fetchVideo = id => strapi
  .get(`/video/${id}`)
  .then(({ data }) => data)

export const useVideo = id => {
  const { data, error } = useSWR(`/video/${id}`, () => fetchVideo(id))

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

export const fetchAllVideos = () => strapi
  .get(`/video`)
  .then(({ data }) => data)
  
export const useAllVideos = () => {
  const { data, error } = useSWR(`/video`, () => fetchAllVideos())

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}