import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiEventEvent } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchEvent = (id: string) =>
  strapiGet<ApiEventEvent>(`/events/${id}`)

export const fetchEvents = strapiGet<ApiEventEvent[]>(`/events`)

export const useEvent = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`events/${id}`, fetchEvent(id)(strapi))

export const useEvents = (strapi: AxiosInstance) =>
  makeDataHook(`events`, fetchEvents(strapi))
