// import './App.css';
import React, { useState } from "react";
import SignInSingUp from './page/SignInSignUp';

export default function App() {
  const [user, setUser] = useState({
    name: "hogehoge"
  });

  return (
    <div>
      {user ? (
        <div>
          <SignInSingUp />
        </div>) : 
          (<h1>no logined</h1>)}
    </div>
  )
}

