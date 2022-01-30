import React, { useState } from "react";
import {Row, Col, Form, Button, Spinner} from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
// import {isEmailValid} from "../../utils/validations"
import {signUpApi } from "../../api/auth"

import "./SignUpForm.scss";

export default function SignUpForm(props) {
  const {setShowModal} = props;
  const [ formData, setFormData ] = useState(initialFormValue());
  // const [ signUpLoading, setSignUpLoading ] = useState(false)

  const onSubmit = e => {
    e.preventDefault();
    // console.log(formData);
    // setShowModal(false);

    
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
      if(size(formData.password) < 4) {
        toast.warning("Please enter the password with at least 4 characters")
      } else {
        // signUpLoading(true)
        toast.success("Formvalue input OK.")
        signUpApi(formData).then(response => {
          if(response.code) {
            /* responseにcodeが含まれる場合はエラー */
            toast.warning(response.message);
          } else {
            toast.success("Success user registered");
            /* モーダルを閉じる */
            setShowModal(false);
            /* フォームの入力値を初期化 */
            setFormData(initialFormValue());
          }
        })
        .catch(() => {
          toast.error("An Error Occurred. Internal Server Error!")
        })
        // .finally(() => {

        // })
      }
    }
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // console.log(e.target.value);
  }

  return (
    <div className="sign-up-form">
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="First Name" 
                name="number"
                defaultValue={formData.number}
                />
            </Col>
            <Col>
              <Form.Control
                type="text" 
                placeholder="Last Name" 
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
          {/* {!signUpLoading ? "Register" : <Spinner animation="border" />} */}
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