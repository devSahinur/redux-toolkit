import React from "react";
import { Card, Col } from "antd";

function User({ name, username, email, phone }) {
  const { Meta } = Card;
  return (
    <Col span={8}>
      <Card hoverable style={{ margin: "10px" }}>
        <Meta title={name} description={email} />
      </Card>
    </Col>
  );
}

export default User;
