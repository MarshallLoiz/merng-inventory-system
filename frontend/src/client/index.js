import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
  credentials: 'include',
})

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('jwt')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
