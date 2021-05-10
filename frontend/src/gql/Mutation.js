import { gql } from '@apollo/client'

export const LOGIN_STORE = gql`
  mutation LoginStore($data: LoginStoreData!) {
    loginStore(data: $data) {
      token
      store {
        id
        areaCode
        storeName
        storeAddress
        otherDetails
      }
    }
  }
`

export const LOGOUT_STORE = gql`
  mutation {
    logoutStore
  }
`

export const CREATE_STORE = gql`
  mutation CreateStore($data: CreateStoreData!) {
    createStore(data: $data) {
      token
      store {
        id
        areaCode
        storeName
        storeAddress
        otherDetails
      }
    }
  }
`
export const CREATE_STAFF = gql`
  mutation CreateStaff($data: CreateStaffData!) {
    createStaff(data: $data) {
      id
      firstName
      lastName
      gender
      officePhone
      email
      dateOfJoin
      dateOfBirth
      address
    }
  }
`
