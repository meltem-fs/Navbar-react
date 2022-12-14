import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Bird from "./Pages/Bird";
import Anka from "./Pages/Anka";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="bird" element={<Bird />} />
            <Route index element={<Anka />} />
          </Route>

          <Route element={<About />} path="/about" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Error />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
