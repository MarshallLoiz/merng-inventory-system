import React, { useLayoutEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import { LoginContent } from './LoginContent'
import useStyles from '../../jss/login'
import cookieChecker from '../../utils/cookieChecker'

const Login = () => {
  const classes = useStyles()

  const history = useHistory()

  useLayoutEffect(() => {
    if (cookieChecker()) {
      history.push('/')
    }
  })

  return (
    <Grid container>
      <div className={classes.loginRoot}>
        <Paper elevation={3}>
          <LoginContent />
        </Paper>
      </div>
    </Grid>
  )
}

export default Login
