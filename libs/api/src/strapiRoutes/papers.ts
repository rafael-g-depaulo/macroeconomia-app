import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiPaperPaper } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchPaper = (id: string) =>
  strapiGet<ApiPaperPaper>(`/papers/${id}`)

export const fetchPapers = strapiGet<ApiPaperPaper[]>(`/papers`)

export const usePaper = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`papers/${id}`, fetchPaper(id)(strapi))

export const usePapers = (strapi: AxiosInstance) =>
  makeDataHook(`papers`, fetchPapers(strapi))
