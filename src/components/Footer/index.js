import React from 'react';
import './style.css'
const Footer = (props) => {
    const { Name } = props
    return (
        <div className="footer">
            <p>@Copy right</p>
            <p>Made by: {Name}</p>
        </div>
    )
}
export default Footer