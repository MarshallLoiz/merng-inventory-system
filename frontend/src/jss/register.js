import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  registerRoot: {
    width: '30em',
    margin: 'auto',
  },
  register: {
    padding: '25px',
  },
  registerFormContainer: {
    marginTop: '10px',
  },
  registerButton: {
    marginTop: '10px',
    backgroundColor: theme.palette.button.backgroundColor,
    '&:hover': {
      backgroundColor: theme.palette.button.backGroundColorhover,
    },
    marginBottom: '15px',
  },
  loginLink: {
    textDecoration: 'none',
    marginLeft: '5px',
    color: 'black',
  },
  errorText: {
    marginLeft: 0,
  },
  registerErrorBanner: {
    marginBottom: '10px',
    marginTop: '10px',
  },
  circularProgressRegister: {
    position: 'absolute',
    right: '15px',
    color: theme.palette.button.circularProgress,
  },
}))

export default useStyles
