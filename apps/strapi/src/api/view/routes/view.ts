/**
 * view router
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::view.view', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
    update: { auth: false },
  },
})
