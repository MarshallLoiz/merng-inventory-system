import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  createStaffRoot: {
    margin: 'auto',
    width: '60em',
  },
  createStaff: {
    padding: '25px',
  },
  craeteStaffBack: {
    padding: 0,
  },
  createStaffFormContainer: {
    marginTop: '10px',
  },
  createStaffButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.button.backgroundColor,
    '&:hover': {
      backgroundColor: theme.palette.button.backGroundColorhover,
    },
    marginTop: '25px',
    marginLeft: 'auto',
  },
  errorText: {
    marginLeft: 0,
  },
}))

export default useStyles
