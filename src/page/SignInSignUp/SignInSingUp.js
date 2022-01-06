import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LogoTwitter from "../../assets/twitter_log.png"
import LogoBlackTwitter from "../../assets/twtter.jpeg"

export default function SignInSingUp() {
  return (
    // <div>
    //   <h1>SignInSingUp...</h1>
    // </div>
    <Container className="signin-signup" fluid>
      <Row>
        <LeftComponent />
        <RightComponent />
      </Row>
    </Container>
  )
}

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      {/* <h2>LeftComponent...</h2> */}
      <img src={LogoTwitter} alt="Twitter" />
    </Col>
  );
}

function RightComponent() {
  return (
    <Col className="signin-signup__right" xs={6}>
      {/* <h2>RightComponent...</h2> */}
      <img src={LogoBlackTwitter} alt="Twitter" />
      <h2>Please Register User</h2>
      <Button variant="primary">
        Register
      </Button>
      <Button variant="outline-primary">Login</Button>
    </Col>
  );
}