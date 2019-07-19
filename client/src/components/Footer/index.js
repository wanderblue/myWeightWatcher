import React from "react";
import "./style.css";
import { Container, Row, Col, Icon } from "react-materialize"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row id = "teamSassBottom">
          <Col s={6} m={6} l={6}>
            <p className="copyRight">© Copyright Wander Blue 2019</p>
          </Col>
          <Col s={3} m={3} l={3}>
            <p ><a className="footerTerm" href="/"><u>Terms of Use</u></a></p>
          </Col>
          <Col s={3} m={3} l={3}>
            <p><a className="footerTerm" href="/"><u>Privacy Policy</u></a></p>
          </Col>
        </Row>

      </Container>
    </footer>

  );
}
export default Footer
