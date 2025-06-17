/**
 * paper router
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::paper.paper', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
})
