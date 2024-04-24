import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Products from "./Products";
import AddProduct from "./AddProduct";
import Login from "./Login";
import Dashboard from "./Dashbord";
import Update from "./Update";
import Register from "./Register";
import ProductDetail from "./ProductDetails";

function MainRoute() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/addproduct/table" element={<Dashboard />}></Route>
          <Route path="/addproduct/table/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainRoute;
