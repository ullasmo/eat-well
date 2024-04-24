import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ServicesSection from "./ServicesSection";
import Contact from "./Contact";
import Footer from "./Footer";

// import  { FaYoutube } from 'react-icons/fa';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className="container p-0 mt-2">
      <Container className="p-0 mb-4">
        <Carousel data-bs-theme="light" className="rounded-4">
          <Carousel.Item style={{ height: "500px", borderRadius: "2rem" }}>
            <img
              className="d-block w-100"
              src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Best View</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px", borderRadius: "2rem" }}>
            <img
              className="d-block w-100 "
              src="https://www.hotelin9.com/Hotelin9_common/images/homepage/diningBar/restaurant_22.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Best for dates</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px", borderRadius: "2rem" }}>
            <img
              className="d-block w-100"
              src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Hygienic food</h3>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Trending items */}
      <div className="bg-white p-4 rounded-3 mb-3">
        <h2 className="text-center">Trending items</h2>
        <div className="row">
          {product.map((p) => (
            <div className="col-md-4 mb-3" key={p.id}>
              <Link to={`/products/${p.id}`} style={{ textDecoration: "none" }}>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={p.image}
                    alt="Card image"
                    style={{ height: "260px" }}
                  />
                  <Card.ImgOverlay
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                    className="d-flex justify-content-end flex-column"
                  >
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.price} rupee</Card.Text>
                    <Card.Text>{p.quantity} available</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-3 mb-3">
        <ServicesSection></ServicesSection>
      </div>
      <div className="bg-white p-4 rounded-3 mb-3">
        <Contact></Contact>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Products;
