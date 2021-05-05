import { ApolloClient, InMemoryCache } from '@apollo/client'
import Cookies from 'js-cookie'

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  credentials: 'include',
  request: (operation) => {
    const token = Cookies.get('jwt')

    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
  },
})
