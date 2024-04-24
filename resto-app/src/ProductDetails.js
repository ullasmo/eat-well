import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="container mt-4"
      style={{
        height: "90vh",
      }}
    >
      <div
        className="bg-white row p-0 rounded-3 container mt-5"
        style={{ height: "70vh" }}
      >
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid w-100"
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="">
            <div className="">
              <h2 className="card-title">{product.name}</h2>
              <h5 className="card-text mt-2">Price: {product.price} rupee</h5>
              <p className="card-text">Quantity: {product.quantity}</p>
              <h4 className="card-text">Ingredients:</h4>
              <p className="card-text">{product.features}</p>
              <Link to={"/"} className="w-50 btn btn-warning">
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
