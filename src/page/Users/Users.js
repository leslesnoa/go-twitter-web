import React from "react";
import BasicLayout from "../../layout/BasicLayout";

export default function Users(props) {
  console.log(props);
  return (
    <BasicLayout className="users" title="Users">
      <h2>Users...</h2>
    </BasicLayout>
  );
}