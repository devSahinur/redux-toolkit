import React from "react";
import { Counter } from "./features/counter/Counter";
import { Row, Col, Image } from "antd";
import illustration from "./assets/illustration.png";
import Login from "./components/Login";
import Logo from "./assets/Logo.png";

function App() {
  return (
    <div>
      <Row justify="center">
        <Col span={12}>
          <Image width={120} height={116} src={Logo} />
          <Image width={1010} height={660} src={illustration} />
        </Col>
        <Col span={12}>
          <Login />
        </Col>
      </Row>
    </div>
  );
}

export default App;
