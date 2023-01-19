import { gql, useQuery } from "@apollo/client";


const GET_ME = gql`
  query getLoggedinUser{
    getLoggedinUser{
      firstName
      lastName
      role
    }
  }
`
const useGetMe = () =>{
  return useQuery(GET_ME)
}
export default useGetMe;