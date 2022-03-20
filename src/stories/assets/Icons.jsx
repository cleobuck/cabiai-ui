import React from 'react'
import "./icons.scss";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./icons', false, /\.(png|jpe?g|svg)$/));

const logos = importAll(require.context('./logos', false, /\.(png|jpe?g|svg)$/));


const getImage = (fileName) => images[fileName].default

const getLogos = (fileName) => logos[fileName].default

// import AdvantagesBlackCircle from "./icons/"

export default function Icons({logoImages}) {
  return (
    <div className="icons-set">

      {logoImages? 
      <> 
      <img src={getLogos('drawing-logo.png')} />
      <img src={getLogos('favicon.png')}/>      
      <img src={getLogos('full-logo.png')}/>
      <img src={getLogos('text-logo.png')}/>
    
      </> : <>
    

      <img src={getImage('add-white-circle.svg')} />
      <img src={getImage('Attention-Triangle.svg')}/>      
      <img src={getImage('advantages-black-circle.svg')}/>
      <img src={getImage('success-icon.svg')}/>

      <img src={getImage('advantages-black-circle.svg')}/>
      <img src={getImage('advantages-black.svg')}/>
      <img src={getImage('advantages-white.svg')}/>
      <img src={getImage('back-button.svg')}/>
      <img src={getImage('bell.svg')}/>
      <img src={getImage('close.svg')}/>
      <img src={getImage('download-circle.svg')}/>
      <img src={getImage('edit.svg')}/>
      <img src={getImage('heart-black.svg')}/>
      <img src={getImage('heart-circle.svg')}/>
      <img src={getImage('heart.svg')}/>
      <img src={getImage('home-black.svg')}/>
      <img src={getImage('home.svg')}/>
      <img src={getImage('info-white-circle.svg')}/>
      <img src={getImage('message.svg')}/>
      <img src={getImage('note.svg')}/>
      <img src={getImage('search-black-circle.svg')}/>
      <img src={getImage('search.svg')}/>
      <img src={getImage('setting.svg')}/>
      <img src={getImage('substract-white-circle.svg')}/>

      <img src={getImage('user-black.svg')}/>
      <img src={getImage('user-circle.svg')}/>
      <img src={getImage('user-white-circle.svg')}/>
      <img src={getImage('user.svg')}/>
      <img src={getImage('users.svg')}/>
      <img src={getImage('warning-white-circle.svg')}/>

      </>}
          
    </div>
  )
}
