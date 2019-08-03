import React from 'react'

const Box = (props) => {
  let className = "box"

  if (props.rounded) {
    className = `${className} rounded`
  }
  
  return ( 
    <div className={className}>
      {props.children}
    </div>
  );
}
 
export default Box;