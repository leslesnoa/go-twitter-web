import React, {useState, useEffect} from "react";
import { getUserApi } from "../../api/user";
// import {Media, Image} from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { API_HOST } from "../../utils/constant";

export default function User(props) {
  const { user } = props;
  // console.log(user);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUserApi(user.id).then(response => {
      // console.log(response);
      setUserInfo(response);
    })
  }, [user])

  return (
    // <Media as={Link} to={`${user.id}`} className="list-users__user"></Media>
    <a href={`/${user.id}`}>{user.name}</a>
  );
}