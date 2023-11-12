import React from "react";
import { NavLink } from "react-router-dom";

function HeaderContent(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Brand Icon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Hire Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Ebook</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Blog</a>
              </li>
            </ul>
            <span className="navbar-text">
            <a className="nav-link" href="/">Login</a>
            </span>
          </div>
        </div>
      </nav>
    )
}

export default HeaderContent