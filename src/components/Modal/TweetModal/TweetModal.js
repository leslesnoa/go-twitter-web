import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Close } from "../../../utils/Icons";
import { toast } from "react-toastify";
import className from "classnames";
import { addTweetApi } from "../../../api/tweet";

import "./TweetModal.scss";

export default function TweetModal(props) {
  const {show, setShow} = props;
  const [message, setMessage] = useState("");
  const maxLength = 200;

  const onSubmit= (e) => {
    e.preventDefault();
    // console.log(message);

    if(message.length > 0 && message.length <= maxLength) {
      addTweetApi(message)
        .then(response => {
          // console.log(response);
          if(response?.code >= 200 && response?.code < 300) {
            toast.success(response.message);
            setShow(false);
            window.location.reload();
          }
        })
        .catch(() => {
          toast.warning("Error sending tweet, try again later")
        });
    };
  };

  return (
    <Modal
      className="tweet-modal"
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>
          <Close onClick={() => setShow(false)} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Control 
            as="textarea"
            rows="6"
            placeholder="please any tweet"
            onChange={(e) => setMessage(e.target.value)}
          />
          <span className="count">
            {message.length}
          </span>
          <Button 
            type="submit"
            disabled={message.length < 1 || message.length > maxLength}
          >
            Tweet</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}