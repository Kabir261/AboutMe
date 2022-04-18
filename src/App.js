import React from "react";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
// import Blog from './Blog';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="blog" element={<Blog/>} /> */}
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
