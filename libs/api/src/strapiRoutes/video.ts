import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiVideoVideo } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchVideo = (id: string) =>
  strapiGet<ApiVideoVideo>(`/videos/${id}`)

export const fetchVideos = strapiGet<ApiVideoVideo[]>(`/videos`)

export const useVideo = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`Videos/${id}`, fetchVideo(id)(strapi))

export const useVideos = (strapi: AxiosInstance) =>
  makeDataHook(`Videos`, fetchVideos(strapi))
