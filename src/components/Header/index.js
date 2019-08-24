import React, { Component } from 'react';
import './style.css'

 const Header = (props) => {
    const { Title } = props
    return (
        <div className='headerContainer' >
            {/* <div style={{width:'200px',backgroundColor:"blue"}}> */}
            <p className='titleStyle'>{Title}</p>

            {/* </div> */}
        </div>
    )
}
export default Header