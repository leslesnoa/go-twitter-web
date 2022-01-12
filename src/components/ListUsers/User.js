/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { API_HOST } from "../../utils/constant";
import { getUserApi } from "../../api/user";
import AvatarNoFound from "../../assets/png/avatar-no-found.png";

export default function User(props) {
  const { user } = props;
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUserApi(user.id).then(response => {
      setUserInfo(response);
    })
  }, [user])

  return (
    <div class="media">
      <Link to={`/${user.id}`} className="list-users__user">
    <img class="mr-3" 
      src={userInfo?.avatar ? `${API_HOST}/getAvatar?id=${user.id}` : AvatarNoFound} 
      alt={`${user.number} ${user.name}`} width={64} height={64} 
    />
    </Link>
    <div class="media-body">
      <h5 class="mt-0">
        {user.number} {user.name}
      </h5>
    </div>
  </div>
  );
}