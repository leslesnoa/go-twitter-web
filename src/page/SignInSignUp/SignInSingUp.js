import React, {useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components//SignInForm";
import LogoTwitter from "../../assets/twitter_log.png";
import LogoBlackTwitter from "../../assets/twtter.jpeg";
import LogoWhiteTwitter from "../../assets/png/twitter_log001.png";

import "./SignInSignUp.scss";

export default function SignInSingUp(props) {
  const {setRefreshCheckLogin} = props;
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = content => {
    setShowModal(true);
    setContentModal(content);
  };

  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent
            openModal={openModal} 
            setShowModal={setShowModal}
            setRefreshCheckLogin={setRefreshCheckLogin}
          />
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  )
}

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={LogoWhiteTwitter} alt="Twitter" />
      {/* <img src={LogoTwitter} alt="Twitter" /> */}
      <div>
        <h3>Demo user...</h3>
        <h5>Email: test@example.com</h5>
        <h5>PW: password</h5>
        <h2>採用技術一覧</h2>
        <ul>
          <li>
            <h2>React</h2>
          </li>
          <li>
            <h2>Golang</h2>
          </li>
          <li>
            <h2>mongoDB</h2>
          </li>
          <li>
            <h2>Docker</h2>
          </li>
          <li>
            <h2>Kubernetes</h2>
          </li>
          <li>
            <h2>EKS</h2>
          </li>
        </ul>
      </div>
    </Col>
  );
}

function RightComponent(props) {
  const { openModal, setShowModal, setRefreshCheckLogin } = props;

  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
      <img src={LogoTwitter} alt="Twitter" />
      {/* <img src={LogoBlackTwitter} alt="Twitter" /> */}
      <h2>Look what is happening in the world right now</h2>
      <h3>Join Twitter.</h3>
      <Button variant="primary"
        onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
      >
        Register
      </Button>
      <Button variant="outline-primary"
        onClick={() => openModal(<SignInForm setRefreshCheckLogin={setRefreshCheckLogin} />)}
      >
        Login
      </Button>
      </div>
    </Col>
  );
}