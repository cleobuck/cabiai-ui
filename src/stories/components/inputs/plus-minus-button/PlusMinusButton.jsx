import React from 'react'
import "./PlusMinusButton.scss";
import LessButton from "./assets/lessbutton.svg";
import MoreButton from "./assets/morebutton.svg";
import PropTypes from "prop-types";


export default function PlusMinusButton({amount}) {
  return (
    <button class="plus-minus-button"> <img src={LessButton} alt="minus" /> {amount} <img src={MoreButton} alt="plus"/>  </button>
  )
}

PlusMinusButton.propTypes = {
  amount: PropTypes.number
}


