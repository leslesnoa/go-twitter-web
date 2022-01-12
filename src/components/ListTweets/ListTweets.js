import React, {useState, useEffect} from "react";
import {Image} from "react-bootstrap";
import { map } from "lodash";
import moment from "moment";
import AvatarNoFound from "../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../utils/constant";
import { getUserApi } from "../../api/user";

import "./ListTweets.scss";

export default function ListTweets(props) {
  const { tweets } = props;
  // console.log(tweets);

  return (
    <div className="list-tweets">
      {map(tweets, (tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
}

function Tweet(props) {
  const { tweet } = props;
  const [userInfo, setUserInfo] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  console.log(tweet);
  // console.log(userInfo);

  useEffect(() => {
    // const userId = tweet.user_Id ? tweet.user_Id : tweet.userId;
    getUserApi(tweet.user_id).then(response => {
      // console.log(response);
      setUserInfo(response)
      setAvatarUrl(
        response?.avatar
          ? `${API_HOST}/getAvatar?id=${response.id}`
          : AvatarNoFound
      );
    });
  }, [tweet])

  return (
    <div className="tweet">
      <Image className="avatar" src={avatarUrl} roundedCircle />
      <div>
        <div className="name">
          {userInfo?.number} {userInfo?.name}
          <span>{moment(tweet.date).calendar()}</span>
        </div>
        <div>{tweet.message}</div>
      </div>
    </div>
  )
}