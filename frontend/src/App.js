import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>MERN-G APP!</div>
    </ThemeProvider>
  )
}

export default App
