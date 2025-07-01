import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiVideoVideo } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchVideo = (id: string) =>
  strapiGet<({ id: string } & ApiVideoVideo["attributes"])>(`/videos/${id}`)

export const fetchVideos = strapiGet<({ id: string } & ApiVideoVideo["attributes"])[]>(`/videos`)

export const useVideo = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`Videos/${id}`, fetchVideo(id)(strapi))

export const useVideos = (strapi: AxiosInstance) =>
  makeDataHook(`Videos`, fetchVideos(strapi))
