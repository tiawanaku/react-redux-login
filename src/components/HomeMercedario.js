// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavbarComponent from './Navbar';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Agrega este archivo para estilos personalizados

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="d-flex">
        <Sidebar />
        <Container fluid className="content">
          <Row>
            <Col md={12}>
              <Card className="my-3">
                <Card.Header>
                  <h3>Campo Santo Mercedario</h3>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <Card>
                        <Card.Header>Card Header</Card.Header>
                        <Card.Body>
                          <p>Content for card 1.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card>
                        <Card.Header>Card Header</Card.Header>
                        <Card.Body>
                          <p>Content for card 2.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;



