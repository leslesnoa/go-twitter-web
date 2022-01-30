import React from "react";
import { map, isEmpty } from "lodash";
import User from "./User";

import "./ListUsers.scss";

export default function ListUsers(props) {
  const { users } = props;

  // console.log(users);
  if(isEmpty(users)) {
    return <h2>ユーザーが存在しません</h2>
  }

  return (
    <ul className="">
      {map(users, user => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
}