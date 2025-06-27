import { AxiosInstance } from 'axios'
import { ApiAboutUsAboutUs } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'
import { strapiGet } from '../strapiGet'

export const fetchAboutUs = (strapiInstance: AxiosInstance) => () =>
  strapiGet<ApiAboutUsAboutUs['attributes']>('/about-us')(
    strapiInstance,
  )().then(({ Text }) => Text)

export const useAboutUs = (strapi: AxiosInstance) =>
  makeDataHook('/about-us', fetchAboutUs(strapi))
