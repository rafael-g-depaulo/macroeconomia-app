import React, { lazy } from 'react'
import styled from 'styled-components'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

import { useEvents } from '@api/strapiRoutes/events'

import Box from '@components/Box'

import { tableBorderGreen } from '@styles'
import Link from '@components/Link'
import LazyPage from '@components/LazyPage'
import Loading from '@components/Loading'
import { strapi } from '@api'

const Table = lazy(() => import('@components/Table'))

const TableCell = styled(MuiTableCell)`
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`

export const Component = () => {
  const { data, isLoading } = useEvents(strapi)

  const formattedData = data
    ?.sort((a, b) => Date.parse(b.Date) - Date.parse(a.Date))
    ?.map(({ id, Name, Date, Link }) => {
      const { groups } =
        /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)T(?<hour>\d+):(?<minute>\d+)/.exec(
          Date,
        ) ?? {}
      const hour = (Number(groups?.hour ?? 0) + 21) % 24
      const newDate = groups
        ? `${groups.day}/${groups.month}/${groups.year} ${hour}:${groups.minute}`
        : ''
      return {
        id,
        link: Link,
        values: [Name, newDate],
      }
    })

  return (
    <LazyPage
      isLoading={isLoading}
      fallback={
        <Box>
          <Loading />
        </Box>
      }
    >
      <Box>
        <Table
          columns={['Name', 'Date']}
          data={formattedData}
          RowComponent={({ row }) => (
            <MuiTableRow key={row.id}>
              {row?.values?.map((value: any, i: any) =>
                i === 0 ? (
                  <TableCell
                    key={i}
                    align="inherit"
                    children={<Link href={`${row.link}`}>{value}</Link>}
                  />
                ) : (
                  <TableCell key={i} align="right" children={value} />
                ),
              )}
            </MuiTableRow>
          )}
        />
      </Box>
    </LazyPage>
  )
}

export default Component
