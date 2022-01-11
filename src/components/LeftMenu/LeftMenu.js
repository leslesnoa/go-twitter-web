import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoTwitter from "../../assets/twitter_log.png"
import { logoutApi } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import TweetModal from "../Modal/TweetModal/TweetModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faUser,
//   faUsers,
//   faPowerOff,
// } from "@fortawesome/free-solid-svg-icons";

import "./LeftMenu.scss";

export default function LeftMenu(props) {
  const { setRefreshCheckLogin } = props;
  const [showModal, setShowModal] = useState(false)
  const user = useAuth();

  // console.log(user);

  const logout = () => {
    logoutApi();
    setRefreshCheckLogin(true);
    window.location.reload();
  };

  return (
    <div className=""left-menu>
      <img className="logo" src={LogoTwitter} alt="Twitter" />

      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to={`/${user?._id}`}>Profile</Link>
      {/* <Link to="/logout">Logout</Link> */}
      <Link to="" onClick={logout}>Logout</Link>

      <Button onClick={() => setShowModal(true)}>Tweet</Button>
      <TweetModal show={showModal} setShow={setShowModal} />
    </div>
  );
}