import React, { Fragment, useState } from "react";
import Header from "./Header";
import "../Styles/App.css";
import { NavLink } from "react-router-dom";
import Styles from "../Styles/table.module.css";

function HomePage({ persons, handleDelete, spacificPerson }) {
  const [searchFName, setSearchFName] = useState("");
  return (
    <Fragment>
      <Header />
      <div className="container search">
        <input
          type="text"
          placeholder="Search By First Name"
          value={searchFName}
          onChange={(e) => setSearchFName(e.target.value)}
        />
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {persons
              .filter((item) => {
                return searchFName.toLowerCase() === ""
                  ? item
                  : item.fname.toLowerCase().includes(searchFName);
              })
              .map((person) => {
                return (
                  <tr key={person.id}>
                    <td>{person.fname}</td>
                    <td>{person.lname}</td>
                    <td>{person.phone}</td>
                    <td>{person.email}</td>
                    <td>
                      <NavLink to="/ModifyPage">
                        <button
                          className={`${Styles.btn} ${Styles.edit}`}
                          onClick={() => {
                            spacificPerson(person.id);
                          }}
                        >
                          Edit
                        </button>
                      </NavLink>
                      <button
                        className={`${Styles.btn} ${Styles.delete}`}
                        onClick={() => handleDelete(person.id)}
                      >
                        Del
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="container">
        <NavLink to="/AddingPage">
          <button className="addbtn">Adding Item</button>
        </NavLink>
      </div>
    </Fragment>
  );
}

export default HomePage;
