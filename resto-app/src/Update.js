import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
import { useState } from "react";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import { useParams } from "react-router-dom";
import videoTwo from "../src/asset/product.mp4";

function Update() {
  const { id } = useParams();

  const [formdata, setformdata] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
    features: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setformdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);
  function handleChange(e) {
    const { name, value } = e.target;
    setformdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:8080/products/${id}`, formdata)
      .then(() => {
        alert("Item is updated");
      })
      .catch((error) => {
        console.error("Error updating", error);
      });
  }

  return (
    <div
      style={{
        height: "86vh",
      }}
      className="d-flex justify-content-center"
    >
      <div className="row container bg-white p-0">
        <div
          className="col-md-6 d-flex justify-content-center align-items-center p-0"
          style={{ position: "relative" }}
        >
          <video
            src={videoTwo}
            autoPlay
            muted
            loop
            type="video/mp4"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              objectFit: "cover",
              objectPosition: "center",
              borderTopRightRadius: "120px 120px",
            }}
          />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center p-0">
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <h3 className="mb-3 fw-bold">ADD PRODUCTS</h3>
            <div>
              <label htmlFor="ProductsName" className="form-label">
                Name of the item
              </label>
              <input
                style={{ width: "24rem" }}
                type="text"
                className="form-control"
                id="ProductsName"
                placeholder="name"
                value={formdata.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="ProductsPrice" className="form-label">
                Price of the item
              </label>
              <input
                style={{ width: "24rem" }}
                type="text"
                className="form-control"
                id="ProductsPrice"
                placeholder="Price"
                value={formdata.price}
                name="price"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="ProductsQuantity" className="form-label">
                Quantity of item
              </label>
              <input
                type="text"
                style={{ width: "24rem" }}
                className="form-control"
                id="ProductsQuantity"
                placeholder="Quantity"
                value={formdata.quantity}
                name="quantity"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Productsimage" className="form-label">
                Image of item
              </label>
              <input
                type="text"
                style={{ width: "24rem" }}
                className="form-control"
                id="Productsimage"
                placeholder="Image"
                value={formdata.image}
                name="image"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="ProductDescription" className="form-label">
                Ingredients
              </label>
              <textarea
                className="form-control mb-3"
                style={{ width: "24rem" }}
                id="ProductDescription"
                rows={4}
                placeholder="Ingredients"
                value={formdata.features}
                name="features"
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-success mx-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
