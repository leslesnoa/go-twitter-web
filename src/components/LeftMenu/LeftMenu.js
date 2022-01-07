import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoTwitter from "../../assets/twitter_log.png"
import { logoutApi } from "../../api/auth";

export default function LeftMenu() {

  const logout = () => {
    logoutApi();
    window.location.reload();
  };

  return (
    <div className=""left-menu>
      <img className="logo" src={LogoTwitter} alt="Twitter" />

      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/profile">Profile</Link>
      {/* <Link to="/logout">Logout</Link> */}
      <Link to="" onClick={logout}>Logout</Link>

      <Button>Tweet</Button>
    </div>
  );
}