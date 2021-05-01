import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import RegisterForm from './RegisterForm'
import useStyles from '../../jss/register'
import cookieChecker from '../../utils/cookieChecker'

const Register = () => {
  const classes = useStyles()

  const history = useHistory()

  useLayoutEffect(() => {
    if (cookieChecker()) {
      history.push('/')
    }
  })

  return (
    <Grid container>
      <div className={classes.registerRoot}>
        <Paper elevation={3}>
          <RegisterForm />
        </Paper>
      </div>
    </Grid>
  )
}

export default Register
