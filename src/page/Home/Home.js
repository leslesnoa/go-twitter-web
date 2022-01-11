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
          <h2>aaaa</h2>
        </div>
        <p>list a Tweets</p>
        {tweets && <ListTweets tweets={tweets} />}
        <h2>Home</h2>
      </BasicLayout>
  );
};

function formatModel(tweets) {
  const tweetsTemp = [];
  tweets.forEach((tweet) => {
    tweetsTemp.push({
      _id: tweet._id,
      userId: tweet.user_relation_id,
      message: tweet.Tweet.message,
      date: tweet.Tweet.date,
    })
  });
  return tweetsTemp;
}