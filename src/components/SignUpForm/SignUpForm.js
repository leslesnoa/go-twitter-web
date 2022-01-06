import React from "react";
import {Row, Col, Form, Button, Spinner} from "react-bootstrap";

export default function SignUpForm(props) {
  const {setShowModal} = props;


  const onSubmit = () => {
    // e.preventDefault();
    setShowModal(false)
  };

  return (
    <div className="sign-up-form">
      <h2>Signupform...</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="FirstName" />
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Email" />
            </Col>
            <Col>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}