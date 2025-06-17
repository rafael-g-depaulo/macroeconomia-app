/**
 * social-media router
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::social-media.social-media', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
})
