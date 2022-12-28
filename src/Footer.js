import React from "react";
import './Header.css'


function footer(){
    const d = new Date();
    let year = d.getFullYear();
    return (
<>

<h5 className='heading'>Powered_By:Onward Technology pvt Limited {year}</h5>

</>
    );
}

export default footer;
