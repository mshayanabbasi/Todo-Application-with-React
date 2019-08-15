import React from 'react'
import './Input.css'
const Input = (props) => {
  const { type, value, placeholder, name, onChange } = props
  return (
    <div>
      <input className="input"
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={(event) => onChange(event)}
      />
    </div>
  )
}

export default Input
