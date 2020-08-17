import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import { tableBgGreen, tableBorderGreen } from 'Themes/default'

import MuiTable from '@material-ui/core/Table'
import MuiTableBody from '@material-ui/core/TableBody'
import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableContainer from '@material-ui/core/TableContainer'
import MuiTablePagination from '@material-ui/core/TablePagination';
import MuiTableHead from '@material-ui/core/TableHead'
import MuiTableRow from '@material-ui/core/TableRow'
import MuiPaper from '@material-ui/core/Paper'

const BorderedTableCell = styled(MuiTableCell)`
  &:not(:first-child) {
    border-left: 2px solid ${tableBorderGreen};
  }
`

// data must be an array of objects in the format:
// { id: string , values: string[]}
export const TableRow = ({ row }) => {
  return (
    <MuiTableRow key={row.id}>
    {row?.values?.map((value, i) =>
      <BorderedTableCell
        key={i}
        align={ i === 0 ? "inherit" : "right"}
        children={value}
      />
    )}
  </MuiTableRow>
  )
}


const HeaderRow = styled(MuiTableRow)`
  background-color: ${tableBgGreen};
`
const HeaderText = styled.span`
  font-weight: bold;
`
export const TableHeader = ({ columns }) => {
  return (
    <HeaderRow>
    {columns.map((column, i) => 
      <BorderedTableCell
        align={ i === 0 ? "inherit" : "right"}
        key={column}
      >
        <HeaderText>{column}</HeaderText>
      </BorderedTableCell>
    )}
    </HeaderRow>
  )
}

// rows is an array of strings
export const Table = ({
  columns = [],
  data = [],

  RowComponent = TableRow,

  initialRowsPerPage = 5,
  onChangePage = () => {},

  ...props
}) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage)

  const _onChangePage = useCallback((e, newPage) => {
    setPage(newPage)
    onChangePage(rowsPerPage, newPage)
  }, [onChangePage, rowsPerPage])

  return (
    <MuiTableContainer>
      <MuiPaper>
        <MuiTable>
          <MuiTableHead>
            <TableHeader columns={columns} />
          </MuiTableHead>

          <MuiTableBody>
            {data
              .slice(page * rowsPerPage, (page+1)* rowsPerPage)
              .map(row => <RowComponent key={row.id} row={row}/>)
            }

          {/* pagination */}
          <MuiTableRow>
            <MuiTablePagination
              count={data.length}
              rowsPerPage={rowsPerPage}
              onChangeRowsPerPage={e => setRowsPerPage(e.target.value)}
              page={page}
              rowsPerPageOptions={[5, 10, 25]}
              onChangePage={_onChangePage}
            />
          </MuiTableRow>

          </MuiTableBody>
        </MuiTable>
      </MuiPaper>
    </MuiTableContainer>
  )
}

export default Table
