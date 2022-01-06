import React, { Children } from "react";
import {Modal} from "react-bootstrap";
import LogoTwitter from "../../../assets/twitter_log.png"

export default function BasicModal(props) {
  const {show, setShow, children} = props;

  return (
    // <div>
    //   <h1>BasicModal...</h1>
    // </div>
    <Modal
    className="basic-modal"
    show={show}
    onHide={() => setShow(false)}
    centered
    size="lg"
    >
      <Modal.Header>
        <Modal.Title>
          <img src={LogoTwitter} alt="Twitter" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}