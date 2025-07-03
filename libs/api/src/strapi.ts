import axios from 'axios'
import { strapiUrl } from './connectionConfig'
export const createStrapi = (
  env: 'production' | 'development',
  config: { strapiUrl?: string } = {},
) =>
  axios.create({
    baseURL: strapiUrl(env, config.strapiUrl),
  })
