import React from 'react'

const BasePage = (props) => {
    const className = props.center ? "flex-center" : ""
    return ( 
        <div id="Base-Page" className={className}>{props.children}</div>
     );
}
 
export default BasePage;