import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../Assets/heroimmg.png"
import { Link } from "react-router-dom";

const Heroimmg = () => {
  return (
  <div className="hero">
        <div className="mask">
            <img className="intro-img" 
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M A DIETITIAN.</p>
            <h1>Promoting Healthy Lifestyle</h1>
            <div>
                <Link to="/Blog"
                className="btn">Blog</Link>
                <Link to="/contact"
                className="btn-gradient">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimmg;