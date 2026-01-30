import React from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

<div className="pt-16">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/adduser" element={<AddUser />} />
    <Route path="/edituser/:id" element={<EditUser />} />
    <Route path="/viewuser/:id" element={<ViewUser />} />
  </Routes>
</div>

    </>
  );
};

export default App;
