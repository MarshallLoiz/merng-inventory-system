import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import useStyles from '../jss/table'

const DashboardTable = () => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>First Name</TableCell>
            <TableCell className={classes.tableHeader}>Last Name</TableCell>
            <TableCell className={classes.tableHeader}>Gender</TableCell>
            <TableCell className={classes.tableHeader}>Office Phone</TableCell>
            <TableCell className={classes.tableHeader}>Job Title</TableCell>
            <TableCell className={classes.tableHeader}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  )
}

export default DashboardTable
