import { Button, Col, Form, Row } from 'react-bootstrap';
import { BASE_PLACEHOLDER_URL } from '../../constants/constants.ts';
import React, { useEffect, useRef, useState } from 'react';
import { IFeedback } from '../../../types';

const AboutMe = () => {
  const [feedback, setFeedback] = useState<IFeedback[]>([]);
  const isSubmitted = useRef(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget
    const newFeedback: IFeedback = {
      username: target.username.value,
      email: target.email.value,
      message: target.message.value,
    };
    setFeedback((prevState) => [...prevState, newFeedback]);
    target.reset();
    isSubmitted.current = true;
  };

  useEffect(() => {
    if (isSubmitted.current) {
      console.log(feedback);
    }
  }, [feedback]);

  return (
    <Row className="justify-content-around mt-5">
      <Col lg={12} className="mb-5">
        <div className="d-flex align-items-center">
          <div className="me-3 w-75">
            <h2 className="mb-3">About me title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at atque beatae consequatur dolor
              iste iure nesciunt placeat sint. A aut blanditiis consectetur dolor enim eum illum, magnam maxime minus
              neque nesciunt nostrum, quaerat quis voluptas voluptatem? Doloribus nesciunt nulla omnis optio rerum
              tenetur ut! A aperiam est nemo nihil, optio quam repellat ullam!
            </p>
          </div>
          <div>
            <img src={BASE_PLACEHOLDER_URL + '250x350'} style={{ width: '250px' }} alt="john's pic" />
          </div>
        </div>
      </Col>
      <Col lg={12}>
        <div className="d-flex align-items-start justify-content-between">
          <div>
            <img src={BASE_PLACEHOLDER_URL + '250x350'} style={{ width: '250px' }} alt="gallery pic" />
          </div>
          <div className="flex-grow-1 ps-5">
            <h3 className="mb-3">Contact me</h3>
            <Form className="d-flex flex-column" onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Example: John" name="username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" />
              </Form.Group>
              <Button type="submit" variant="primary" className="ms-auto">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AboutMe;
