import React, { Fragment } from "react";
import Header from "./Header";
import TablePage from "./TablePage";
import "../Styles/App.css";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <div className="container search">
        <input type="text" placeholder="Search About Item" />
      </div>
      <TablePage />
      <div className="container">
        <NavLink to="/AddingPage">
          <button className="addbtn">Adding Item</button>
        </NavLink>
      </div>
    </Fragment>
  );
}

export default HomePage;
