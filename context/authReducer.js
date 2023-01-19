export const AuthInitialState = {
  user: { token: 'abc', role: 'admin' },
  login: () => { },
  logout: () => { },
};

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state
  }
};
