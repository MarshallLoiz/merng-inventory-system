import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormControl from '@material-ui/core/FormControl'
import { useMutation } from '@apollo/client'
import useStyles from '../../jss/login'
import { LOGIN_STORE } from '../../gql/Mutation'

const LoginForm = ({ tab }) => {
  const classes = useStyles()

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [
    dispatchLogin,
    { loading: loginLoading, error: loginError },
  ] = useMutation(LOGIN_STORE)

  const submitHandler = async (event) => {
    event.preventDefault()

    try {
      await dispatchLogin({
        variables: {
          data: {
            email,
            password,
          },
        },
      })
      history.push('/')
    } catch (err) {
      setError(err.message)
    }
  }

  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <div className={classes.login}>
      {loginError && <Alert severity='error'>{error}</Alert>}
      <Typography variant='h5'>
        {tab === 0 ? 'Store Login' : 'Staff Login'}
      </Typography>
      <form onSubmit={submitHandler}>
        <div className={classes.loginFormContainer}>
          <FormControl className={classes.loginInputs}>
            <TextField
              className={classes.loginEmailTextField}
              label='Email'
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type={isShowPassword ? 'text' : 'password'}
              className={classes.loginPasswordTextField}
              label='Password'
              variant='outlined'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            type='submit'
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
