import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:
                    "white", marginRight: "2rem" }}/>
                    <div>
                        <p>Muscat</p>
                        <p>Oman</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:
                "white", marginRight: "2rem" }}/>
                +968 99830358</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:
                "white", marginRight: "2rem" }}/>
                Sabba.alrashdi44@gmail.com</h4>
                
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>This is me Saba Al Rashdi. A Dietitian and passionate about technology and currently is a Dotnxt affiliate. With training in multiple healthcare sectors, participation in awareness campaigns, and experience as an educator, I have developed skills in communication, counselling, meal planning, and familiarity with different systems in various institutions.</p>
                <div className="social">
                <FaInstagram size={30} style={{color:
                "white", marginRight: "1rem" }}
                />
                 <FaFacebook size={30} style={{color:
                "white", marginRight: "1rem" }}
                />
                 <FaLinkedin size={30} style={{color:
                "white", marginRight: "1rem" }}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer


