import React from 'react'
import "./searchbar.scss";
import SearchIconHomePage from "./assets/search-homepage.svg";
import SearchIcon from "./assets/search.svg";
import Close from "./assets/close.svg";

export default function SearchBar({placeholder, isFocused, homepage=false}) {
  return (

    <div className={`search-wrapper ${homepage? "": "-generic"} ${isFocused? "-focused": ""}`}> 
    <input type="text" placeholder={isFocused && homepage? "" : placeholder}/>
    <img src={homepage? SearchIconHomePage: isFocused? Close: SearchIcon} alt="search"/>
    </div>
    
  )
}
