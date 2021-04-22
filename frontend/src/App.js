import { ThemeProvider } from '@material-ui/core/styles'

const theme = {}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>MERN-G APP!</div>
    </ThemeProvider>
  )
}

export default App
