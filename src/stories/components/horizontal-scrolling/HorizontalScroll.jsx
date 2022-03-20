
import React, {useRef, useEffect} from 'react'
import "./horizontalscroll.scss";


export default function HorizontalScroll({title, dimensions, overlay, data, TemplateComponent}) {



  const container = useRef(null)

 

  useEffect(() => {
    const position = { left: 0, x: 0 }

    const currentContainer = container.current;
    let mouseupstillprocessing = false;
  
    const mouseDownHandler = function (e) {
      e.preventDefault();
    
    position.left = currentContainer.scrollLeft;
    position.x = e.clientX;

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
        document.addEventListener('mouseleave', mouseUpHandler);
      
    
  };

  const mouseUpHandler = function () {

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    document.removeEventListener('mouseleave', mouseUpHandler);
    currentContainer.style.cursor = 'grab';
    currentContainer.style.removeProperty('user-select');

};

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      if(!mouseupstillprocessing) {
      const dx = e.clientX - position.x;
      // Scroll the element
      currentContainer.scrollLeft = position.left - dx;
      }
  };

  document.addEventListener('mousedown', mouseDownHandler)


  return () => document.removeEventListener("mousedown", mouseDownHandler);

  }, [])


  return (
<>
<h3 className="horizontal-scroll-title"> {title} <span>voir tout</span> </h3>
    <section style={{}}   ref={container} className="scrolling-display"> 
    

    {data.map((element) =>

      element.featureImg? 
      
      <div 
        style={ {background: `url(${element.featureImg}) center center/cover`, height: dimensions.height, width: dimensions.width}} 
        className={`list-item-scrollable ${overlay? "-overlay": ""}`}>

          <TemplateComponent data={element}/>
      </div>:

    <div 
      style={{height: dimensions.height, width: dimensions.width}} 
      className={`list-item-scrollable ${overlay? "-overlay": ""}`}>
        
      <TemplateComponent data={element}/>
    </div>
)}

    </section>
    </>
  )
}
