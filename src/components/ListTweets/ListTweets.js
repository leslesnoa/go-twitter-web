import React, {useState, useEffect} from "react";
import {Image} from "react-bootstrap";
import { map } from "lodash";

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
  // console.log(tweet);

  return <h2>{tweet.message}</h2>
}