import React from "react";
import { Row, Col, Image, Layout } from "antd";
import illustration from "./assets/illustration.png";
import Login from "./pages/Login";
import Logo from "./assets/Logo.png";
import Counter from "./components/Counter";
import Users from "./components/Users";

function App() {
  const { Content } = Layout;
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <div
          style={{ background: "#fff", padding: "24px", minHeight: "280px" }}
        >
          <Users />
          <Counter />
        </div>
      </Content>
    </Layout>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       {/* <Row justify="center">
//         <Col span={12}>
//           <Image width={120} height={116} src={Logo} />
//           <Image width={1010} height={660} src={illustration} />
//         </Col>
//         <Col span={12}>
//           <Login />
//         </Col>
//       </Row> */}
//       <Counter />
//       <Users />
//     </div>
//   );
// }

// export default App;

// <Row justify="center container" className="mx-auto my-20">
// <Col
//   span={12}
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
    
//   }}
// >
//   <img src={illustration} alt="illustration" />
// </Col>
// <Col span={12}>
//   <Login />
// </Col>
// </Row>