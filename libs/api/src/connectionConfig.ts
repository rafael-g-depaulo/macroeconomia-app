export const strapiUrl = (
  env: 'development' | 'production',
  strapiUrl = import.meta.env.VITE_STRAPI_URL,
) =>
  env === 'development' ? (strapiUrl ?? `http://localhost:1337/api`) : strapiUrl
