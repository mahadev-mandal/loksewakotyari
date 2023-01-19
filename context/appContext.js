import React,
{
  createContext,
  useContext,
  useMemo,
  useReducer
} from "react";
import PropTypes from 'prop-types';
import { AppReducer, AppInitialState } from "./appReducer";

export const AppContext = createContext(AppInitialState);

export const AppWrapper = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, AppInitialState);
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  return useContext(AppContext);
}

AppWrapper.propTypes = {
  children: PropTypes.object,
}


//use it
// import { useAppContext } from '../redux/store';

// const {state, dispatch} = useAppContext();

// dispatch({type: "SET_HAMBURGER_OPEN", payload: !state.hamburgerOpen,});