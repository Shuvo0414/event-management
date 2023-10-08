import PropTypes from "prop-types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../config/firebaseConfig";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    googleLogin,
    name: "shuvo",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
