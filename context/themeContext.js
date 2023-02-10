import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Proptypes from 'prop-types';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { getMyLocalStorage } from '../controllers/clientControllers/localStorageHandler';
import { ThemeReducer, myThemeStyle, InitialTheme } from './themeReducer';

export const ThemeContext = createContext(InitialTheme);

export const ThemeWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, InitialTheme);

  const themeState = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch]);

  useEffect(() => {
    let setInitTheme = async () => {
      let getSavedTheme = await getMyLocalStorage('loksewa-theme')
      dispatch({ type: JSON.parse(getSavedTheme)?.actionType ?? InitialTheme.actionType })
    }
    setInitTheme()
  }, [])

  let theme = createTheme(myThemeStyle[state.themeName]);
  return <ThemeContext.Provider value={themeState}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </ThemeContext.Provider>
};

export function useThemeContext() {
  return useContext(ThemeContext);
}

ThemeWrapper.propTypes = {
  children: Proptypes.object,
}