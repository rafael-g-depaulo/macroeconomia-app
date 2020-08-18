import { strapi } from "Api"
import useSWR from "swr"

export const fetchArticle = id => strapi
  .get(`/articles/${id}`)
  .then(({ data }) => data)

export const useArticle = id => {
  const { data, error } = useSWR(`/articles/${id}`, () => fetchArticle(id))

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export const fetchAllArticles = () => strapi
  .get("/articles")
  .then(({ data }) => data)

export const useAllArticles = () => {
  const { data, error } = useSWR(`/articles`, fetchAllArticles)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}