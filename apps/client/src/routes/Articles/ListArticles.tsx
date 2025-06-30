import styled from 'styled-components'
import { useArticles } from '@api/strapiRoutes/articles'
import { tableBorderGreen } from '@styles'

import Loading from '@components/Loading'
import Table from '@components/Table'
import Link from '@components/Link'
import Box from '@components/Box'
import LazyPage from '@components/LazyPage'

import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'
import { strapi } from '@api'

const TableCell = styled(MuiTableCell)`
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`

export const Component = () => {
  const { data, isLoading, error } = useArticles(strapi)

  const formattedData = data
    ?.sort((a, b) => Date.parse(b.ReleaseDate) - Date.parse(a.ReleaseDate))
    ?.map(({ id, Title, Author, ReleaseDate, Link }) => {
      const { groups } =
        /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec(ReleaseDate) ?? {}
      const date = groups ? `${groups.day}/${groups.month}/${groups.year}` : ''
      return {
        id,
        link: Link,
        values: [Title, Author, date],
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
        <Table
          columns={['Title', 'Author', 'Release Date']}
          data={formattedData}
          RowComponent={({ row }) => (
            <MuiTableRow key={row.id}>
              {row?.values?.map((value: any, i: any) =>
                i === 0 ? (
                  <TableCell
                    key={i}
                    align="inherit"
                    children={<Link href={row.link}>{value}</Link>}
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
