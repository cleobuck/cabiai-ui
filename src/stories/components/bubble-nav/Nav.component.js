/** @format */

import React from "react";
 import "./nav.scss";
import PropTypes from "prop-types";


export default function NavComponent({ handleClick, step, howMany=5 }) {
 
  return (
    <>
      <div className="progress-bar">
        {Array.from(new Array(howMany)).map((value, index) => (
          <span
            key={`${index}`}
            className={`bubble ${
              step === index + 1 ? "active" : step > index+1? "done": ""
            }`}
            onClick={handleClick}
          ></span>
        ))}
      </div>
    </>
  );
}

NavComponent.propTypes = {
  handleClick: PropTypes.func,
  step: PropTypes.number
}
