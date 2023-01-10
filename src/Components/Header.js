import React, { Fragment } from "react";
import "../Styles/App.css"
import database from "../assets/cloud-database.png";
function Header() {
  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-10 col-md-9 col-8">
            <h1>CRUD DATABASE</h1>
          </div>
          <div className="col-lg-2 col-md-3 col-4">
            <img
              src={database}
              alt="dataase img"
              width="50px"
              height="50px"
            ></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
