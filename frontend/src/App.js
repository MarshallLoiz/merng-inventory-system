import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './screens/Login/index'
import Home from './screens/Home'
import Register from './screens/Register'
import EditStaff from './screens/EditStaff'
import CreateStaff from './screens/CreateStaff'

import muiTheme from './theme/muiTheme'

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Router>
        <div className='app-container'>
          <main className='app-main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/staff/:id' component={EditStaff} />
              <Route path='/create-staff' component={CreateStaff} />
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
