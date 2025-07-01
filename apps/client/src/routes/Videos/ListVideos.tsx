import React from 'react'
import styled from 'styled-components'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

import { useVideos } from '@api/strapiRoutes/video'
import { tableBorderGreen } from '@styles'

import LazyPage from '@components/LazyPage'
import Loading from '@components/Loading'
import Table from '@components/Table'
import ExternalLink from '@components/Link'
import Box from '@components/Box'
import { strapi } from '@api'

const TableCell = styled(MuiTableCell)`
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`

const VideosTable = ({ data = [] }) => (
  <Table
    columns={['Title', 'Release Date']}
    data={data}
    RowComponent={({ row }) => (
      <MuiTableRow key={row.id}>
        {row?.values?.map((value: any, i: any) => {
          return i === 0 ? (
            <TableCell
              key={i}
              align="inherit"
              children={
                <ExternalLink download={row.download} href={row.link}>
                  {value}
                </ExternalLink>
              }
            />
          ) : (
            <TableCell key={i} align="right" children={value} />
          )
        })}
      </MuiTableRow>
    )}
  />
)

export const Component = () => {
  const { data, isLoading, error } = useVideos(strapi)

  const formattedData = data
    ?.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    ?.map(({ id, Title, youtube_link, file = [], createdAt }) => {
      const { groups } =
        /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec(createdAt) ?? {}
      const date = groups ? `${groups.day}/${groups.month}/${groups.year}` : ''

      const fileMedia = file[0]?.url

      const hasYoutubeLink = !!youtube_link

      return {
        id,
        link: hasYoutubeLink ? youtube_link : (fileMedia ?? '#'),
        download: !hasYoutubeLink,
        // download: !hasYoutubeLink && file[0]?.name,
        values: [Title, date],
      }
    })

  return (
    <LazyPage
      isLoading={isLoading || error}
      fallback={
        <Box>
          <Loading />
        </Box>
      }
    >
      <Box>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <VideosTable data={formattedData as any} />
      </Box>
    </LazyPage>
  )
}

export default Component
