import React from 'react'
import styled from 'styled-components'

import { tableBorderGreen } from 'Themes/default'

import { useAllBulletins } from 'Api/dm-bulletins'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

import Box from 'Components/Box'
import Table from 'Components/Table'
import Link from 'Components/Link'
import LazyPage from 'Components/LazyPage'
import Loading from 'Components/Loading'

const TableCell = styled(MuiTableCell)` 
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`

export const List = ({
  ...props
}) => {
  const { data, isLoading, error } = useAllBulletins()

  const formattedData = data
    ?.sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date))
    ?.map(({ id, title, release_date, link }) => {
      const { groups } = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec(release_date) ?? {}
      const date = groups ? `${groups.day}/${groups.month}/${groups.year}` : ""
      return ({
        id,
        link,
        values: [
          title,
          date,
        ]
      })
    })

  return (
    <LazyPage isLoading={isLoading || error} fallback={<Box><Loading /></Box>}>
      <Box>
        <Table
          columns={["Title", "Release Date"]}
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
            </MuiTableRow>
          }
        />
      </Box>
    </LazyPage>
  )
}

export default List
