import "./CVContentStyles.css";
import React from 'react';
import myCV from "../Assets/myCV.pdf";
import cvIcon from "../Assets/cvIcon.png";

const CVContent = () => {

  function downloadCV() {
    window.open(myCV);
  }

  return (
    <div className="cv-content">
        <div className="cv-icon-container">
            <img src={cvIcon} alt="CV Icon" className="cv-icon" />
        </div>
        <h1>Please Find My CV attached below</h1>
        <button className="cv-download-button" onClick={downloadCV}>
            Download CV
        </button>
    </div>
  );
}

export default CVContent;
