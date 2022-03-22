import React from 'react'
import Badges from '../../styles/badges/Badges';
import "./PostCard.scss";
import { formatDate } from '../../utils/DateUtils';
import { calculateDays } from '../../utils/DateUtils';
import CloseButton from '../../assets/svg/close-button/close-button';


export default function PostCard({data, favorite, unavailable}){

  
  return (
    <div className="post-card">

<div className="post-card-date-line"> 

<div className="date-line-text"> 
      <span> {formatDate(data.startDate)} </span> 
      <span className="date-separator"> - </span> 
      <span> {formatDate(data.endDate)} </span>
      <span className="card-date-dot">·</span>
      <span className="card-total-days"> {calculateDays(data.startDate, data.endDate)} jours </span>
      </div>
     {data.flexibleDate && !favorite && <Badges title="Date flexible" neutral="true"/> } 
     {favorite && <CloseButton className="post-favorite-close "/>} 
      </div>

      {data.flexibleDate && favorite && <Badges title="Date flexible" neutral="true"/>} 

      <h3 className="post-card-title"> {data.title} </h3>

      <div className="badge-list"> 
      {data.countryList.filter((country, index) => index<3).map(country => <Badges title={country} active />)}
      
      {data.countryList.length > 3 && <Badges active title={`+ ${data.countryList.length-3}`}/>}
      </div>

      {unavailable && <div className="post-unavailable"> </div>}
    </div>
  )
}
