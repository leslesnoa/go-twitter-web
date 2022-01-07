// import './App.css';
import React, { useState } from "react";
import SignInSingUp from './page/SignInSignUp';
import { ToastContainer } from "react-toastify";

export default function App() {
  const [user, setUser] = useState({
    name: "hogehoge"
  });

  return (
    <div>
      {user ? (
        <div>
          <SignInSingUp />
        </div>
      ) : (
          <h1>no logined</h1>
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

    </div>
  )
}

