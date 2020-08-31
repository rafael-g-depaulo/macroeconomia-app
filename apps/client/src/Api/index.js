import axios from "axios"
import { serverUrl, strapiUrl } from "@macroeconomia/server-conn-info"

// development options
const devOptions = {
  strapiUrl: strapiUrl("development"),
  serverUrl: serverUrl("development"),
}

// production options
const productionOptions = {
  strapiUrl: strapiUrl("production"),
  serverUrl: serverUrl("production"),
}

// chose env specific options
const envSpecificOptions = process.env.NODE_ENV === 'production'
  ? productionOptions : devOptions

// create axios instance
export const api = axios.create({
  ...envSpecificOptions,
  baseURL: serverUrl,
})

// console.log("productionOptions", productionOptions)
// console.log("devOptions", devOptions)
console.log("strapiUrl", envSpecificOptions.strapiUrl)
console.log("serverUrl", envSpecificOptions.serverUrl)

export const strapi = axios.create({
  ...envSpecificOptions,
  baseURL: envSpecificOptions.strapiUrl,
})

export default api
