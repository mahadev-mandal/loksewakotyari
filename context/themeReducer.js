import { setMyLocalStorage } from '../controllers/clientControllers/localStorageHandler';

const defaultTheme = {
  palette: {
    mode: 'light',
  },
  typography: {
    // fontSize: 16,
    h1: {
      fontSize: '32px',
    },
    h2: {

    },
    h3: {
      fontWeight: 700,
      fontSize: '2.2rem'
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem'
    },
    h5: {
      fontWeight: 500
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      // fontStyle: 'italic',
    }
  }
}
export const myThemeStyle = {
  lightTheme: {
    ...defaultTheme,
    palette: {
      mode: 'light'
    }
  },
  darkTheme: {
    ...defaultTheme,
    palette: {
      mode: 'dark'
    }
  }
}

export const InitialTheme = {
  themeName: 'lightTheme',
  actionType: 'SET_LIGHT_THEME'
}

const actionTypes = {
  SET_LIGHT_THEME: 'SET_LIGHT_THEME',
  SET_DARK_THEME: 'SET_DARK_THEME',
}

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LIGHT_THEME:
      setMyLocalStorage('loksewa-theme', JSON.stringify({
        themeName: 'lightTheme',
        actionType: 'SET_LIGHT_THEME'
      }));
      return {
        themeName: 'lightTheme',
        actionType: 'SET_LIGHT_THEME',
      }
    case actionTypes.SET_DARK_THEME:
      setMyLocalStorage('loksewa-theme', JSON.stringify({
        themeName: 'darkTheme',
        actionType: 'SET_DARK_THEME',
      }));
      return {
        themeName: 'darkTheme',
        actionType: 'SET_DARK_THEME',
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}