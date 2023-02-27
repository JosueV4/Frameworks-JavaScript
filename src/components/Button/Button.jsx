import React from 'react'
import './Button.css'

const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <span>Siguiente</span>
      <span>➡</span>
    </button>
  );
};
import './Button.css'

export default Button;
