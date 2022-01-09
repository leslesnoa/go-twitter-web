import React from "react";
import moment from "moment";
import localization from "moment/locale/ja";

export default function InfoUser(props) {
  const { user } = props;
  // console.log(user);

  return (
    <div className="info-user">
      <h2 className="name">Infouser...</h2>
        {user?.number} {user?.name}
      <p className="email">{user?.email}</p>
      {user?.birth && <div className="discription">{moment(user.birth).locale("ja", localization).format("LL")}</div>}
    </div>
  );
}