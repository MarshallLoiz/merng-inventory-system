import { ApolloClient, InMemoryCache } from '@apollo/client'
import Cookies from 'js-cookie'

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  credentials: 'include',
  headers: {
    authorization: Cookies.get('jwt') || '',
  },
})
