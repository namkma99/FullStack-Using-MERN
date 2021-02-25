import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import Layout from "../../components/Layout/index";
import Input from '../../components/UI/Input/index';


const Signup = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                <Input 
                label='FirstName'
                placeholder='FirstName'
                type='text'
                value=''
              />
                </Col>
                <Col md={6}>
                <Input 
                label='LastName'
                placeholder='LastName'
                type='text'
                value=''
              />
                </Col>
              </Row>
              <Input 
                label='Email address'
                placeholder='Enter email'
                type='text'
                value=''
              />
              <Input 
                label='Password'
                placeholder='Password'
                type='password'
                value=''
              />
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
