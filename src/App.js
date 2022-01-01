import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Service from "./Component/Service";
import Navbar from "./Navbar";
import './index.css';

export default function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
     
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/service" element={<Service />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
