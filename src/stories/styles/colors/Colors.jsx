import React from 'react'
import "./colors.scss";

export default function Colors({format}) {
  return (
    <div className="colors-display"> 

      {format === "palette" && <> 
      <p className="primary-color"> Primary </p>
        <p className="primary-color-inactive"> Primary Active </p>
        <p className="secondary-color-1"> Secondary 1 </p>
        <p className="secondary-color-2"> Secondary 2 </p>
        <p className="secondary-color-3"> Secondary 3 </p>
        <p className="inactive-color"> Color Inactive </p>
      </>}

      {format === "system-message" && <> 
      <p className="warning-color"> warning </p>
      <p className="error-color"> error </p>
      <p className="success-color"> success </p>
      <p className="information-color"> information </p></>
      }

      {format === "fonts" && <> 
      <p className="dark-font"> dark font </p>
      <p className="light-font"> light font </p>
      <p className="inactive-font"> inactive font </p>
      <p className="placeholder-font"> placeholder font </p></>
      }
  
    </div>
  )
}
