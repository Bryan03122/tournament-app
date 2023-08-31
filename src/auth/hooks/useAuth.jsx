import { useReducer } from "react";
import { getAuthenticatedUser } from "../services/firebase-auth-service";

const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { user: action.payload };
    case actionTypes.LOGOUT:
      return { user: null };
  }
};

export const useAuth = () => {
  const initFunc = () => {
    const user = getAuthenticatedUser();

    return { user };
  };
  const [state, dispatch] = useReducer(authReducer, null, initFunc);

  const login = (user) => {
    dispatch({ type: actionTypes.LOGIN, payload: user });
  };
  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };

  return {
    login,
    logout,
    authenticatedUser: state,
  };
};
