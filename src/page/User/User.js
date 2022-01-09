import React, {useState, useEffect} from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import { getUserApi } from "../../api/user";
import BannerAvatar from "../../components/User/BannerAvatar";
import useAuth from "../../hooks/useAuth";
import InfoUser from "../../components/InfoUser/InfoUser";

function User(props) {
  // console.log(props);
  const { match } = props;
  // console.log(match.params.id);
  const { params } = match;

  const [user, setUser] = useState(null);

  // console.log(user);

  const logginedUser = useAuth();

  // console.log(logginedUser);

  useEffect(() => {
    getUserApi(params.id).then(response => {
      if (!response) toast.error("Internal Server Error. user no exist");
      // console.log(response);
      setUser(response);
    }).catch(() => {
      toast.error("Internal Server Error. user no exist");
    });
  }, [params]);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2> 
          {user ? `${user.number} ${user.name}` : "User no exist"}
        </h2>
        <h2>User...</h2>
      </div>
      <BannerAvatar user={user} logginedUser={logginedUser} />
      <InfoUser user={user} />
      <div className="user__tweets">List Tweets!</div>
    </BasicLayout>
  );
}

export default withRouter(User)