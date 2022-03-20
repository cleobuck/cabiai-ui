import React, {useState} from 'react'
import "./RadioButton.scss";
import PropTypes from "prop-types";

export default function RadioButton({checked, clickAction}) {

  return (
    <div onClick={clickAction}  className="radio-button">
        <span className={`${checked? "checked-radio-button": ""}`}> 

        </span>

    </div>
  )
}

RadioButton.propTypes = {
    checked: PropTypes.bool, 
    clickAction: PropTypes.func,
}
