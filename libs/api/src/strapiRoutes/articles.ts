import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiArticleArticle } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchArticle = (id: string) =>
  strapiGet<ApiArticleArticle>(`/articles/${id}`)

export const fetchArticles = strapiGet<ApiArticleArticle[]>(`/articles`)

export const useArticle = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`articles/${id}`, fetchArticle(id)(strapi))

export const useArticles = (strapi: AxiosInstance) =>
  makeDataHook(`articles`, fetchArticles(strapi))
