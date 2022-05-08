import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div id='AskQuestion' className='bg-dark text-white'>
            <h2 className='text-center pt-3'>Ask any Question</h2>
            <Form className='w-50 mx-auto mb-3'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="Phone" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Your question</Form.Label>
    <Form.Control  type="text" placeholder="Question" />
  </Form.Group>
  <Button className='mb-3' variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Contact;