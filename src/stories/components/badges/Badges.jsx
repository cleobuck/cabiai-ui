import React from 'react'
import "./badges.scss"

export default function Badges({title, active, neutral=false}) {
  return (
    <span className={`badge ${active? "-active": neutral? "-neutral":""}`}> {title} </span>
  )
}
