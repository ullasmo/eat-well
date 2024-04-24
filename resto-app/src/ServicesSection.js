import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const ServicesSection = () => {
  return (
    <section className=" py-5" id="services">
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="d-flex justify-content-between">
          <Col md={3} className="mb-3">
            <div className="text-center">
              <i className="bi bi-house-door h1 text-primary mb-3"></i>
              <h4 className="mb-3">Dine-In</h4>
              <p>
                Enjoy a cozy dining experience in our restaurant with a wide
                range of delicious dishes.
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="text-center">
              <i className="bi bi-box h1 text-primary mb-3 text-dark"></i>
              <h4 className="mb-3">Takeout</h4>
              <p>
                Order your favorite meals online and pick them up at your
                convenience.
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="text-center">
              <i className="bi bi-truck h1 text-primary mb-3"></i>
              <h4 className="mb-3">Delivery</h4>
              <p>
                We deliver delicious food right to your doorstep. Enjoy the
                convenience of home delivery.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
