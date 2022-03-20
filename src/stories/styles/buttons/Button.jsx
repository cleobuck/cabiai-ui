import React from 'react'
import "./button.scss";

export default function Button({title, active=true, style, social}) {
  return social? 
    
    <button className={`${style} social-button`}>
      <img src={social} alt="" />{title} </button>: 
    <button className={`${style} ${active? "": "button-inactive"}`}>{title} </button>
  
}
