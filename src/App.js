import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AddingPage from "./Components/AddingPage";
// import ModifyPage from "./Components/ModifyPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/Crud-Database" exact element={<HomePage />} />
          <Route
            path="/AddingPage"
            element={<AddingPage title="ADDING ITEMS PAGE" btnN="ADD" />}
          />
          <Route
            path="/ModifyPage"
            element={<AddingPage title="MODIFYING ITEMS PAGE" btnN="MODIFY" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
