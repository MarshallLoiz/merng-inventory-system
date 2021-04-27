import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from '@apollo/client/react'
import './index.css'
import { client } from './client'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
