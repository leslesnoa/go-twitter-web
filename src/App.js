// import './App.css';
import React, { useState, useEffect } from "react";
import SignInSingUp from './page/SignInSignUp';
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/contexts";
import { isUserLoginedApi } from "./api/auth";

export default function App() {
  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLoginedApi());
    // console.log(isUserLoginedApi());
    setRefreshCheckLogin(true);
    setLoadUser(true);
  }, [refreshCheckLogin]);

  if(!loadUser) return null;

  return (
    <AuthContext.Provider value={user}>
      {user ? (
        <h1>Logined</h1> 
      ) : (
        <SignInSingUp setRefreshCheckLogin={setRefreshCheckLogin} />
      )}
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

