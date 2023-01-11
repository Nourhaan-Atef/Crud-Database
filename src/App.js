import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AddingPage from "./Components/AddingPage";
import { useState } from "react";
import ModifyPage from "./Components/ModifyPage";

function App() {
  const [persons, setPersons] = useState([
    {
      id: 1,
      fname: "nourhan",
      lname: "atef",
      email: "nour@gmail.com",
      phone: "0123456789",
    },
    {
      id: 2,
      fname: "koko",
      lname: "atef",
      email: "kok@gmail.com",
      phone: "0123486254",
    },
  ]);

  const [newPersonsData, setNewPersonsData] = useState([]);

  // MODIFY FUNCTIONS
  const spacificPerson = (id) => {
    const person = persons.filter((person) => person.id === id);
    const allPresonsExceptPerson = persons.filter((person) => person.id !== id);
    setNewPersonsData(person);
    setPersons(allPresonsExceptPerson);
  };
  // DELETE fUNCTON
  const handleDelete = (id) => {
    const deletedITem = persons.filter((person) => person.id !== id);
    setPersons(deletedITem);
  };
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/Crud-Database"
            exact
            element={
              <HomePage
                persons={persons}
                handleDelete={handleDelete}
                spacificPerson={spacificPerson}
              />
            }
          />
          <Route
            path="/AddingPage"
            element={
              <AddingPage
                title="ADDING ITEMS PAGE"
                btnN="ADD"
                persons={persons}
                setPersons={setPersons}
              />
            }
          />
          <Route
            path="/ModifyPage"
            element={
              <ModifyPage
                title="MODIFYING ITEMS PAGE"
                btnN="MODIFY"
                persons={persons}
                newPersonsData={newPersonsData}
                setPersons={setPersons}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
