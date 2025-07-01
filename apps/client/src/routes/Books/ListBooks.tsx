import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

import { useBooks } from '@api/strapiRoutes/books'

import { tableBorderGreen } from '@styles'
import { useUrl } from '@hooks/useUrl'

import Box from '@components/Box'
import Link from '@components/CleanLink'
import Table from '@components/Table'
import Loading from '@components/Loading'
import LazyPage from '@components/LazyPage'
import { strapi } from '@api'

import styled from 'styled-components'

const TableCell = styled(MuiTableCell)`
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`
export const Component = () => {
  const { data, isLoading, error } = useBooks(strapi)
  const baseUrl = useUrl()

  const formattedData = data
    ?.sort((a, b) => Date.parse(b.ReleaseDate) - Date.parse(a.ReleaseDate))
    ?.map(({ id, Title, Author, ReleaseDate }) => {
      const { groups } =
        /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec(ReleaseDate) ?? {}
      const date = groups ? `${groups.day}/${groups.month}/${groups.year}` : ''
      return {
        id,
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
                    children={<Link to={`${baseUrl}/${row.id}`}>{value}</Link>}
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
