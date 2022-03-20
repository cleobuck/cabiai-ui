import React from 'react'
import PropTypes from 'prop-types';

import SearchIcon from "./assets/search.svg";
import FavoriteIcon from "./assets/heart.svg";
import AdvantagesIcon from "./assets/advantages.svg";
import UserIcon from "./assets/user.svg";

import SearchIconActive from "./assets/search-act.svg";
import FavoriteIconActive from "./assets/heart-act.svg";
import AdvantagesIconActive from "./assets/advantages-act.svg";
import UserIconActive from "./assets/user-act.svg";
import AddButton from "./assets/add-button.svg";
import { NavLink } from "./NavLink";

import "./menu.scss";


export default function Menu({ activeLink, profilePicture=undefined }) {
const path = "M378.328 6.1394H378c-1.194 0-2.353 0-2.505 0-1.444 0-11.559 0-23.823 0-12.582 0-22.902 0-23.918 0-.091 0-.977 0-2.082 0h-9c-1.194 0-2.353 0-2.505 0-1.444 0-11.559 0-23.823 0-12.582 0-22.902 0-23.918 0-.091 0-.977 0-2.082 0h-.672 C250.745 5 240.511 16.6533 233.017 27.5866 225.81 38.1017 213.711 45 200 45 186.289 45 174.19 38.1017 166.983 27.5866 159.489 16.6533 149.255 5 136 5c-1.194 0-2.353 0-2.505 0-1.444 0-11.559 0-23.823 0-12.582 0-22.902 0-23.918 0-.091 0-.977 0-2.082 0h-9c-1.194 0-2.353 0-2.505 0-1.444 0-11.559 0-23.823 0-12.582 0-22.902 0-23.918 0-.091 0-.977 0-2.082 00-5.9268 0-16.672 10.7452-16.672 24V45C5 58.2548 15.7452 69 29 69H371C384.255 69 395 58.2548 395 45V29C395 18.3009 387.999 9.2369 378.328 6.1394Z"
  const svgClass = (activeLink) => {
    switch (activeLink) {
      case "Compte":
        return "user-active";
      case "Annonces":
        return "posts-active";
      case "Favoris":
        return "favorite-active";
      case "Avantages":
        return "advantages-active";
      default:
        return undefined;
    }
  }



    return (
      <div className="temporary-background">
      
        <div class="menu-wrapper">

          <div class="svg-container">

         
            <svg version="1.1" viewBox="0 0 402 76" preserveAspectRatio="xMinYMin meet" className={`menu-background ${svgClass(activeLink)}`}>
            <g filter="url(#filter0_d_1255_1356)">
          <path fill-rule="evenodd" clip-rule="evenodd" d={path} fill="#F8FCFD" />
</g>
<defs>
            <filter id="filter0_d_1255_1356" x="0" y="0.410889" width="402" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.148021 0 0 0 0 0.172352 0 0 0 0 0.175 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1255_1356"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1255_1356" result="shape"/>
</filter>
</defs>
            </svg>
         
        </div>

          <ul className="menu-bar">
            <NavLink label="Annonces" active={activeLink === "Annonces"} icon={SearchIcon} iconActive={SearchIconActive} />
            <NavLink label="Favoris" active={activeLink === "Favoris"} icon={FavoriteIcon} iconActive={FavoriteIconActive} />
            <NavLink label="Poster" icon={AddButton} iconActive={AddButton} className="menu-add-button" ghostElement />
            <NavLink label="Avantages" active={activeLink === "Avantages"} icon={AdvantagesIcon} iconActive={AdvantagesIconActive} />
            <NavLink label="Compte"  active={activeLink === "Compte"} profilePicture={profilePicture} icon={profilePicture || UserIcon} iconActive={profilePicture || UserIconActive} />:

          </ul>
        </div>
      </div>)
  }

  Menu.propTypes = {
    activeLink: PropTypes.oneOf(["annonces", "favoris", "avantages", "compte"]),
  }
