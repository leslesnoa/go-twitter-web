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
  const {location} = props;
  const [users, setUsers] = useState(null);
  const params = useUsersQuery(location);
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
  }, [])


  return (
    <BasicLayout className="users" title="Users">
      <div className="users__title">
        <h2>Users...</h2>
        <p>Input Search</p>
        <input 
          type="text"
          placeholder="useres"
        />
      </div>
      <ButtonGroup className="users__options">
        <Button>
          Follow
        </Button>
        <Button>
          New
        </Button>
      </ButtonGroup>

      <ListUsers users={users} />

    </BasicLayout>
  );
}

export default withRouter(Users);

function useUsersQuery(location) {
  const { page =1, kind = "follow", search } = queryString.parse(
  // const { page =1, type = "follow", search= "" } = queryString.parse(
    location.search
  );

  return {page, kind, search};
}