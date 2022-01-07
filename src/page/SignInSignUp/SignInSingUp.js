import React, {useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components//SignInForm";
import LogoTwitter from "../../assets/twitter_log.png"
import LogoBlackTwitter from "../../assets/twtter.jpeg"

export default function SignInSingUp() {
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
      {/* <h2>LeftComponent...</h2> */}
      <img src={LogoTwitter} alt="Twitter" />
    </Col>
  );
}

function RightComponent(props) {
  const { openModal, setShowModal } = props;

  return (
    <Col className="signin-signup__right" xs={6}>
      {/* <h2>RightComponent...</h2> */}
      <img src={LogoBlackTwitter} alt="Twitter" />
      <h2>Please Register User</h2>
      <Button variant="primary"
        onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
      >
        Register
      </Button>
      <Button variant="outline-primary"
        onClick={() => openModal(<SignInForm />)}
      >
        Login
      </Button>
    </Col>
  );
}