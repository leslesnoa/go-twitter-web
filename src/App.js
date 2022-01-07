// import './App.css';
import React, { useState, useEffect } from "react";
import SignInSingUp from './page/SignInSignUp';
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/contexts";
import { isUserLoginedApi } from "./api/auth";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(isUserLoginedApi());
    // console.log(isUserLoginedApi());
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {user ? <h1>Logined</h1> : <SignInSingUp />}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />

    </AuthContext.Provider>
  )
}

