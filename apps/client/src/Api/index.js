import axios from "axios"
import { serverUrl, strapiUrl } from "@macroeconomia/server-conn-info"

// development options
const devOptions = {
  strapiUrl: strapiUrl("development")
}

// production options
const productionOptions = {
  strapiUrl: strapiUrl("production")
}

// chose env specific options
const envSpecificOptions = process.env.NODE_ENV === 'production'
  ? productionOptions : devOptions

// create axios instance
export const api = axios.create({
  ...envSpecificOptions,
  baseURL: serverUrl,
})

export const strapi = axios.create({
  ...envSpecificOptions,
  baseURL: envSpecificOptions.strapiUrl,
})

export default api
