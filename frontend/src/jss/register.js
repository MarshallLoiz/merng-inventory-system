import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
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
    backgroundColor: '#0B72B9',
    '&:hover': {
      backgroundColor: '#0000CD',
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
  },
})

export default useStyles
