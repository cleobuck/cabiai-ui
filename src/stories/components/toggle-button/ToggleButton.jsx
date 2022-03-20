import React  from 'react'
import "./ToggleButton.scss";
import PropTypes from "prop-types";

export default function ToggleButton({checked, clickAction}) {

  return (
    <div onClick={clickAction}  className={`toggle-button ${checked? "-active": ""}`}>
        <span className={`inner-toggle ${checked? "-active": ""}`}> 

        </span>

    </div>
  )
}

ToggleButton.propTypes = {
    checked: PropTypes.bool, 
    clickAction: PropTypes.func,
}
