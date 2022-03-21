import "./Checkbox.scss";

import React from "react";
import CheckBoxActive from "./assets/checkbox-active.svg";
import CheckBoxInactive from "./assets/checkbox-inactive.svg";
import PropTypes from "prop-types";

export default function CheckBox({ checked }) {
  return (
    <div className="check-box">
      <input type="checkbox" checked={checked} />
      <img
        src={checked ? CheckBoxActive : CheckBoxInactive}
        className="visual-checkbox"
        alt=""
      />
    </div>
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
};
