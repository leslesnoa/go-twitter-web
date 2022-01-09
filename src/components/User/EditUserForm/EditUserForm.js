import React, {useState} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function EditUserForm(props) {
  const {user, setShowModal} = props;
  const [formData, setFormData] = useState(initialValue(user))
  console.log(formData);

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const onSubmit = e => {
    e.preventDefault();
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
            {/* <Col>
              <Form.Control type="text" placeholder="DateBirth" name="birth" />
            </Col> */}
          </Row>
          <Button className="btn-submit" variant="primary" type="submit">
            Apply
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