import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiEventEvent } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchEvent = (id: string) =>
  strapiGet<ApiEventEvent["attributes"]>(`/events/${id}`)

export const fetchEvents = strapiGet<({ id: string } & ApiEventEvent["attributes"])[]>(`/events`)

export const useEvent = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`events/${id}`, fetchEvent(id)(strapi))

export const useEvents = (strapi: AxiosInstance) =>
  makeDataHook(`events`, fetchEvents(strapi))
