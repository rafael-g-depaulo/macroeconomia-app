import React from 'react'
import styled from 'styled-components'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

import { useAllBooks } from 'Api/books'

import { tableBorderGreen } from 'Themes/default'
import useUrl from 'Hooks/useUrl'

import Box from 'Components/Box'
import Link from 'Components/CleanLink'
import Table from 'Components/Table'
import Loading from 'Components/Loading'
import LazyPage from 'Components/LazyPage'


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

  const formattedData = data
    ?.sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date))
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
    <LazyPage isLoading={isLoading || error} fallback={<Box><Loading /></Box>}>
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
            </MuiTableRow>
          }
        />
      </Box>
    </LazyPage>
  )
}

export default List
