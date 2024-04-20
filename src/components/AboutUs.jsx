import React from "react";

import "../sass/aboutUs.scss";

export default function AboutUs() {
  return (
    <div className="aboutUs" id="aboutUs">
      <div className="aboutUs__leftSide">
        <p>O nas</p>
        <span className="aboutUs__leftSide__line"></span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          blanditiis fugit debitis, in ea ab aut similique assumenda doloremque
          omnis autem, eaque libero quo temporibus repudiandae quidem. Enim,
          minus aliquam.
        </p>
        <span className="aboutUs__signature"></span>
      </div>
      <div className="aboutUs__rightSide"></div>
    </div>
  );
}
