import React, { Fragment, useState } from "react";
import Header from "./Header";
import "../Styles/App.css";
import { NavLink } from "react-router-dom";
function ModifyPage({ title, btnN, persons, newPersonsData, setPersons }) {
  const [fname, setFname] = useState(newPersonsData[0].fname);
  const [lname, setLname] = useState(newPersonsData[0].lname);
  const [phone, setPhone] = useState(newPersonsData[0].phone);
  const [email, setEmail] = useState(newPersonsData[0].email);

  const handleModify = (e) => {
    e.preventDefault();
    setPersons([
      ...persons,
      {
        id: newPersonsData[0].id,
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
      },
    ]);
    return persons;
  };
  return (
    <Fragment>
      <Header />
      <div className="container">
        <h2>{title}</h2>
        <form onSubmit={handleModify}>
          <div className="row">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Please Enter Your First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Please Enter Your Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <label>Email</label>
            <input
              type="email"
              placeholder="Please Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <label>Phone</label>
            <input
              type="number"
              placeholder="Please Enter Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
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

export default ModifyPage;
