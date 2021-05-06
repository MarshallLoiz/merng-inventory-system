import { gql } from '@apollo/client'

export const GET_CURRENT_STORE_LOGIN_USER_FOR_HEADER = gql`
  query GetCurrentStoreLoginUser {
    currentStoreLogin {
      storeName
    }
  }
`
