/**
 * researcher router
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::researcher.researcher', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
})
