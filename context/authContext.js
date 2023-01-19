import React,
{
  createContext,
  useContext,
  useReducer
} from "react";
import PropTypes from 'prop-types';
import Cookies from "js-cookie";
import { AuthInitialState, AuthReducer } from "./authReducer";
import client from '../lib/apolloClient';

const AuthContext = createContext(AuthInitialState);

export const AuthWrapper = ({ children }) => {

  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);

  const login = (userData) => {
    if (userData) {
      Cookies.set('loksewa-token', userData.token);
      dispatch({
        type: 'LOGIN',
        payload: userData
      })
      client.refetchQueries({ include: 'active' })
      return true
    }
    return false
  }
  
  const logout = () => {
    Cookies.remove('loksewa-token');
    dispatch({
      type: 'LOGOUT',
    })
    return true
  }

  return <AuthContext.Provider value={{ user: state.user, login, logout }}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
  return useContext(AuthContext);
}

AuthWrapper.propTypes = {
  children: PropTypes.object,
}