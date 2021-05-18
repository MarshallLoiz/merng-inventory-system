import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CreateStaffForm from './CreateStaffForm'
import useStyles from '../../jss/createStaff'
import cookieChecker from '../../utils/cookieChecker'

const CreateStaff = () => {
  const classes = useStyles()

  const history = useHistory()

  useLayoutEffect(() => {
    if (!cookieChecker()) {
      history.push('/login')
    }
  })

  return (
    <div>
      <Header headerState='Staffs' />
      <Grid container>
        <div className={classes.createStaffRoot}>
          <Paper elevation={3}>
            <CreateStaffForm />
          </Paper>
        </div>
      </Grid>
    </div>
  )
}

export default CreateStaff
