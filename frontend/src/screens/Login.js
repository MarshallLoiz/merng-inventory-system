import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  loginRoot: {
    width: '35em',
    margin: 'auto',
    display: 'block',
  },
  login: {
    padding: '25px',
  },
  loginFormContainer: {
    marginTop: '20px',
  },
  loginInputs: {
    width: '100%',
  },
  loginPasswordTextField: {
    marginTop: '10px',
    marginBottom: '15px',
  },
  loginButton: {
    backgroundColor: '#0B72B9',
    '&:hover': {
      backgroundColor: '#0000CD',
    },
  },
})

const Login = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <div className={classes.loginRoot}>
        <Paper elevation={3}>
          <div className={classes.login}>
            <Typography variant='h5'>Sign in</Typography>
            <form>
              <div className={classes.loginFormContainer}>
                <FormControl className={classes.loginInputs}>
                  <TextField
                    className={classes.loginEmailTextField}
                    label='Email address'
                    variant='outlined'
                  />
                  <TextField
                    className={classes.loginPasswordTextField}
                    label='Password'
                    variant='outlined'
                  />
                </FormControl>
                <Button
                  variant='contained'
                  className={classes.loginButton}
                  disableElevation
                  disableRipple
                  fullWidth
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      </div>
    </Grid>
  )
}

export default Login
