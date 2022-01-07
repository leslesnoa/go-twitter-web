import React, { useState } from "react";
import {Row, Col, Form, Button, Spinner} from "react-bootstrap";

export default function SignUpForm(props) {
  const {setShowModal} = props;
  const [ formData, setFormData ] = useState(initialFormValue());

  const onSubmit = e => {
    e.preventDefault();
    setShowModal(false);

    console.log(formData);
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // console.log(e.target.value);
  }

  return (
    <div className="sign-up-form">
      <h2>Signupform...</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Number" 
                name="number"
                defaultValue={formData.number}
                />
            </Col>
            <Col>
              <Form.Control
                type="text" 
                placeholder="Name" 
                name="name"
                defaultValue={formData.name}
                />
            </Col>
            <Col>
              <Form.Control 
                type="email" 
                placeholder="Email" 
                name="email"
                defaultValue={formData.email}
              />
            </Col>
            <Col>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                name="password"
                defaultValue={formData.password}
                />
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

function initialFormValue() {
  return {
    number: "",
    name: "",
    email: "",
    password: ""
  };
}