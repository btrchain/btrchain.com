import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./Contact.css";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <div className="contactbg">
        <p className="h2 text-center py-5">Contact Us</p>
      </div>
      <Container className="pb-5 pt-3">
        <Row>
          <Col md="4" className="d-flex justify-content-center">
            <div className="m-auto justify-content-center">
              <p className="h3">Our Address</p>
              <p>
                11, H.No 95, Saidulajab, <br></br>
                Saket PO Mehrauli,<br></br>
                New Delhi 110030.
              </p>
              <br></br>
              <p className="h5">Email us</p>
              <a
                href="mailto:btrchain@gmail.com"
                className="text-decoration-none"
              >
                <p>
                  <MdEmail /> btrchain@gmail.com
                </p>
              </a>
              <p className="h5">Quick Call</p>
             
              <a href="tel:+91-7037908029" className="text-decoration-none">
                <p>
                  <MdPhone /> +91-7037908029
                </p>
              </a>
            </div>
          </Col>
          <Col md="8">
            <Form>
              <Row>
                <Col md="6">
                  <Form.Group className="mb-3 h6" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="h6" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Form.Group
                    className="mb-3 pt-2 h6"
                    controlId="formBasicMobile"
                  >
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter mobile number"
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Label className="mb-3 h6">Subject</Form.Label>
                  <Form.Control as="select">
                    <option>Select Subject</option>
                    <option>Development</option>
                    <option>Deployment</option>
                    <option>Business</option>
                    <option>Other</option>
                  </Form.Control>
                </Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Row>
              <Button className="btn-demo">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
