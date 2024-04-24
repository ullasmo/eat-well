import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
function Dashboard() {
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

  function handleDelete(id) {
    axios
      .delete(`http://localhost:8080/products/${id}`)
      .then((response) => {
        if (response.status === 200) {
          alert("Item's data is Deleted");
        } else {
          console.error("Error:", response.statusText);
        }
      })

      .catch((error) => {
        console.log("Error:", error);
      });
  }

  const update = useNavigate();
  function handleUpdate(id) {
    update(`${id}`);
  }

  return (
    <div style={{ minHeight: "100vh" }} className="container p-0">
      <h2 className="fw-bold text-center">DASHBOARD</h2>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Ingredients</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    height: "160px",
                    width: "160px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td style={{ width: "10rem" }}>{product.features}</td>
              <td>
                <Button
                  className="btn btn-warning"
                  onClick={() => handleUpdate(product.id)}
                >
                  Edit
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Dashboard;
