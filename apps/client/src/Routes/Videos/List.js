import React from 'react'
import styled from 'styled-components'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

import { useAllVideos } from 'Api/video'
import { tableBorderGreen } from 'Themes/default'

import LazyPage from 'Components/LazyPage'
import Loading from 'Components/Loading'
import Table from 'Components/Table'
import ExternalLink from 'Components/Link'
import Box from 'Components/Box'

const TableCell = styled(MuiTableCell)` 
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`

const VideosTable = ({
  data = [],
}) => (
  
  <Table
    columns={["Title", "Release Date"]}
    data={data}
    RowComponent={({ row }) => 
      <MuiTableRow key={row.id}>
        {row?.values?.map((value, i) => {
          return i === 0 ?
          <TableCell
            key={i}
            align="inherit"
            children={<ExternalLink download={row.download} href={row.link}>{value}</ExternalLink>}
          />
          :
          <TableCell
            key={i}
            align="right"
            children={value}
          />
        }
        )}
      </MuiTableRow>
    }
  />
)

export const List = ({
  ...props
}) => {
  const { data, isLoading, error } = useAllVideos()

  const formattedData = data
    ?.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
    ?.map(({ id, title, youtube_link, file = [], created_at }) => {
      
      const { groups } = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec(created_at) ?? {}
      const date = groups ? `${groups.day}/${groups.month}/${groups.year}` : ""

      const fileMedia = file[0]?.url

      const hasYoutubeLink = !!youtube_link

      return ({
        id,
        link: hasYoutubeLink ? youtube_link : fileMedia ?? "#",
        download: !hasYoutubeLink,
        // download: !hasYoutubeLink && file[0]?.name,
        values: [
          title,
          date,
        ]
      })
    })
  
  return (
    <LazyPage isLoading={isLoading || error} fallback={<Box><Loading /></Box>}>
      <Box>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <VideosTable data={formattedData}/>
      </Box>
    </LazyPage>
  )
}

export default List
