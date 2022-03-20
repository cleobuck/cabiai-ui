import React from 'react'
import "./searchbar.scss";
import SearchIcon from "../../assets/icons/search-inactive.svg";

export default function SearchBar({placeholder, isFocused}) {
  return (

    <div className="search-wrapper"> 
    <input type="text" placeholder={isFocused? "" : placeholder}/>
    <img src={SearchIcon} alt="search"/>
    </div>
    
  )
}
