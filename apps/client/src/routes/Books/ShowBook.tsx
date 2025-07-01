import { useBook } from '@api/strapiRoutes/books'

import Box from '@components/Box'
import Title from '@components/Title'
import Markdown from '@components/Markdown'
import Loading from '@components/Loading'
import LazyPage from '@components/LazyPage'
import { strapi } from '@api'
import { redirect, useParams } from 'react-router-dom'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const Page = ({
  id,
}: { id: string }) => {
  const { data, error, isLoading } = useBook(strapi, id)

  const {
    Title,
    Description,
  } = data ?? {}

  return (
    <LazyPage isLoading={isLoading} fallback={<Box maxWidth="900px"><Loading /></Box>}>
      <Box maxWidth="900px">
        <Title>{Title}</Title>
        <Markdown source={error?.toString() ?? Description ?? lorem} />
      </Box>
    </LazyPage>
  )
}

export const Component = () => {
  const { id } = useParams()
  if (!id) redirect('/')

  return <Page id={id!} />
}

export default Component

