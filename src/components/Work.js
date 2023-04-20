import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="Project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard 
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.Text}
              view={val.view}
              Date={val.Date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
