import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  loginRoot: {
    width: '30em',
    margin: 'auto',
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
  loginButton: {
    marginTop: '5px',
    backgroundColor: theme.palette.button.backgroundColor,
    '&:hover': {
      backgroundColor: theme.palette.button.backGroundColorhover,
    },
    marginBottom: '10px',
  },
  circularProgressLogin: {
    position: 'absolute',
    right: '15px',
    color: theme.palette.button.circularProgress,
  },
  registerLink: {
    textDecoration: 'none',
    marginLeft: '5px',
    color: 'black',
  },
}))

export default useStyles
