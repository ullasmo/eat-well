import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import videoOne from "../src/asset/login.mp4";

function Register() {
  let navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setRegister((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });
      if (response.ok) {
        navigate("/login");
      } else {
        const errorMessage = await response.text();
        window.alert(errorMessage); // Display error message as alert
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        height: "90vh",
      }}
      className="d-flex justify-content-center"
    >
      <div
        className="bg-white row p-0 rounded-3 container mt-5"
        style={{ height: "70vh" }}
      >
        <div
          className="col-md-6 d-flex justify-content-center align-items-center p-0"
          style={{ position: "relative" }}
        >
          <video
            src={videoOne}
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
              objectPosition: "70%",
              borderTopRightRadius: "120px 120px",
            }}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <Form>
            <h2 className="mb-5 fw-bold">REGISTER PAGE</h2>
            <Form.Group className="mb-3" controlId="UserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={register.username}
                name="username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={register.email}
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={register.password}
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="warning"
              type="button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
            <p className="mt-3">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
