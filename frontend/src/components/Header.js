import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import useStyles from '../jss/header'
import cookieChecker from '../utils/cookieChecker'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import PeopleIcon from '@material-ui/icons/People'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import SettingsIcon from '@material-ui/icons/Settings'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useMutation } from '@apollo/client'
import { LOGOUT_STORE } from '../gql/Mutation'

const Header = () => {
  const classes = useStyles()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()

  const [dispatchLogout] = useMutation(LOGOUT_STORE)

  const logoutHandler = async () => {
    dispatchLogout().then(() => history.push('/login'))
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          {cookieChecker() && (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={() => setIsOpenDrawer(!isOpenDrawer)}
            >
              <MenuIcon />
            </IconButton>
          )}
          {cookieChecker() && (
            <>
              <Typography variant='h6' className={classes.title}>
                React App
              </Typography>
              <Avatar aria-haspopup='true' onClick={handleClick}></Avatar>
            </>
          )}
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor='left'
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        onOpen={() => setIsOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div className={classes.list}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Store Details' />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Staffs' />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary='Products' />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary='Sales' />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            logoutHandler()
          }}
        >
          <ExitToAppIcon />
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Header
