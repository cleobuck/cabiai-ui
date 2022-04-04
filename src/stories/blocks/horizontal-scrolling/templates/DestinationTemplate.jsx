import React from 'react'
import "./destinationtemplate.scss";
import LocationIcon from "./assets/Location.svg";

export default function DestinationTemplate({data}) {
  return (
    <div className="destination-scroll-template">
      <img src={LocationIcon} alt=""/>
      <h4 class="scroll-destination-title"> {data.destination} </h4>
      <span class="scroll-destination-posts"> {data.numOfPosts} {data.numOfPosts>1? "annonces": "annonce"} </span>
    </div>
  )
}
