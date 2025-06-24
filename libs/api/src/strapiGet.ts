import { AxiosInstance, AxiosResponse } from 'axios'
import {} from '@strapi/strapi'

export const strapiGet =
  <T>(key: string) =>
  (strapiInstance: AxiosInstance) =>
  () =>
    strapiInstance.get<AxiosResponse<T>>(key).then(({ data }) => data.data)
