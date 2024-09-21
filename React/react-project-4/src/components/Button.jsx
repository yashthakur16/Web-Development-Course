import React from 'react'

const button = (props) => {
  return (
    <div>
        {props.children}
        <br />
      <button onClick={props.Click}>
        
        {props.text}
        
        </button>
    </div>
  )
}

export default button
