import React from 'react'
import styled from 'styled-components'

import { tableBorderGreen } from 'Themes/default'

import { useAllPapers } from 'Api/papers'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'
import Box from 'Components/Box'
import Table from 'Components/Table'
import Link from 'Components/Link'

const TableCell = styled(MuiTableCell)` 
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`

export const List = ({
  ...props
}) => {
  const { data, isLoading } = useAllPapers()

  if (isLoading) return <div>loading...</div>

  const formattedData = data
    .map(({ id, title, author, release_date, link }) => {
      const { groups } = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec(release_date)
      const date = `${groups.day}/${groups.month}/${groups.year}`
      return ({
        id,
        link,
        values: [
          title,
          author,
          date,
        ]
      })
    })

  return (
    <Wireframe>
      <Container>
        <Box>
          <Table
            columns={["Title", "Author", "Release Date"]}
            data={formattedData}
            RowComponent={({ row }) => 
            <MuiTableRow key={row.id}>
            {row?.values?.map((value, i) =>
              i === 0 ?
              <TableCell
                key={i}
                align="inherit"
                children={<Link href={row.link}>{value}</Link>}
              />
              :
              <TableCell
                key={i}
                align="right"
                children={value}
              />
            )}
          </MuiTableRow>}
          />
        </Box>
      </Container>
    </Wireframe>
  )
}

export default List