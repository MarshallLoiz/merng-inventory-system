import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import validator from 'validator'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import DateFnsUtils from '@date-io/date-fns'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useMutation, useQuery } from '@apollo/client'
import { DatePicker } from 'formik-material-ui-pickers'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { CREATE_STAFF } from '../../gql/Mutation'
import { GET_CURRENT_STORE_LOGIN_USER_ID } from '../../gql/Query'
import useStyles from '../../jss/createStaff'

const CreateStaffForm = () => {
  const classes = useStyles()
  const history = useHistory()

  const [errorState, setErrorState] = useState('')
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsConfirmShowPassword] = useState(false)

  const [dateOfBirth, handeDateOfBirth] = useState(new Date())
  const [dateOfJoin, handleDateOfJoin] = useState(new Date())

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setIsConfirmShowPassword(!isShowConfirmPassword)
  }

  const [dispatchCreateStaff, { error: errorCreatingStaff }] = useMutation(
    CREATE_STAFF
  )

  const { data } = useQuery(GET_CURRENT_STORE_LOGIN_USER_ID)

  const currentStoreLoginId = data ? data.currentStoreLogin.id : ''

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatchCreateStaff({
        variables: {
          data: {
            storeId: currentStoreLoginId,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            gender: values.gender,
            officePhone: Number(values.phoneNumber),
            jobTitle: values.jobTitle,
            jobDescription: values.jobDescription,
            dateOfBirth: dateOfBirth,
            dateOfJoin: dateOfJoin,
            password: values.password,
            confirmPassword: values.confirmPassword,
            address: values.address,
          },
        },
      })
      setSnackBarOpen(true)
      resetForm({})
    } catch (err) {
      setErrorState(err.message)
    }
  }

  return (
    <div className={classes.createStaff}>
      {errorCreatingStaff && <Alert severity='error'>{errorState}</Alert>}

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity='success' variant='filled'>
          Staff successfully added!
        </Alert>
      </Snackbar>

      <IconButton
        className={classes.craeteStaffBack}
        onClick={() => history.push('/')}
        disableRipple
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Typography variant='h5'>Create new Staff</Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          phoneNumber: '',
          jobTitle: '',
          jobDescription: '',
          dateOfBirth: new Date(),
          dateOfJoin: new Date(),
          password: '',
          confirmPassword: '',
          address: '',
        }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Email is required'
          } else if (!validator.isEmail(values.email)) {
            errors.email = 'Please provide a valid email'
          }

          if (!values.firstName) {
            errors.firstName = 'First name is required'
          }

          if (!values.lastName) {
            errors.lastName = 'Last name is required'
          }

          if (!values.gender) {
            errors.gender = 'Gender name is required'
          }

          if (!values.phoneNumber) {
            errors.phoneNumber = 'Phone number is required'
          }

          if (!values.jobTitle) {
            errors.jobTitle = 'Job title is required'
          }

          if (!values.jobDescription) {
            errors.jobDescription = 'Job description is required'
          }

          if (!values.dateOfBirth) {
            errors.dateOfBirth = 'Date of birth is required'
          }

          if (!values.password) {
            errors.password = 'Password is required'
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required'
          }

          if (!values.address) {
            errors.address = 'Address is required'
          }

          return errors
        }}
      >
        {({ submitForm }) => (
          <Form>
            <div className={classes.createStaffFormContainer}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth margin='dense'>
                        <Field
                          component={TextField}
                          label='First Name'
                          variant='outlined'
                          name='firstName'
                          FormHelperTextProps={{
                            className: classes.errorText,
                          }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth margin='dense'>
                        <Field
                          component={TextField}
                          label='Last Name'
                          variant='outlined'
                          name='lastName'
                          FormHelperTextProps={{
                            className: classes.errorText,
                          }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl fullWidth margin='dense'>
                        <Field
                          component={TextField}
                          label='Email'
                          variant='outlined'
                          type='email'
                          name='email'
                          FormHelperTextProps={{
                            className: classes.errorText,
                          }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl variant='outlined' fullWidth margin='dense'>
                        <Field
                          label='Gender'
                          component={TextField}
                          select={true}
                          name='gender'
                          variant='outlined'
                          FormHelperTextProps={{
                            className: classes.errorText,
                          }}
                        >
                          <MenuItem value='male'>Male</MenuItem>
                          <MenuItem value='female'>Female</MenuItem>
                        </Field>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth margin='dense'>
                        <Field
                          component={TextField}
                          label='Phone number'
                          variant='outlined'
                          type='number'
                          name='phoneNumber'
                          FormHelperTextProps={{
                            className: classes.errorText,
                          }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl fullWidth margin='dense'>
                        <Field
                          component={TextField}
                          label='Job title'
                          variant='outlined'
                          name='jobTitle'
                          FormHelperTextProps={{
                            className: classes.errorText,
                          }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth margin='dense'>
                        <Field
                          component={TextField}
                          label='Job description'
                          variant='outlined'
                          multiline
                          rows={2}
                          rowsMax={4}
                          name='jobDescription'
                          FormHelperTextProps={{
                            className: classes.errorText,
                          }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl fullWidth margin='dense'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <Field
                            error={!dateOfBirth}
                            helperText={
                              !dateOfBirth ? 'Date of Birth is required' : ''
                            }
                            component={DatePicker}
                            value={dateOfBirth}
                            onChange={handeDateOfBirth}
                            inputVariant='outlined'
                            clearable
                            label='Date of birth'
                            placeholder='Date of birth'
                            format='MMMM/dd/yyyy'
                            name='dateOfBirth'
                          />
                        </MuiPickersUtilsProvider>
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl fullWidth margin='dense'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <Field
                            error={!dateOfJoin}
                            helperText={
                              !dateOfJoin ? 'Date of Join is required' : ''
                            }
                            component={DatePicker}
                            value={dateOfJoin}
                            onChange={handleDateOfJoin}
                            inputVariant='outlined'
                            clearable
                            label='Date of join'
                            placeholder='Date of join'
                            format='MMMM/dd/yyyy'
                            name='dateOfJoin'
                            FormHelperTextProps={{
                              className: classes.errorText,
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Grid item xs={12}>
                    <FormControl fullWidth margin='dense'>
                      <Field
                        component={TextField}
                        label='Password'
                        variant='outlined'
                        type={isShowPassword ? 'text' : 'password'}
                        name='password'
                        FormHelperTextProps={{
                          className: classes.errorText,
                        }}
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

                  <Grid item xs={12}>
                    <FormControl fullWidth margin='dense'>
                      <Field
                        component={TextField}
                        label='Confirm password'
                        variant='outlined'
                        type={isShowConfirmPassword ? 'text' : 'password'}
                        name='confirmPassword'
                        FormHelperTextProps={{
                          className: classes.errorText,
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <IconButton
                                onClick={handleClickShowConfirmPassword}
                              >
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
                        label='Address'
                        variant='outlined'
                        multiline
                        rows={2}
                        rowsMax={4}
                        name='address'
                        FormHelperTextProps={{
                          className: classes.errorText,
                        }}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <Button
                      className={classes.createStaffButton}
                      onClick={submitForm}
                    >
                      Create
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreateStaffForm
