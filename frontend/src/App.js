import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './screens/Login/index'
import Home from './screens/Home'

import Header from './components/Header'

import muiTheme from './theme/muiTheme'

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Header />
      <Router>
        <div className='app-container'>
          <main className='app-main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
