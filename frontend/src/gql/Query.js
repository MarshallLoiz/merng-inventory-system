import { gql } from '@apollo/client'

export const GET_CURRENT_STORE_LOGIN_USER_FOR_HEADER = gql`
  query GetCurrentStoreLoginUser {
    currentStoreLogin {
      storeName
    }
  }
`
export const GET_CURRENT_STORE_LOGIN_USER_ID = gql`
  query GetCurrentStoreLoginUser {
    currentStoreLogin {
      id
    }
  }
`

export const GET_STORE_STAFFS = gql`
  query GetStoreStaffs {
    staffs {
      id
      firstName
      lastName
      gender
      officePhone
      email
      dateOfJoin
      dateOfBirth
      jobTitle
    }
  }
`
