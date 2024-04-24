import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import videoOne from "../src/asset/login.mp4";

function Login() {
  let navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit() {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${login.username}&password=${login.password}`,
      });
      console.log(response);
      if (response.ok) {
        navigate("/addproduct");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error:", error);
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
            type="vedio/mp4"
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
            <h2 className="mb-5 fw-bold">ADMIN LOGIN PAGE</h2>
            <Form.Group className="mb-3" controlId="UserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                value={login.username}
                name="username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={login.password}
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="warning" type="button" onClick={handleSubmit}>
              Submit
            </Button>
            <p className="mt-3">
              Dont have an account ?{" "}
              <span>
                <Link to="/register">Register</Link>
              </span>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
