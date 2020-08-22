import { strapi } from "Api"
import useSWR from "swr"

export const fetchEvent = id => strapi
  .get(`/events/${id}`)
  .then(({ data }) => data)

export const useEvent = id => {
  const { data, error } = useSWR(`/events/${id}`, () => fetchEvent(id))

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

export const fetchAllEvents = () => strapi
  .get(`/events`)
  .then(({ data }) => data)
  

export const useAllEvents = () => {
  const { data, error } = useSWR(`/events`, () => fetchAllEvents())

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}