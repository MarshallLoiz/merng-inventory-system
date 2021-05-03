import React, { useState } from 'react'
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

const Header = () => {
  const classes = useStyles()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

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
              <Avatar>VL</Avatar>
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
    </div>
  )
}

export default Header
