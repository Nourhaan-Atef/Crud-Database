import React, { Fragment } from "react";
import Header from "./Header";
import TablePage from "./TablePage";
import "../Styles/App.css";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <div className="container search">
        <input type="text" placeholder="Search" />
      </div>
      <TablePage />
      <div className="container">
     
      </div>
    </Fragment>
  );
}

export default HomePage;
