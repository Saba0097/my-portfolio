import { Link } from "react-router-dom"
import "./NavbarStyles.css"

import React, { useState, useEffect } from 'react'

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1040);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={isDesktop ? "header" : "header header-bg"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={isDesktop ? "nav-menu" : click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {!isDesktop && (
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
            <nav>
              <button onClick={handleClick}></button>
              {click && <ul>menu items</ul>}
            </nav>
          </div>
        )}
    </div>
  );
};

export default Navbar;
