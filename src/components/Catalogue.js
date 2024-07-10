import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const cart = () => {
  return (
    <Container>
      <h2>Shopping Cart</h2>
      <Row>
        <Col md={3}>
          <Image src="https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_640.jpg" thumbnail />
        </Col>
        <Col md={3}>
          <Image src="https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_640.jpg" thumbnail />
        </Col>
        <Col md={3}>
          <Image src="https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_640.jpg" thumbnail />
        </Col>
        <Col md={3}>
          <Image src="https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_640.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
};

export default cart;
