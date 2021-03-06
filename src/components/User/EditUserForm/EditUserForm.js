import React, {useState} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateInfoApi } from "../../../api/user";

import "./EditUserForm.scss";

export default function EditUserForm(props) {
  const {user, setShowModal} = props;
  const [formData, setFormData] = useState(initialValue(user))

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const onSubmit = e => {
    e.preventDefault();

    updateInfoApi(formData).then(() => {
      setShowModal(false);
    })
    .catch(() => {
      toast.error("Error updating data")
    })
    .finally(() => {
      window.location.reload();
    });
  };

  return (
    <div className="edit-user-form">
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Number" name="number" defaultValue={formData.number} />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Name" name="name" defaultValue={formData.name} />
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Email" name="email" defaultValue={formData.email} />
            </Col>
          </Row>
          <Button className="btn-submit" variant="primary" type="submit">
            適用
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

function initialValue(user) {
  return {
    number: user.number || "",
    name: user.name || "",
    email: user.email || "",
  }
}