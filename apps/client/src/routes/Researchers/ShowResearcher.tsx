import { redirect, useParams } from 'react-router-dom'
import { useResearcher } from '@api/strapiRoutes/researcher'

import ResearcherCard from './ResearcherCard'
import LazyPage from '@components/LazyPage'
import { strapi } from '@api'

export const Page = ({ id }: { id: string }) => {
  const { data, isLoading } = useResearcher(strapi, id)

  return (
    <LazyPage isLoading={isLoading}>
      <ResearcherCard data={data} />
    </LazyPage>
  )
}

export const Component = () => {
  const { id } = useParams()
  if (!id) redirect('/')

  return <Page id={id!} />
}

export default Component
