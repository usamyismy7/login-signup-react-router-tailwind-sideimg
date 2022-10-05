import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPatient from "./Components/LoginPatient";
import LoginDoctor from "./Components/LoginDoctor";
import LoginAdmin from "./Components/LoginAdmin";
import SignupPatient from "./Components/SignupPatient";
import SignupDoctor from "./Components/SignupDoctor";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginPatient />} />
        <Route path="/login-doctor" element={<LoginDoctor />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/signup-patient" element={<SignupPatient />} />
        <Route path="/signup-doctor" element={<SignupDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
