import { gql } from '@apollo/client'

export const LOGIN_STORE = gql`
  mutation LoginStore($data: LoginStoreData!) {
    loginStore(data: $data) {
      token
      store {
        id
        areaCode
        storeName
        storeLocation
        storeAddress
        otherDetails
      }
    }
  }
`
