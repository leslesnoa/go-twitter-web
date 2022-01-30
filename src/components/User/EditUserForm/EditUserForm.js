import React, {useState, useCallback} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { updateInfoApi } from "../../../api/user";
import { API_HOST } from "../../../utils/constant";
import { Camera } from "../../../utils/Icons";

import "./EditUserForm.scss";

export default function EditUserForm(props) {
  const {user, setShowModal} = props;
  const [formData, setFormData] = useState(initialValue(user))
  // console.log(formData);
  // const [bannerUrl, setBannerUrl] = useState(
  //   user?.banner ? `${API_HOST}/getBanner?id=${user.id}` : null
  // );

  // const onDropBanner = useCallback(acceptedFile => {
  //   console.log(acceptedFile);
  // })
  // const {
  //   getRootProps: getRootBannerProps,
  //   getInputProps: getInputBannerProps
  // } = useDropzone({
  //   accept: "image/jpeg, image/png",
  //   noKeyboard: true,
  //   multiple: false,
  //   onDrop: onDropBanner
  // });

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
      {/* <div 
        className="banner"
        style={{ backgroundImage: `url('${bannerUrl}')` }}
        {...getRootBannerProps()}
      ></div> */}

        {/* <Camera /> */}
        {/* <input {...getInputBannerProps()} /> */}
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