import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import queryString from "query-string";
import BasicLayout from "../../layout/BasicLayout";
import { Spinner, ButtonGroup, Button } from "react-bootstrap";
import { getFollowsApi } from "../../api/follow";
import ListUsers from "../../components/ListUsers/ListUsers";

import "./Users.scss";

function Users(props) {
  // console.log(props);
  const { location, history } = props;
  const [users, setUsers] = useState(null);
  const params = useUsersQuery(location);
  const [kindUser, setKindUser] = useState(params.kind || "follow");
  // const params = location;
  // console.log(params);
  // console.log(queryString.stringify(params));

  useEffect(() => {
    getFollowsApi(queryString.stringify(params))
      .then(response => {
        // console.log(response);
        if (isEmpty(response)) {
          setUsers([]);
        } else {
          setUsers(response)
        }
      }).catch(() => {
        setUsers([]);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const onChangeKind = kind => {
    setUsers(null);
    if(kind === "new") {
      setKindUser("new");
    } else {
      setKindUser("follow");
    }

    history.push({
      search: queryString.stringify({ kind: kind, page:1, search: ""})
    })
  };


  return (
    <BasicLayout className="users" title="Users">
      <div className="users__title">
        <input 
          type="text"
          placeholder="名前で検索する"
          onChange={(e) => history.push({ search: queryString.stringify({...params, search: e.target.value, page: 1}) })}
        />
      </div>
      <ButtonGroup className="users__options">
        <Button onClick={() => onChangeKind("follow")}>
          フォロー中のユーザー
        </Button>
        <Button onClick={() => onChangeKind("new")}>
          未フォローのユーザー
        </Button>
      </ButtonGroup>

      <ListUsers users={users} />

    </BasicLayout>
  );
}

export default withRouter(Users);

function useUsersQuery(location) {
  const { page =1, kind = "follow", search = "" } = queryString.parse(
    location.search
  );

  return {page, kind, search};
}