import React from 'react'

const Button = ({buttonText, buttonStyle, handleClick}) => {
  return (
    <button className ={buttonStyle} onClick={handleClick}>{buttonText}</button>
  )
}

export default Button