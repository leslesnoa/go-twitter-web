import React, {useState, useEffect} from "react";
import BasicLayout from "../../layout/BasicLayout";
import { getTweetsFollowersApi } from "../../api/tweet";
import ListTweets from "../../components/ListTweets/ListTweets";

import "./Home.scss";

export default function Home(props) {
  const { setRefreshCheckLogin } = props;
  const [tweets, setTweets] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTweetsFollowersApi(page).then((response) => {
      // console.log(response);
      if (!tweets && response) {
        setTweets(formatModel(response));
      } else {
        const data = formatModel(response);
        setTweets([...tweets, ...data]);
      }
    })
    .catch(() => {});
  }, [])
  // [page])

  return (
      <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin}>
        <div className="home__title">
          <h2>Timeline</h2>
        </div>
        <p>Your Following Tweets List</p>
        {tweets && <ListTweets tweets={tweets} />}
      </BasicLayout>
  );
};

function formatModel(tweets) {
  const tweetsTemp = [];
  tweets.forEach((tweet) => {
    tweetsTemp.push({
      _id: tweet._id,
      user_id: tweet.user_relation_id,
      message: tweet.Tweet.message,
      date: tweet.Tweet.date,
    })
  });
  return tweetsTemp;
}