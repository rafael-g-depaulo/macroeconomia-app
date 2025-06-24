import axios from 'axios'
import { strapiUrl } from './connectionConfig'
export const createStrapi = (env: 'production' | 'development') =>
  axios.create({
    baseURL: strapiUrl(env),
  })
