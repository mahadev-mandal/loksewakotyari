import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import Head from 'next/head'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { normalUserLoginSchema } from '../../utils/normalUserLoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { gql, useMutation } from '@apollo/client';
import { useAuthContext } from '../../context/authContext';
import BackDrop from '../../components/backDrop';
import useGetMe from '../../hooks/useGetMe';

const LOGIN_USER = gql`
  mutation getToken($username:String!, $password:String!){
    loginUser(username:$username,password:$password,reqRole:"1"){
      code
      success
      message
      user{
        token
        firstName
        lastName
        role
      }
    }
  }
`

export default function AdminLogin() {
  const router = useRouter();
  const { login } = useAuthContext()
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const { data: currUser, loading: loading1 } = useGetMe()
  if (!loading1 && (currUser?.getLoggedinUser?.role == '1')) {
    router.push('/dashboard')
  }

  const [loginUser1, { called, loading, error }] = useMutation(LOGIN_USER, {
    update(cache, { data: { loginUser } }) {
      if (loginUser?.user?.token && loginUser?.user?.role == '1') {
        let loggedIn = login(loginUser.user);
        if (loggedIn) {
          router.replace('/dashboard');
        }
      } else {
        setErrMsg(loginUser?.message)
        console.log(loginUser?.message)
      }
    },
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(normalUserLoginSchema),
    mode: 'onBlur'
  })

  if (error) {
    console.log(JSON.stringify(error, null, 2))
    // console.log(error.networkError.result.errors)
    return 'errr'
  }
  return (
    <Box sx={{ justifyContent: 'center', display: 'flex' }}>
      <Head>
        <title>Tasks management system</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackDrop open={called && loading} text="Loggin In..." />
      <Paper sx={{
        width: 400,
        padding: 5,
        background: 'rgb(240, 240, 240, 0.5)'
      }}>
        <AccountCircleIcon sx={{ fontSize: 80, m: 'auto', display: 'block' }} /> <br />
        <form>
          <TextField
            fullWidth
            variant='outlined'
            label="username"
            autoComplete="off"
            {...register("username")}
            error={errors.username}
            helperText={errors?.username?.message}
          /> <br /><br />
          <FormControl fullWidth variant="outlined" error={errors.password}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              {...register("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={e => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText error={errors.password}>
              {errors?.password?.message}
            </FormHelperText>
          </FormControl>
          <br />
          <Typography color="red">{errMsg}</Typography>
          <br />
          <Button
            fullWidth
            variant="outlined"
            onClick={handleSubmit(data => loginUser1(
              { variables: data }
            ))}
          >
            Login
          </Button><br /><br />
        </form>
      </Paper>
    </Box >
  )
}