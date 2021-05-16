import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import validator from 'validator'
import { TextField } from 'formik-material-ui'
import { Link, useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Alert from '@material-ui/lab/Alert'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import { CREATE_STORE } from '../../gql/Mutation'
import AreaCodeFormat from './AreaCodeFormat'
import useStyles from '../../jss/register'

const RegisterForm = () => {
  const classes = useStyles()

  const history = useHistory()

  const [
    dispatchCreateStore,
    { loading: registerLoading, error: registerError },
  ] = useMutation(CREATE_STORE)

  const [error, setError] = useState(null)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsConfirmShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setIsConfirmShowPassword(!isShowConfirmPassword)
  }

  const submitHandler = async (values) => {
    try {
      await dispatchCreateStore({
        variables: {
          data: {
            storeName: values.storeName,
            email: values.email,
            areaCode: Number(values.areaCode),
            storeAddress: values.storeAddress,
            password: values.password,
            confirmPassword: values.confirmPassword,
            otherDetails: values.otherDetails,
          },
        },
      })
      history.push('/')
    } catch (err) {
      setError(err.message)
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
      <Formik
        initialValues={{
          storeName: '',
          email: '',
          areaCode: '',
          storeAddress: '',
          password: '',
          confirmPassword: '',
          otherDetails: '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={submitHandler}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Email is required'
          } else if (!validator.isEmail(values.email)) {
            errors.email = 'Please provide a valid email'
          }

          if (!values.storeName) {
            errors.storeName = 'Store name is required'
          }

          if (!values.areaCode) {
            errors.areaCode = 'Area code is required'
          }

          if (!values.storeAddress) {
            errors.storeAddress = 'Store address is required'
          }

          if (!values.password) {
            errors.password = 'Password is required'
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required'
          }
          return errors
        }}
      >
        {({ submitForm }) => (
          <Form>
            <div className={classes.registerFormContainer}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth margin='dense' error>
                    <Field
                      component={TextField}
                      FormHelperTextProps={{
                        className: classes.errorText,
                      }}
                      label='Store Name'
                      type='text'
                      variant='outlined'
                      name='storeName'
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6} sm={6}>
                  <FormControl fullWidth margin='dense'>
                    <Field
                      component={TextField}
                      FormHelperTextProps={{
                        className: classes.errorText,
                      }}
                      label='Email'
                      type='text'
                      variant='outlined'
                      name='email'
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6} sm={6}>
                  <FormControl fullWidth margin='dense'>
                    <Field
                      component={TextField}
                      FormHelperTextProps={{
                        className: classes.errorText,
                      }}
                      label='Area Code'
                      variant='outlined'
                      name='areaCode'
                      InputProps={{
                        inputComponent: AreaCodeFormat,
                      }}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth margin='dense'>
                    <Field
                      component={TextField}
                      FormHelperTextProps={{
                        className: classes.errorText,
                      }}
                      label='Store Address'
                      type='text'
                      variant='outlined'
                      name='storeAddress'
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth margin='dense'>
                    <Field
                      component={TextField}
                      FormHelperTextProps={{
                        className: classes.errorText,
                      }}
                      name='password'
                      label='Password'
                      type={isShowPassword ? 'text' : 'password'}
                      variant='outlined'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton onClick={handleClickShowPassword}>
                              {isShowPassword ? (
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
                    <Field
                      component={TextField}
                      FormHelperTextProps={{
                        className: classes.errorText,
                      }}
                      label='Confirm Password'
                      type={isShowConfirmPassword ? 'text' : 'password'}
                      variant='outlined'
                      name='confirmPassword'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              onClick={handleClickShowConfirmPassword}
                            >
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
                    <Field
                      component={TextField}
                      label='Other details'
                      variant='outlined'
                      multiline
                      rows={2}
                      rowsMax={4}
                      name='otherDetails'
                    />
                  </FormControl>
                </Grid>

                <Button
                  onClick={submitForm}
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
                      className={classes.circularProgressRegister}
                    />
                  )}
                </Button>
              </Grid>
            </div>
          </Form>
        )}
      </Formik>
      <Typography component='span'>Already have account?</Typography>
      <Link to='/login' className={classes.loginLink}>
        <Typography component='span' className={classes.loginLink}>
          Login Here!
        </Typography>
      </Link>
    </div>
  )
}

export default RegisterForm
