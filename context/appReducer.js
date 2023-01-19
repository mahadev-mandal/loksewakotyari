export const AppInitialState = {
  hamburgerOpen: false,
  isMobile: false,
  isModalOpen: false,
  isBackdropOpen: false,
  backdropText: 'Loading...',
  isLoadingPage: true,
  userInfo: null,
  isLoggedIn: false,
  initStored: {},
  error: {
    origin: null,
    message: null,
  },
};

export const actionTypes = {
  SET_HAMBURGER_OPEN: "SET_HAMBURGER_OPEN",
  SET_IS_MOBILE: "SET_IS_MOBILE",
  SET_IS_MODAL_OPEN: "SET_IS_MODAL_OPEN",
  SET_ERROR: "SET_ERROR",
  SET_IS_LOADING_PAGE: "SET_IS_LOADING_PAGE",
  SET_IS_LOGGED_IN: "SET_IS_LOGGED_IN",
  SET_INIT_STORED: "SET_INIT_STORED",
  SET_USER_INFO: "SET_USER_INFO",
  SET_BACKDROP_OPEN: 'SET_BACKDROP_OPEN',
  SET_BACKDROP_TEXT: 'SET_BACKDROP_TEXT',
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_LOADING_DATA:
      return {
        ...state,
        isLoadingData: action.payload,
      };
    case actionTypes.SET_HAMBURGER_OPEN:
      return {
        ...state,
        hamburgerOpen: action.payload,
      };
    case actionTypes.SET_IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case actionTypes.SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.payload,
      };
    case actionTypes.SET_INIT_STORED:
      return {
        ...state,
        initStored: action.payload,
      };
    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case actionTypes.SET_BACKDROP_OPEN:
      return {
        ...state,
        isBackdropOpen: action.payload,
      };
    case actionTypes.SET_IS_LOADING_PAGE:
      return {
        ...state,
        isLoadingPage: action.payload,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: {
          origin: action.payload.origin,
          message: action.payload.message,
        },
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
