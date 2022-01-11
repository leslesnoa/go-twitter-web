import React from "react";
import { map, isEmpty } from "lodash";
import User from "./User";

import "./ListUsers.scss";

export default function ListUsers(props) {
  const { users } = props;

  // console.log(users);
  if(isEmpty(users)) {
    return <h2>Not find results</h2>
  }

  return (
    <ul className="">
      {map(users, user => (
        // <h2 key={user.id}>{user.number}  {user.name}</h2>
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
}