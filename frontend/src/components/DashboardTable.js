import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import useStyles from '../jss/table'
import AddIcon from '@material-ui/icons/Add'
import { GET_STORE_STAFFS } from '../gql/Query'

const DashboardTable = () => {
  const classes = useStyles()

  const history = useHistory()

  const handleCreateNewStaffButtonClick = () => {
    history.push('/create-staff')
  }

  const { loading, data } = useQuery(GET_STORE_STAFFS, {
    fetchPolicy: 'network-only',
  })

  const staffs = data ? data.staffs : []

  return (
    <>
      {loading ? (
        <CircularProgress
          size={100}
          className={classes.dashboardCircullarProgress}
        />
      ) : (
        <>
          <div className={classes.buttonWrapper}>
            <Button
              onClick={handleCreateNewStaffButtonClick}
              className={classes.addNewStaffButton}
              startIcon={<AddIcon />}
            >
              Add new Staff
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeader}>
                    First Name
                  </TableCell>
                  <TableCell className={classes.tableHeader}>
                    Last Name
                  </TableCell>
                  <TableCell className={classes.tableHeader}>Gender</TableCell>
                  <TableCell className={classes.tableHeader}>
                    Office Phone
                  </TableCell>
                  <TableCell className={classes.tableHeader}>
                    Job Title
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffs.map((staff) => (
                  <TableRow
                    className={classes.tableBodyRow}
                    component={Link}
                    to={`/staff/${staff.id}`}
                    key={staff.id}
                    hover
                  >
                    <TableCell>{staff.firstName}</TableCell>
                    <TableCell>{staff.lastName}</TableCell>
                    <TableCell>{staff.gender}</TableCell>
                    <TableCell>{staff.officePhone}</TableCell>
                    <TableCell>{staff.jobTitle}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  )
}

export default DashboardTable
