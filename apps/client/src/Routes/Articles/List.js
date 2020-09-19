import React from 'react'
import styled from 'styled-components'

import { useAllArticles } from 'Api/articles'
import { tableBorderGreen } from 'Themes/default'

import Loading from 'Components/Loading'
import Table from 'Components/Table'
import Link from 'Components/Link'
import Box from 'Components/Box'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'
import LazyPage from 'Components/LazyPage'

const TableCell = styled(MuiTableCell)` 
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`

export const List = ({
  ...props
}) => {
  const { data, isLoading, error } = useAllArticles()

  const formattedData = data
    ?.sort((a, b) => Date.parse(b.Release_Date) - Date.parse(a.Release_Date))
    ?.map(({ id, Title, Author, Release_Date, Link }) => {
      const { groups } = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec(Release_Date) ?? {}
      const date = groups ? `${groups.day}/${groups.month}/${groups.year}` : ""
      return ({
        id,
        link: Link,
        values: [
          Title,
          Author,
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
          RowComponent={({ row }) => (
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
            </MuiTableRow>
          )}
        />
      </Box>
    </LazyPage>
  )
}

export default List
