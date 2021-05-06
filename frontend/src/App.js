import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './screens/Login/index'
import Home from './screens/Home'
import Register from './screens/Register'

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
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
