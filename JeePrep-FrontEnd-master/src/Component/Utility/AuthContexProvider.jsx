import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const[role,setrole] = useState('admin');
  const value = { isLoggedIn, setIsLoggedIn,role,setrole};
  console.log(isLoggedIn);
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

