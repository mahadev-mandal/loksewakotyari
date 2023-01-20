import { Button, Stack, TextField, } from '@mui/material'
import { useForm } from 'react-hook-form'
import SingleSelect from '../../../../components/Select/SingleSelect'
import { userValidationSchema } from '../../../../utils/userValidationSchema'
import { yupResolver } from '@hookform/resolvers/yup';
import { gql, useMutation } from '@apollo/client';
import useToastHandler from '../../../../hooks/useToastHandler';
import React from 'react';
import { GET_USERS } from '.';

const user = [
  { label: "First Name", type: 'text', id: 'firstName' },
  { label: "Last Name", type: 'text', id: 'lastName' },
  {
    label: "User Role", type: 'select', id: 'role',
    options: [
      { label: 'Normal', value: 0 },
      { label: 'Admin', value: 1 },
      { label: 'Super Admin', value: 2 }
    ]
  },
  { label: "Mobile No", type: 'text', id: 'mobile' },
  { label: "Email", type: 'text', id: 'email' },
  { label: "Password", type: 'text', id: 'password' },
]
const initialValues = {
  firstName: '',
  lastName: '',
  role: '',
  mobile: '',
  email: '',
  password: ''
}

const ADD_USER = gql`
  mutation addUser(
    $firstName:String!,
    $lastName:String,
    $mobile:String,
    $role:String!,
    $email:String!,
    $password:String!,
  ){
    addUser(
      firstName:$firstName,
      lastName:$lastName,
      mobile:$mobile,
      role:$role,
      email:$email,
      password:$password,
    ){
      code
      success
      message
    }
  }
`

function AddUser() {
  const toastId = React.useRef(null);
  const customToast = useToastHandler(toastId);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(userValidationSchema),
    mode: 'onBlur',
  })

  const [addUser] = useMutation(ADD_USER, {
    update(cache, { data: { addUser } }) {
      customToast.dataToast(addUser);
      if (addUser.success) {
        reset();
      }
    },
    onError: err => {
      customToast.errorToast(err)
    },
    refetchQueries: [
      { query: GET_USERS },
      'getUsers'
    ],
  })
  const handleFormSubmit = (d) => {
    customToast.loadingToast();
    addUser(
      { variables: d }
    )
  }
  return (
    <>
      <Stack spacing={1.5}>
        {user.map((usr) => (
          usr.type == 'select' ? <SingleSelect
            key={usr.id}
            label="Select-user-role"
            register={register}
            data={usr}
            error={errors[usr.id]}
            helperText={errors?.[usr.id]?.message}
          /> : <TextField
            key={usr.id}
            label={usr.label}
            type={usr.type}
            {...register(usr.id)}
            error={errors[usr.id]}
            helperText={errors?.[usr.id]?.message}
          />

        ))}
        <Button
          variant="contained"
          onClick={handleSubmit(handleFormSubmit)}
        >
          Add User
        </Button>
      </Stack>
    </>
  )
}

export default AddUser