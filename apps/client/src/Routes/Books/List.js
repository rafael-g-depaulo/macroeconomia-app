import React from 'react'
import styled from 'styled-components'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

import { useAllBooks } from 'Api/books'

import { tableBorderGreen } from 'Themes/default'
import useUrl from 'Hooks/useUrl'

import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'
import Box from 'Components/Box'
import Link from 'Components/CleanLink'
import Table from 'Components/Table'


const TableCell = styled(MuiTableCell)` 
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`
export const List = ({
  ...props
}) => {
  const { data, isLoading, error } = useAllBooks()
  const baseUrl = useUrl()

  if (isLoading || error) return <div>loading...</div>

  const formattedData = data
    ?.map(({ id, title, author, release_date }) => {
      const { groups } = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec(release_date)
      const date = `${groups.day}/${groups.month}/${groups.year}`
      return ({
        id,
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
                children={<Link to={`${baseUrl}/${row.id}`}>{value}</Link>}
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
