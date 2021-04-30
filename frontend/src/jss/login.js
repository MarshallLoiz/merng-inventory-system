import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  loginRoot: {
    width: '30em',
    margin: 'auto',
    display: 'block',
  },
  login: {
    padding: '25px',
  },
  loginErrorBanner: {
    marginBottom: '5px',
  },
  loginFormContainer: {
    marginTop: '20px',
  },
  loginInputs: {
    width: '100%',
  },
  loginPasswordTextField: {
    marginTop: '10px',
    marginBottom: '25px',
  },
  loginButton: {
    backgroundColor: '#0B72B9',
    '&:hover': {
      backgroundColor: '#0000CD',
    },
    marginBottom: '10px',
  },
  circularProgressLogin: {
    position: 'absolute',
    right: '15px',
  },
  registerLink: {
    textDecoration: 'none',
    marginLeft: '5px',
    color: 'black',
  },
}))

export default useStyles
