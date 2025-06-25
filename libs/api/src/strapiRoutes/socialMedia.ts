import { AxiosInstance } from 'axios'
import {
  ApiManagingEditorManagingEditor,
  ApiSocialMediaSocialMedia,
} from '@strapi/types'
import { makeDataHook } from '../makeDataHook'
import { strapiGet } from '../strapiGet'

export const fetchSocialMedia =
  strapiGet<ApiSocialMediaSocialMedia>('/social-media')

export const useFacebook = (strapi: AxiosInstance) =>
  makeDataHook('/social-media/facebook', () =>
    fetchSocialMedia(strapi)().then((data) => data.attributes.facebook_link),
  )

export const useInstagram = (strapi: AxiosInstance) =>
  makeDataHook('/social-media/instagram', () =>
    fetchSocialMedia(strapi)().then((data) => data.attributes.instagram_link),
  )
