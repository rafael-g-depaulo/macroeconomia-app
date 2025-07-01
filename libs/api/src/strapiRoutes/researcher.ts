import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiResearcherResearcher } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchResearcher = (id: string) =>
  strapiGet<({ id: string } & ApiResearcherResearcher["attributes"])>(`/researchers/${id}`)

export const fetchResearchers =
  strapiGet<({ id: string } & ApiResearcherResearcher["attributes"])[]>(`/researchers`)

export const useResearcher = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`researchers/${id}`, fetchResearcher(id)(strapi))

export const useResearchers = (strapi: AxiosInstance) =>
  makeDataHook(`researchers`, fetchResearchers(strapi))
