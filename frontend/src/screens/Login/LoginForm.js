import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormControl from '@material-ui/core/FormControl'
import useStyles from '../../jss/login'

const LoginForm = ({ tab }) => {
  const classes = useStyles()

  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <div className={classes.login}>
      <Typography variant='h5'>
        {tab === 0 ? 'Store Login' : 'Staff Login'}
      </Typography>
      <form>
        <div className={classes.loginFormContainer}>
          <FormControl className={classes.loginInputs}>
            <TextField
              className={classes.loginEmailTextField}
              label='Email'
              variant='outlined'
            />
            <TextField
              type={isShowPassword ? 'text' : 'password'}
              className={classes.loginPasswordTextField}
              label='Password'
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword}>
                      {isShowPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
  )
}

export default LoginForm
