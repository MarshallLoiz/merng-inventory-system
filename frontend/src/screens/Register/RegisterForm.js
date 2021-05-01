import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Alert from '@material-ui/lab/Alert'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import { CREATE_STORE } from '../../gql/Mutation'
import useStyles from '../../jss/register'

const RegisterForm = () => {
  const classes = useStyles()

  const history = useHistory()

  const [
    dispatchCreateStore,
    { loading: registerLoading, error: registerError },
  ] = useMutation(CREATE_STORE)

  const [storeName, setStoreName] = useState('')
  const [email, setEmail] = useState('')
  const [areaCode, setAreaCode] = useState('')
  const [storeAddress, setStoreAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [otherDetails, setOtherDetails] = useState('')
  const [error, setError] = useState(null)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsConfirmShowPassword] = useState(false)

  const [storeNameFieldError, setStoreNameFieldError] = useState(false)
  const [emailFieldError, setEmailFieldError] = useState(false)
  const [areaCodeFieldError, setAreaCodeFieldError] = useState(false)
  const [storeAddressFieldError, setStoreAddressFieldError] = useState(false)
  const [passwordFieldError, setPasswordFieldError] = useState(false)
  const [confirmPasswordFieldError, setConfirmPasswordFieldError] = useState(
    false
  )

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setIsConfirmShowPassword(!isShowConfirmPassword)
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (!storeName.length > 0) {
      setStoreNameFieldError(true)
    }

    if (!email.length > 0) {
      setEmailFieldError(true)
    }

    if (!areaCode.length > 0) {
      setAreaCodeFieldError(true)
    }

    if (!storeAddress.length > 0) {
      setStoreAddressFieldError(true)
    }

    if (!password.length > 0) {
      setPasswordFieldError(true)
    }

    if (!confirmPassword.length > 0) {
      setConfirmPasswordFieldError(true)
    }

    try {
      if (
        !storeName.length > 0 ||
        !email.length > 0 ||
        !areaCode.length > 0 ||
        !storeAddress.length > 0 ||
        !password.length > 0 ||
        !confirmPassword.length > 0
      ) {
        return
      }

      await dispatchCreateStore({
        variables: {
          data: {
            storeName,
            email,
            areaCode: Number(areaCode),
            storeAddress,
            password,
            confirmPassword,
            otherDetails,
          },
        },
      })
      history.push('/')
    } catch (err) {
      const errorMessage = err.message.split(':')[3].trim()
      setError(errorMessage)
    }
  }

  return (
    <div className={classes.register}>
      <Typography variant='h5'>Register Store</Typography>
      {registerError && (
        <Alert severity='error' className={classes.registerErrorBanner}>
          {error}
        </Alert>
      )}
      <form onSubmit={submitHandler}>
        <div className={classes.registerFormContainer}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth margin='dense' error>
                <TextField
                  FormHelperTextProps={{
                    className: classes.errorText,
                  }}
                  error={storeNameFieldError}
                  helperText={
                    storeNameFieldError ? 'Store name is required' : ''
                  }
                  label='Store Name'
                  type='text'
                  variant='outlined'
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={6}>
              <FormControl fullWidth margin='dense'>
                <TextField
                  FormHelperTextProps={{
                    className: classes.errorText,
                  }}
                  error={emailFieldError}
                  helperText={emailFieldError ? 'Email is required' : ''}
                  label='Email'
                  type='text'
                  variant='outlined'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={6}>
              <FormControl fullWidth margin='dense'>
                <TextField
                  FormHelperTextProps={{
                    className: classes.errorText,
                  }}
                  error={areaCodeFieldError}
                  helperText={areaCodeFieldError ? 'Area code is required' : ''}
                  label='Area Code'
                  type='number'
                  variant='outlined'
                  value={areaCode}
                  onChange={(e) => setAreaCode(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth margin='dense'>
                <TextField
                  FormHelperTextProps={{
                    className: classes.errorText,
                  }}
                  error={storeAddressFieldError}
                  helperText={
                    storeAddressFieldError ? 'Store address is required' : ''
                  }
                  label='Store Address'
                  type='text'
                  variant='outlined'
                  value={storeAddress}
                  onChange={(e) => setStoreAddress(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth margin='dense'>
                <TextField
                  FormHelperTextProps={{
                    className: classes.errorText,
                  }}
                  error={passwordFieldError}
                  helperText={passwordFieldError ? 'Password is required' : ''}
                  label='Password'
                  type={isShowPassword ? 'text' : 'password'}
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
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth margin='dense'>
                <TextField
                  FormHelperTextProps={{
                    className: classes.errorText,
                  }}
                  error={confirmPasswordFieldError}
                  helperText={
                    confirmPasswordFieldError
                      ? 'Password confirm is required'
                      : ''
                  }
                  label='Confirm Password'
                  type={isShowConfirmPassword ? 'text' : 'password'}
                  variant='outlined'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleClickShowConfirmPassword}>
                          {isShowConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth margin='dense'>
                <TextField
                  label='Other details'
                  variant='outlined'
                  multiline
                  rows={2}
                  rowsMax={4}
                  value={otherDetails}
                  onChange={(e) => setOtherDetails(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Button
              type='submit'
              variant='contained'
              fullWidth
              className={classes.registerButton}
              disableElevation
              disableRipple
            >
              Create store
              {registerLoading && (
                <CircularProgress
                  size={20}
                  color='secondary'
                  className={classes.circularProgressRegister}
                />
              )}
            </Button>
          </Grid>
        </div>
        <Typography component='span'>Already have account?</Typography>
        <Link to='/login' className={classes.loginLink}>
          <Typography component='span' className={classes.loginLink}>
            Login Here!
          </Typography>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm
