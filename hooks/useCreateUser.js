import { gql, useMutation } from "@apollo/client";


const  CREATE_USER=gql`
  mutation createUser($createUserData:CreateUserInput!){
    createUser(createUserData:$createUserData){
      _id
      email
    }
  }
`
const useCreateUser = ()=>{
  return useMutation(CREATE_USER,{
  });
}
export default useCreateUser;