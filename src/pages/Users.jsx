import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from "../store/features/user/userSlice";

import { Button, Row, Col, Typography } from "antd";
import User from "./User";

function Users() {
  const { Text, Title } = Typography;

  const dispatch = useDispatch();
  const { result: userResult, loading: userLoading } = useSelector(
    (state) => state.user
  );
  const onFetchUser = () => {
    dispatch(fetchUser());
  };

  const users =
    userResult &&
    userResult.map((user, index) => <User {...user} key={index} />);
  return (
    <Row>
      <Title>Users List</Title>
      <Col span={24}>
        <Button type="primary" shape="round" size="large" onClick={onFetchUser}>
          fetchUsers
        </Button>
      </Col>
      {userLoading ? <Text mark>Loading ...</Text> : users}
    </Row>
  );
}

export default Users;
