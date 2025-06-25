import { createStrapi } from './strapi'

export * from './connectionConfig'
export * from './strapi'

export * from './strapiRoutes/articles'
export * from './strapiRoutes/books'
export * from './strapiRoutes/dm-bulletins'
export * from './strapiRoutes/events'
export * from './strapiRoutes/managingEditor'
export * from './strapiRoutes/papers'
export * from './strapiRoutes/researcher'
export * from './strapiRoutes/video'
export * from './strapiRoutes/viewCounter'

// TODO: configure
export const strapi = createStrapi('development')
