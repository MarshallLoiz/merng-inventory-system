import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  tableBodyRow: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
  buttonWrapper: {
    display: 'flex',
    marginBottom: '20px',
  },
  addNewStaffButton: {
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    backgroundColor: theme.palette.button.backgroundColor,
    '&:hover': {
      backgroundColor: theme.palette.button.backGroundColorhover,
    },
  },
}))

export default useStyles
