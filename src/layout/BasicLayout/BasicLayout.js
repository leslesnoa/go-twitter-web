import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftMenu from "../../components/LeftMenu";

export default function BasicLayout(props) {
  const { className, children } = props;

  return (
    <Container className={`basic-layout ${className}`}>
      <Row>
        <Col xs={3} className="basic-layout__menu">
          {/* <h2>Menu...</h2> */}
          <LeftMenu />
        </Col>
        <Col xs={9} className="basic-layout__content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}