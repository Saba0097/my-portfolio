import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Clock from "./routes/DigitalClock";
import CV from "./routes/CV";
import Contact from "./routes/Contact";


import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/clock" element={<Clock />} />
    </Routes>
    </>
  )
}

export default App;
