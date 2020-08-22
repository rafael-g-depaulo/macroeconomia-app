import React, { lazy } from 'react'
import styled from 'styled-components'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

import { useAllEvents } from 'Api/events'

import Box from 'Components/Box'

import { tableBorderGreen } from 'Themes/default'
import Link from 'Components/Link'
import LazyPage from 'Components/LazyPage'
import Loading from 'Components/Loading'

const Table = lazy(() => import("Components/Table"))

const TableCell = styled(MuiTableCell)` 
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`

export const List = ({
  ...props
}) => {

  const { data, isLoading } = useAllEvents()

  const formattedData = data
    ?.map(({ id, name, date, link }) => {
      const { groups } = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec(date)
      const newDate = `${groups.day}/${groups.month}/${groups.year}`
      return ({
        id,
        link,
        values: [
          name,
          newDate,
        ]
      })
    })

  return (
    <LazyPage isLoading={isLoading} fallback={<Box><Loading /></Box>}>
      <Box>
        <Table
          columns={["Name", "Release Date"]}
          data={formattedData}
          RowComponent={({ row }) => (
            <MuiTableRow key={row.id}>
              {row?.values?.map((value, i) =>
                i === 0 ?
                  <TableCell
                    key={i}
                    align="inherit"
                    children={<Link href={`${row.link}`}>{value}</Link>}
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
