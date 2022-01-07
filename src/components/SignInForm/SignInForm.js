import React, {useState} from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import {signInApi, setTokenApi } from "../../api/auth";

export default function SignInForm(props) {
  const {setRefreshCheckLogin} = props;
  const [ formData, setFormData ] = useState(initialFormValue());

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);

    let validCount = 0
    values(formData).some(value => {
      value && validCount++
      return null;
    });

    console.log(validCount);
    if(size(formData) !== validCount) {
      toast.warning("You must all input form value");
    } else {
      // if(size(formData.password) < 6) {
      //   toast.warning("Please enter the password with at least 6 characters")
      // }
      toast.success("Form login OK")
      signInApi(formData).then(response => {
        if(response.message) {
          toast.warning(response.message)
        } else {
          // console.log(response.token);
          setTokenApi(response.token);
          setRefreshCheckLogin(true)
        }
      }).catch(() => {
        toast.error("An Error Occurred Internal ServerError")
      })
    }
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in-form">
      <h2>SignInForm...</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Form.Control 
            type="email" 
            placeholder="Email"
            name="email"
            defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            name="password"
            defaultValue={formData.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

/* フォームの初期値 */
function initialFormValue() {
  return {
    email: "",
    password: ""
  }
}