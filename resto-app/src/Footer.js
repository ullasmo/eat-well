import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white p-4  rounded-3 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Information</h5>
            <p>1234 Street Name, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="#!" className="text-white">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-white">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-white">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Epic Flavor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
