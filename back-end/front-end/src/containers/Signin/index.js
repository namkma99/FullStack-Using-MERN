import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import Layout from '../../components/Layout/index';
import Input from '../../components/UI/Input/index';

const Signin = () => {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col md={{span : 6, offset: 3}}>
            <Form>
              <Input 
                label='Email'
                placeholder='Email'
                type='text'
                value=''
              />

              <Input 
                label='Password'
                placeholder='Password'
                type='text'
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

export default Signin;
