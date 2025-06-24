// import { useEffect } from 'react'
// import { createStrapi } from '@api'
import { useArticle, useManagingEditor, usePageViews } from '@api'
import { strapi } from '../../api'

// const strapi = createStrapi('development')
export const Component = () => {
  // const { data } = useManagingEditor(strapi)
  // useEffect(() => {
  //   console.log('test')
  //   strapi
  //     .get('/managing-editor')
  //     .then(({ data, status }) => console.log(data, status))
  // })
  // const { data } = useArticle(strapi, 'q51m30sufh1spld35nntuyd2')
  const { data } = usePageViews(strapi)
  console.log('DATA???', data)
  return <div>home is here</div>
}
export default Component
