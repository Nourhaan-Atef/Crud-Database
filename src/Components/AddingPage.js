import React, { Fragment } from "react";
import Header from "./Header";
import "../Styles/App.css";
import { NavLink } from "react-router-dom";
function AddingPage({ title, btnN }) {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <h2>{title}</h2>
        <form>
          <div className="row">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Please Enter Your First Name"
              required
            />
          </div>
          <div className="row">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Please Enter Your Last Name"
              required
            />
          </div>
          <div className="row">
            <label>Email</label>
            <input
              type="email"
              placeholder="Please Enter Your Email"
              required
            />
          </div>
          <div className="row">
            <label>Phone</label>
            <input type="number" placeholder="Please Enter Your Phone" />
          </div>
          <button className="btn">{btnN}</button>
          <NavLink to="/Crud-Database">
            <button className="btn">BACK TO HOME</button>
          </NavLink>
        </form>
      </div>
    </Fragment>
  );
}

export default AddingPage;
