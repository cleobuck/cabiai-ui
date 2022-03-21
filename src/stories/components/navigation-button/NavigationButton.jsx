import React from 'react'
import "./NavigationButton.scss";
import Chevron from "../../assets/svg/navigation-button/NavigationButton";

export default function NavigationButton({title, logo, onClick}) {
  return (
    <div className="titled-navigation">
      <img src={logo} alt=""/> 
      <p className="navigation-button-title"> {title}</p>
      <Chevron className="navigation-chevron"/>
    </div>
  )
}
