import React from "react";
import moment from "moment";
import localization from "moment/locale/ja";

import "./InfoUser.scss";

export default function InfoUser(props) {
  const { user } = props;
  // console.log(user);

  return (
    <div className="info-user">
      <h2 className="name">ユーザプロフィール詳細</h2>
        名前: {user?.number} {user?.name}
      <p className="email">Eメール: {user?.email}</p>
      {user?.birth && <div className="discription">誕生日: {moment(user.birth).locale("ja", localization).format("LL")}</div>}
    </div>
  );
}