import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "./../Firebase/firebase";
export const AuthContext = createContext();

function ContextProvider({ children }) {
  //creat user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const contextData = {
    createUser,
  };
  return <AuthContext value={contextData}>{children}</AuthContext>;
}

export default ContextProvider;
