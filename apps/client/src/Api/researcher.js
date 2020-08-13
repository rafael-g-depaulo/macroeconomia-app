import { strapi } from "Api"
import useSWR from "swr"


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