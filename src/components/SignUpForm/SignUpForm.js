import React, { useState } from "react";
import {Row, Col, Form, Button, Spinner} from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
// import {isEmailValid} from "../../utils/validations"

export default function SignUpForm(props) {
  const {setShowModal} = props;
  const [ formData, setFormData ] = useState(initialFormValue());

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setShowModal(false);

    
    let validCount = 0
    values(formData).some(value => {
      value && validCount++
      return null;
    });

    // console.log(size(formData));

    /* フォームの項目数に満たない場合、入力項目数が足りない旨をバナー表示 */
    if(validCount !== size(formData)) {
      toast.warning("Not complete form imput contents")
    } else {
      if(size(formData.password) < 6) {
        toast.warning("Please enter the password with at least 6 characters")
      } else {
        toast.success("Formvalue input OK.")
      }
    }
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