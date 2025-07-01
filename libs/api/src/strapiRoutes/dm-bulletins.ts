import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiDmBulletinDmBulletin } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchBulletin = (id: string) =>
  strapiGet<ApiDmBulletinDmBulletin['attributes']>(`/dm-bulletins/${id}`)

export const fetchBulletins =
  strapiGet<({ id: string } & ApiDmBulletinDmBulletin['attributes'])[]>(
    `/dm-bulletins`,
  )

export const useBulletin = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`dm-bulletins/${id}`, fetchBulletin(id)(strapi))

export const useBulletins = (strapi: AxiosInstance) =>
  makeDataHook(`dm-bulletins`, fetchBulletins(strapi))
