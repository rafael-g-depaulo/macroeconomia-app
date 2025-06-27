import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiDmBulletinDmBulletin } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchBulletin = (id: string) =>
  strapiGet<ApiDmBulletinDmBulletin['attributes']>(`/bulletins/${id}`)

export const fetchBulletins =
  strapiGet<ApiDmBulletinDmBulletin['attributes'][]>(`/bulletins`)

export const useBulletin = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`bulletins/${id}`, fetchBulletin(id)(strapi))

export const useBulletins = (strapi: AxiosInstance) =>
  makeDataHook(`bulletins`, fetchBulletins(strapi))
