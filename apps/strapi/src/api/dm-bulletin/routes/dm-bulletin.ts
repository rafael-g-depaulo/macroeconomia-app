/**
 * dm-bulletin router
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::dm-bulletin.dm-bulletin', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
})
