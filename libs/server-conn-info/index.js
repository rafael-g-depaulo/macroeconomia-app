const defaultEnv = "development"  // process.env.NODE_ENV

export const url = (env = defaultEnv) => `http://${domain(env)}:${port(env)}`

export const domain = (env = defaultEnv) => env === "development"
  ? "localhost"
  : "macroeconomia-app.herokuapp.com"

export const port = (env = defaultEnv) => env === "development"
  ? 5000
  : process.env.PORT ?? 5000

export const strapiUrl = (env = defaultEnv) => env === "development"
  ? "http://localhost:1337"
  : process.env.STRAPI_URL ?? process.env.REACT_APP_STRAPI_URL ?? "http://macroeconomia-strapi.herokuapp.com/"

// default serverUrl for most situations
export const serverUrl = (env = defaultEnv) => env === "development"
  ? "http://localhost:5000"
  : process.env.SERVER_URL ?? process.env.REACT_APP_SERVER_URL ?? "http://macroeconomia-app.herokuapp.com/"


export default serverUrl
