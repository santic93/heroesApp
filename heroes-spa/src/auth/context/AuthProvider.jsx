import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

export const AuthProvider = ({ children }) => {
  const initialState = {
    logged: false,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
