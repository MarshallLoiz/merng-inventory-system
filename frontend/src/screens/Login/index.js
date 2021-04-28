import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { LoginContent } from './LoginContent'
import useStyles from '../../jss/login'

const Login = () => {
  const classes = useStyles()

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
