import React from 'react'
import "./textStyles.scss";

export default function TextStyles({format}) {
  return (
    <div> 

{format === "headers" && 
<> 
 <p className="header-1"> Header 1 </p>
 <p  className="header-2"> Header 2 </p>
 <p  className="header-3"> Header 3 </p>
 <p  className="header-4"> Header 4 </p>
 <p  className="header-5"> Header 5 </p>
 <p  className="header-6"> Header 6 </p>
 </>
}

{format === "subtitles" && 

<> 
<p  className="subtitle-1"> Subtitle 1 </p>

<p  className="subtitle-2"> Subtitle 2 </p>

</>
}

{format === "body" && 

<> 

<p  className="body-1"> body 1 </p>
        <p  className="body-2"> body 2 </p>

</>
}

{format === "others" && 

<> 

<p  className="button-text"> button </p>
        <p  className="caption-text"> caption </p>
        <p  className="overline-text"> overline </p>


</>
}
       
       




     


    </div>
  )
}
