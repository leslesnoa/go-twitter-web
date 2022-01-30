import React, {useState, useEffect} from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import { getUserApi } from "../../api/user";
import BannerAvatar from "../../components/User/BannerAvatar";
import useAuth from "../../hooks/useAuth";
import InfoUser from "../../components/User/InfoUser";
import {getUserTweetsApi} from "../../api/tweet";
import ListTweets from "../../components/ListTweets/ListTweets";

import "./User.scss";

function User(props) {
  const { match, setRefreshCheckLogin } = props;
  // console.log(match.params.id);
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState(null)
  const { params } = match;
  // console.log(user);
  const logginedUser = useAuth();

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
    <BasicLayout className="user" setRefreshCheckLogin={setRefreshCheckLogin}>
      <div className="user__title">
        <h2> 
          {user ? `${user.number} ${user.name}` : "ユーザが存在しません"}
          さんのプロフィール画面
        </h2>
      </div>
      <BannerAvatar user={user} logginedUser={logginedUser} />
      <InfoUser user={user} />
      <div className="user__tweets">
        <h3>直近の投稿</h3>
        {tweets && <ListTweets tweets={tweets} />}
      </div>
    </BasicLayout>
  );
}

export default withRouter(User)