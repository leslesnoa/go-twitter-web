import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoTwitter from "../../assets/twitter_log.png"
import { logoutApi } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import TweetModal from "../Modal/TweetModal/TweetModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faUsers,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="left-menu">
      <img className="logo" src={LogoTwitter} alt="Twitter" />
        <Link to="/">
          <FontAwesomeIcon icon={faHome} /> ホーム</Link>
        <Link to="/users">
        <FontAwesomeIcon icon={faUsers} /> ユーザ一覧</Link>
        <Link to={`/${user?._id}`}>
        <FontAwesomeIcon icon={faUser} /> マイプロフィール</Link>
        <Link to="" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} /> ログアウト</Link>
        <Button onClick={() => setShowModal(true)}>ツイートする</Button>
      <TweetModal show={showModal} setShow={setShowModal} />
    </div>
  );
}