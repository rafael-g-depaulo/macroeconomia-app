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

const titleText = `To contribute to the international economic debate we launched the Structuralist
Development Macroeconomics Bulletin (SDMB). This bulletin is an electronic journal with two
issues per year with the objective of presenting technical analysis of the main themes related
to the research goals of the SDMRG. Formally, the issues of this Bulletin will be divided into two main axes: macroeconomics and economic development. The articles published here are shorter in comparison to a traditional
scientific paper. However, the analyzes presented will be more in-depth than a newspapers article, but accessible for readers who are not specialists in Economics.`

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
          columns={[titleText, "Release Date"]}
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
