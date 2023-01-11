import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Styles from "../Styles/table.module.css";

function TablePage() {
  return (
    <Fragment>
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
            <tr>
              <td>Nour</td>
              <td>Atef</td>
              <td>01289780115</td>
              <td>nouratef@gmail.com</td>
              <td>
                <NavLink to="/ModifyPage">
                  <button className={`${Styles.btn} ${Styles.edit}`}>
                    Edit
                  </button>
                </NavLink>
                <button className={`${Styles.btn} ${Styles.delete}`}>
                  Del
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default TablePage;
