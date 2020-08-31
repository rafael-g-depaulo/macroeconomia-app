import express from 'express'
import { getPageViews } from 'Utils/pageCount'

// use dependency injection in module
export default ({ }, config = { mergeParams: true }) => express.Router(config)
// add routes
  .get('/page-views', async (req, res) => {
    res.json(await getPageViews())
  })
