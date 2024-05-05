import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// IMPORT PROVIDERS
import { UserContextProvider } from "./context/UserContext";
import { CountersContextProvider } from "./context/CountersContext";
import { FormContextProvider } from "./context/FormContext.jsx";
//IMPORT COMPONENST
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import OddajRzeczy from "./components/OddajRzeczy.jsx";

export default function App() {
  return (
    <Router>
      <UserContextProvider>
        {/* <FormContextProvider> */}
          <CountersContextProvider>
            <div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/Register" element={<Register />} />
                <Route exact path="/Logout" element={<Logout />} />
                <Route exact path="/OddajRzeczy" element={<OddajRzeczy />} />
              </Routes>
            </div>
          </CountersContextProvider>
        {/* </FormContextProvider> */}
      </UserContextProvider>
    </Router>
  );
}
