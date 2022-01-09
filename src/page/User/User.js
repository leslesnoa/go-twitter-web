import React, {useState, useEffect} from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import { getUserApi } from "../../api/user";
import BannerAvatar from "../../components/User/BannerAvatar";
import useAuth from "../../hooks/useAuth";
import InfoUser from "../../components/InfoUser/InfoUser";
import {getUserTweetsApi} from "../../api/tweet";
import ListTweets from "../../components/ListTweets/ListTweets";

function User(props) {
  const { match } = props;
  // console.log(match.params.id);
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState(null)
  const { params } = match;
  // console.log(user);
  const logginedUser = useAuth();
  // console.log(logginedUser);

  // console.log(tweets);

  useEffect(() => {
    getUserApi(params.id).then(response => {
      if (!response) toast.error("Internal Server Error. user no exist");
      // console.log(response);
      setUser(response);
    }).catch(() => {
      toast.error("Internal Server Error. user no exist");
    });
  }, [params]);

  useEffect(() => {
    getUserTweetsApi(params.id, 1)
      .then(response => {
        setTweets(response);
      })
      .catch(() => {
        setTweets([]);
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
      <div className="user__tweets">
        <h3>Tweets</h3>
        {tweets && <ListTweets tweets={tweets} />}
      </div>
    </BasicLayout>
  );
}

export default withRouter(User)